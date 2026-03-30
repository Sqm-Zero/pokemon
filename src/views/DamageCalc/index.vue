<template>
    <div class="damage-calc">
        <Top
            title="伤害计算器"
            icon="pokemon"
            router="/"
            color="linear-gradient(90deg, #1a1a2e, #4a148c, #c62828)"
            @icon_func="() => {}"
        />

        <div class="scroll">
            <div class="page-inner">
            <p class="hint-banner">
                <span class="hint-badge">Gen6</span>
                双打伤害估算 · 能力与<strong>图鉴详情页</strong>同公式 · 天气、个体努力等在底部折叠
            </p>

            <el-form label-position="top" class="form">
                <div class="block-title">攻守</div>
                <div class="battle-arena">
                <div class="battle-columns">
                    <div class="battle-col">
                        <div class="side-card attacker-side">
                            <div class="side-label">进攻方</div>
                            <el-form-item label="宝可梦" class="form-item-tight">
                                <el-select
                                    v-model="attackerNo"
                                    filterable
                                    clearable
                                    size="small"
                                    placeholder="搜索名称或编号"
                                    class="full"
                                    :filter-method="filterPokemon"
                                >
                                    <el-option
                                        v-for="p in pokemonFiltered"
                                        :key="p.编号"
                                        :label="`${p.名称} (#${p.编号})`"
                                        :value="p.编号"
                                    >
                                        <div class="opt-with-sprite">
                                            <img class="opt-sprite" :src="pokemonImageSrc(p.编号)" alt="" />
                                            <span>{{ p.名称 }} (#{{ p.编号 }})</span>
                                        </div>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <div v-if="attacker" class="poke-strip poke-strip--atk">
                                <img class="poke-sprite-lg" :src="pokemonImageSrc(attackerNo)" alt="" />
                                <div class="poke-strip-meta">
                                    <p class="poke-name">{{ attacker.名称 }}</p>
                                    <p class="poke-id muted">#{{ attacker.编号 }}</p>
                                    <div class="type-row type-row--compact">
                                        <span
                                            v-for="t in attacker.属性"
                                            :key="t"
                                            class="type-tag"
                                            :style="{ background: colorMap[t] || '#666' }"
                                            >{{ t }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <el-row :gutter="8" class="row-tight">
                                <el-col :span="12">
                                    <el-form-item label="等级">
                                        <el-input-number
                                            v-model="levelAtk"
                                            :min="1"
                                            :max="100"
                                            size="small"
                                            controls-position="right"
                                            class="full-num"
                                        />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="性格">
                                        <el-select v-model="attackerNature" class="full" size="small" filterable>
                                            <el-option v-for="n in natureNameKeys" :key="'atk-n-' + n" :label="n" :value="n" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <p v-if="attackerStats" class="stat-line">
                                参与伤害：<strong>物攻 {{ attackerStats[1] }}</strong> · <strong>特攻 {{ attackerStats[3] }}</strong>
                                <span class="muted">（速 {{ attackerStats[5] }}）</span>
                            </p>
                            <el-form-item v-if="attacker" label="特性">
                                <el-select v-model="attackerAbilityKey" class="full" size="small" filterable clearable placeholder="无">
                                    <el-option-group v-if="attackerSlotAbilities.length && !showFullAtkAbilities" label="图鉴槽位">
                                        <el-option v-for="a in attackerSlotAbilities" :key="'atk-s-' + a" :label="a" :value="a" />
                                    </el-option-group>
                                    <el-option-group v-if="showFullAtkAbilities || !attackerSlotAbilities.length" label="全表 reqAbility">
                                        <el-option v-for="a in allAbilityNames" :key="'atk-a-' + a" :label="a" :value="a" />
                                    </el-option-group>
                                </el-select>
                                <el-checkbox v-if="attackerSlotAbilities.length" v-model="showFullAtkAbilities" class="inline-check">
                                    显示全表特性
                                </el-checkbox>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="battle-vs-col" aria-hidden="true">
                        <span class="battle-vs-text">VS</span>
                    </div>
                    <div class="battle-col">
                        <div class="side-card defender-side">
                            <div class="side-label defend-label">受击方</div>
                            <el-form-item label="宝可梦" class="form-item-tight">
                                <el-select
                                    v-model="defenderNo"
                                    filterable
                                    clearable
                                    size="small"
                                    placeholder="搜索名称或编号"
                                    class="full"
                                    :filter-method="filterPokemonDef"
                                >
                                    <el-option
                                        v-for="p in pokemonFilteredDef"
                                        :key="p.编号"
                                        :label="`${p.名称} (#${p.编号})`"
                                        :value="p.编号"
                                    >
                                        <div class="opt-with-sprite">
                                            <img class="opt-sprite" :src="pokemonImageSrc(p.编号)" alt="" />
                                            <span>{{ p.名称 }} (#{{ p.编号 }})</span>
                                        </div>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <div v-if="defender" class="poke-strip poke-strip--def">
                                <img class="poke-sprite-lg" :src="pokemonImageSrc(defenderNo)" alt="" />
                                <div class="poke-strip-meta">
                                    <p class="poke-name">{{ defender.名称 }}</p>
                                    <p class="poke-id muted">#{{ defender.编号 }}</p>
                                    <div class="type-row type-row--compact">
                                        <span
                                            v-for="t in defender.属性"
                                            :key="t"
                                            class="type-tag"
                                            :style="{ background: colorMap[t] || '#666' }"
                                            >{{ t }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <el-row :gutter="8" class="row-tight">
                                <el-col :span="12">
                                    <el-form-item label="等级">
                                        <el-input-number
                                            v-model="levelDef"
                                            :min="1"
                                            :max="100"
                                            size="small"
                                            controls-position="right"
                                            class="full-num"
                                        />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="性格">
                                        <el-select v-model="defenderNature" class="full" size="small" filterable>
                                            <el-option v-for="n in natureNameKeys" :key="'def-n-' + n" :label="n" :value="n" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <p v-if="defenderStats" class="stat-line">
                                参与伤害：<strong>防御 {{ defenderStats[2] }}</strong> · <strong>特防 {{ defenderStats[4] }}</strong>
                                <span class="muted">（速 {{ defenderStats[5] }}）</span>
                            </p>
                            <el-form-item v-if="defenderStats" label="当前 HP（占最大 HP 比例）">
                                <el-slider
                                    v-model="defenderHpScalePercent"
                                    :min="1"
                                    :max="100"
                                    size="small"
                                    show-input
                                    :show-input-controls="false"
                                />
                                <p class="hp-scale-hint">
                                    有效 HP <strong>{{ defenderEffectiveHp }}</strong> / 最大
                                    <strong>{{ defenderStats[0] }}</strong>
                                    <span class="muted">（击杀判定按该数值）</span>
                                </p>
                            </el-form-item>
                            <el-form-item v-if="defender" label="特性">
                                <el-select v-model="defenderAbilityKey" class="full" size="small" filterable clearable placeholder="无">
                                    <el-option-group v-if="defenderSlotAbilities.length && !showFullDefAbilities" label="图鉴槽位">
                                        <el-option v-for="a in defenderSlotAbilities" :key="'def-s-' + a" :label="a" :value="a" />
                                    </el-option-group>
                                    <el-option-group v-if="showFullDefAbilities || !defenderSlotAbilities.length" label="全表 reqAbility">
                                        <el-option v-for="a in allAbilityNames" :key="'def-a-' + a" :label="a" :value="a" />
                                    </el-option-group>
                                </el-select>
                                <el-checkbox v-if="defenderSlotAbilities.length" v-model="showFullDefAbilities" class="inline-check">
                                    显示全表特性
                                </el-checkbox>
                            </el-form-item>
                            <el-form-item v-if="defenderMods.multiscale" label="多重鳞片">
                                <el-checkbox v-model="multiscaleFullHp">防守方满 HP（减伤）</el-checkbox>
                            </el-form-item>
                        </div>
                    </div>
                </div>
                </div>

                <div class="content-panel">
                <div class="block-title">招式</div>
                <el-form-item label="技能">
                    <el-select v-model="moveName" filterable clearable size="small" placeholder="选择技能" class="full" :filter-method="filterMove">
                        <el-option
                            v-for="m in movesFiltered"
                            :key="m.move_id"
                            :label="`${m.move} · ${m.type} · ${m.category} · ${m.power}`"
                            :value="m.move"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item v-if="move" label="威力覆盖（可变威力时用）">
                    <el-input-number v-model="powerOverride" :min="0" :max="999" size="small" controls-position="right" class="full-num" />
                    <span class="sub">0 = 用表内威力</span>
                </el-form-item>
                </div>

                <div class="content-panel content-panel--result">
                <div class="block-title">伤害结果</div>
                <div v-if="move && baseInput" class="result-card">
                    <p class="big-line">
                        预估伤害：
                        <strong>{{ resultMin.damage }} – {{ resultMax.damage }}</strong>
                        <span v-if="effLabel" class="eff">{{ effLabel }}</span>
                    </p>
                    <p class="meta">
                        {{ move.move }}（{{ move.category }} {{ move.type }}）· 表威力 {{ move.power
                        }}<template v-if="effectivePower !== null"> · 计入 {{ effectivePower }}</template>
                    </p>
                    <p class="meta">随机 85–100 · {{ doubles ? '双打' : '单打' }}</p>

                    <div v-if="hpKillAnalysis" class="ko-block">
                        <p class="ko-title">
                            相对受击方当前 HP：<strong>{{ hpKillAnalysis.effectiveHp }}</strong>（最大
                            {{ hpKillAnalysis.maxHp }} 的 {{ hpKillAnalysis.hpScalePercent }}%）
                        </p>
                        <p v-if="hpKillAnalysis.noDamage" class="ko-verdict warn">{{ hpKillAnalysis.verdict }}</p>
                        <template v-else>
                            <p class="ko-pct">
                                伤害占<strong>当前</strong> HP：<strong>{{ hpKillAnalysis.pctMin }}% – {{ hpKillAnalysis.pctMax }}%</strong>
                            </p>
                            <div class="hp-bar-wrap" aria-hidden="true">
                                <div
                                    class="hp-bar-fill"
                                    :style="{
                                        left: hpKillAnalysis.barLeftPct + '%',
                                        width: hpKillAnalysis.barWidthPct + '%'
                                    }"
                                />
                            </div>
                            <p class="ko-verdict" :class="{ ok: hpKillAnalysis.stableOhko, maybe: hpKillAnalysis.rangeOhko }">
                                {{ hpKillAnalysis.verdict }}
                            </p>
                            <p v-if="!hpKillAnalysis.stableOhko && !hpKillAnalysis.rangeOhko" class="ko-meta">
                                最大随机后相对当前 HP 剩余约 <strong>{{ hpKillAnalysis.remainAfterMaxHp }}</strong>（{{
                                    hpKillAnalysis.remainAfterMaxPct
                                }}%）
                            </p>
                        </template>
                    </div>
                </div>
                <div v-else class="result-empty">
                    <p class="result-empty-title">尚未算出伤害</p>
                    <p class="result-empty-desc">请选择<strong>物理 / 特殊</strong>招式；可变威力可在「威力覆盖」填写。</p>
                </div>
                </div>

                <el-collapse v-model="advancedOpen" class="collapse-adv collapse-card">
                    <el-collapse-item title="环境、个体·努力与其它修正" name="adv">
                        <div class="subsection">天气 · 场地 · 规则</div>
                        <el-form-item label="双打">
                            <el-switch v-model="doubles" />
                        </el-form-item>
                        <el-form-item v-if="doubles" label="扩大类招式">
                            <el-switch v-model="spreadMove" />
                        </el-form-item>
                        <el-form-item label="天气">
                            <el-select v-model="weather" class="full" size="small">
                                <el-option label="无" value="无" />
                                <el-option label="大日照" value="大日照" />
                                <el-option label="大雨" value="大雨" />
                                <el-option label="沙暴" value="沙暴" />
                                <el-option label="冰雹" value="冰雹" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="场地">
                            <el-select v-model="terrain" class="full" size="small">
                                <el-option label="无" value="无" />
                                <el-option label="电气场地" value="电气场地" />
                                <el-option label="青草场地" value="青草场地" />
                                <el-option label="薄雾场地" value="薄雾场地" />
                            </el-select>
                        </el-form-item>
                        <el-row :gutter="8">
                            <el-col :span="12">
                                <el-form-item label="进攻方接地">
                                    <el-switch v-model="attackerGrounded" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="防守方接地">
                                    <el-switch v-model="defenderGroundedUser" :disabled="defenderMods.levitate" />
                                    <span v-if="defenderMods.levitate" class="sub inline">飘浮不接地</span>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <div class="subsection">个体值 / 努力值</div>
                        <p class="iv-ev-intro muted">与图鉴页公式一致，列为 HP → 速度；攻防各一张表，窄屏可横向滑动单张表。</p>
                        <div class="iv-ev-panels">
                            <div class="iv-ev-panel iv-ev-panel--atk">
                                <div class="iv-ev-panel-title">进攻方</div>
                                <div class="iv-ev-scroll">
                                    <div class="iv-ev-mini-grid">
                                        <span class="iv-ev-corner" aria-hidden="true" />
                                        <span v-for="(lab, i) in statLabels" :key="'atk-h' + i" class="iv-ev-colh">{{ lab }}</span>
                                        <span class="iv-ev-rowh">IV</span>
                                        <el-input-number
                                            v-for="i in 6"
                                            :key="'aiv' + i"
                                            v-model="attackerIv[i - 1]"
                                            :min="0"
                                            :max="31"
                                            size="small"
                                            controls-position="right"
                                            class="iv-ev-cell"
                                        />
                                        <span class="iv-ev-rowh">EV</span>
                                        <el-input-number
                                            v-for="i in 6"
                                            :key="'aev' + i"
                                            v-model="attackerEv[i - 1]"
                                            :min="0"
                                            :max="252"
                                            size="small"
                                            controls-position="right"
                                            class="iv-ev-cell"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="iv-ev-panel iv-ev-panel--def">
                                <div class="iv-ev-panel-title defend">防守方</div>
                                <div class="iv-ev-scroll">
                                    <div class="iv-ev-mini-grid">
                                        <span class="iv-ev-corner" aria-hidden="true" />
                                        <span v-for="(lab, i) in statLabels" :key="'def-h' + i" class="iv-ev-colh">{{ lab }}</span>
                                        <span class="iv-ev-rowh">IV</span>
                                        <el-input-number
                                            v-for="i in 6"
                                            :key="'div' + i"
                                            v-model="defenderIv[i - 1]"
                                            :min="0"
                                            :max="31"
                                            size="small"
                                            controls-position="right"
                                            class="iv-ev-cell"
                                        />
                                        <span class="iv-ev-rowh">EV</span>
                                        <el-input-number
                                            v-for="i in 6"
                                            :key="'dev' + i"
                                            v-model="defenderEv[i - 1]"
                                            :min="0"
                                            :max="252"
                                            size="small"
                                            controls-position="right"
                                            class="iv-ev-cell"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <el-button size="small" class="reset-btn" @click="resetIvEvDefault">个体全 31、努力全 0</el-button>

                        <div class="subsection">其它倍率</div>
                        <p class="mult-hint muted">
                            厚脂肪、毛皮大衣、适应力 STAB、破格、技师、铁拳、强壮之颚等与<strong>特性</strong>相关的修正已随「特性」自动代入；本区为<strong>队友、暴击、灼伤、生命宝珠、墙面</strong>等手动项（专家腰带未做入口）。
                        </p>
                        <div class="mult-group">
                            <div class="mult-group-title">队友</div>
                            <div class="switch-grid switch-grid--3">
                                <el-checkbox v-model="helpingHand">帮助</el-checkbox>
                                <el-checkbox v-model="friendGuard">友情防守</el-checkbox>
                            </div>
                        </div>
                        <div class="mult-group">
                            <div class="mult-group-title">暴击与异常</div>
                            <div class="switch-grid switch-grid--3">
                                <el-checkbox v-model="critical">要害</el-checkbox>
                                <el-checkbox v-model="sniper">狙击手·要害 ×2.25（特性已是狙击手可不勾）</el-checkbox>
                                <el-checkbox v-model="burned">进攻方灼伤（物攻招式）</el-checkbox>
                                <el-checkbox v-if="atkAbFromSlot.guts" v-model="gutsIgnoresBurnDamageHalve">毅力：跳过灼伤物攻减半</el-checkbox>
                            </div>
                        </div>
                        <div class="mult-group">
                            <div class="mult-group-title">道具</div>
                            <div class="switch-grid switch-grid--3">
                                <el-checkbox v-model="lifeOrb">生命宝珠</el-checkbox>
                            </div>
                        </div>
                        <div class="mult-group">
                            <div class="mult-group-title">防守减免（手动）</div>
                            <div class="switch-grid switch-grid--stack">
                                <el-checkbox v-model="filterOrSolidRock">过滤 / 坚硬岩石（无对应特性时手动）</el-checkbox>
                                <el-checkbox v-model="reflectDoubles">反射壁（双打·物理）</el-checkbox>
                                <el-checkbox v-model="lightScreenDoubles">光墙（双打·特殊）</el-checkbox>
                            </div>
                        </div>
                        <div class="mult-group">
                            <div class="mult-group-title">与所选进攻特性联动</div>
                            <div class="switch-grid switch-grid--3">
                                <el-checkbox v-if="atkAbFromSlot.sheerForce" v-model="sheerForceSecondary">强行：招式有追加效果</el-checkbox>
                                <el-checkbox v-if="atkAbFromSlot.reckless" v-model="recklessRecoilMove">舍身：反冲类招式</el-checkbox>
                                <el-checkbox v-if="atkAbFromSlot.analytic" v-model="analyticSlower">分析：比目标慢出手</el-checkbox>
                                <span v-if="!atkAbFromSlot.sheerForce && !atkAbFromSlot.reckless && !atkAbFromSlot.analytic" class="muted tiny mult-empty"
                                    >当前进攻特性无此项</span
                                >
                            </div>
                        </div>
                    </el-collapse-item>
                </el-collapse>

            </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Top from '@/components/Top/index.vue';
import { reqPokemon } from '@/apis/pokemon/index';
import { reqMoves } from '@/apis/moves';
import { calculateGen6Damage, parseMovePower, type Gen6DamageInput } from '@/utils/damage/gen6';
import { typeEffectivenessLabel } from '@/utils/damage/typeChart';
import {
    attackerAbilityBattleFlags,
    defenderAbilityBattleFlags,
    getAbilityNameList,
    moveNameSuggestsIronFist,
    moveNameSuggestsStrongJaw,
    uniquePokemonAbilities
} from '@/utils/damage/abilityResolve';
import { NATURE_NAME_KEYS, computePokemonStatsAtLevel } from '@/utils/pokemonNatures';
import { usePokemonStore } from '@/store/modules/pokemon';

const store = usePokemonStore();
const colorMap = store.colorMap as Record<string, string>;

const pokemonList = reqPokemon();
const moveList = reqMoves();
const allAbilityNames = getAbilityNameList();
const natureNameKeys = NATURE_NAME_KEYS;
const statLabels = ['HP', '攻', '防', '特攻', '特防', '速'];

function pokemonImageSrc(编号: string | undefined): string {
    if (!编号) return '';
    const n = Number(编号);
    if (!Number.isFinite(n) || n <= 0) return '';
    try {
        return new URL(`/src/assets/images/pokemonList_images/${n}.png`, import.meta.url).href;
    } catch {
        return '';
    }
}

const attackerNo = ref('025');
const defenderNo = ref('003');
const levelAtk = ref(50);
const levelDef = ref(50);
const attackerNature = ref('勤奋');
const defenderNature = ref('勤奋');
const attackerIv = ref([31, 31, 31, 31, 31, 31]);
const attackerEv = ref([0, 0, 0, 0, 0, 0]);
const defenderIv = ref([31, 31, 31, 31, 31, 31]);
const defenderEv = ref([0, 0, 0, 0, 0, 0]);

const advancedOpen = ref<string[]>([]);

const pokemonQuery = ref('');
const pokemonQueryDef = ref('');
const pokemonFiltered = computed(() => {
    const q = pokemonQuery.value.trim().toLowerCase();
    let list = !q
        ? pokemonList
        : pokemonList.filter(
              p =>
                  p.名称.toLowerCase().includes(q) ||
                  p.编号.toLowerCase().includes(q) ||
                  `#${p.编号}`.includes(q)
          );
    const sel = pokemonList.find(p => p.编号 === attackerNo.value);
    if (sel && !list.includes(sel)) list = [sel, ...list];
    return list.slice(0, 400);
});
const pokemonFilteredDef = computed(() => {
    const q = pokemonQueryDef.value.trim().toLowerCase();
    let list = !q
        ? pokemonList
        : pokemonList.filter(
              p =>
                  p.名称.toLowerCase().includes(q) ||
                  p.编号.toLowerCase().includes(q) ||
                  `#${p.编号}`.includes(q)
          );
    const sel = pokemonList.find(p => p.编号 === defenderNo.value);
    if (sel && !list.includes(sel)) list = [sel, ...list];
    return list.slice(0, 400);
});

function filterPokemon(q: string) {
    pokemonQuery.value = q;
}
function filterPokemonDef(q: string) {
    pokemonQueryDef.value = q;
}

const attacker = computed(() => pokemonList.find(p => p.编号 === attackerNo.value));
const defender = computed(() => pokemonList.find(p => p.编号 === defenderNo.value));

const attackerStats = computed(() =>
    attacker.value
        ? computePokemonStatsAtLevel(attacker.value, levelAtk.value, attackerNature.value, attackerIv.value, attackerEv.value)
        : null
);
const defenderStats = computed(() =>
    defender.value
        ? computePokemonStatsAtLevel(defender.value, levelDef.value, defenderNature.value, defenderIv.value, defenderEv.value)
        : null
);

/** 受击方当前有效 HP = 最大 HP × 滑条比例（至少 1，用于击杀判定与占比） */
const defenderHpScalePercent = ref(100);
const defenderEffectiveHp = computed(() => {
    if (!defenderStats.value) return 0;
    const maxHp = defenderStats.value[0];
    if (maxHp <= 0) return 0;
    const raw = Math.round((maxHp * defenderHpScalePercent.value) / 100);
    return Math.max(1, raw);
});

const attackerSlotAbilities = computed(() => uniquePokemonAbilities(attacker.value?.特性));
const defenderSlotAbilities = computed(() => uniquePokemonAbilities(defender.value?.特性));

const attackerAbilityKey = ref('');
const defenderAbilityKey = ref('');
const multiscaleFullHp = ref(false);
const showFullAtkAbilities = ref(false);
const showFullDefAbilities = ref(false);

watch(
    () => attackerNo.value,
    () => {
        const p = pokemonList.find(x => x.编号 === attackerNo.value);
        const slots = uniquePokemonAbilities(p?.特性);
        attackerAbilityKey.value = slots[0] || '';
    },
    { immediate: true }
);

watch(
    () => defenderNo.value,
    () => {
        const p = pokemonList.find(x => x.编号 === defenderNo.value);
        const slots = uniquePokemonAbilities(p?.特性);
        defenderAbilityKey.value = slots[0] || '';
        multiscaleFullHp.value = false;
    },
    { immediate: true }
);

watch(defenderAbilityKey, () => {
    if (!defenderAbilityBattleFlags(defenderAbilityKey.value).multiscale) multiscaleFullHp.value = false;
});

watch(attackerAbilityKey, () => {
    const ab = attackerAbilityBattleFlags(attackerAbilityKey.value);
    if (!ab.sheerForce) sheerForceSecondary.value = false;
    if (!ab.guts) gutsIgnoresBurnDamageHalve.value = true;
    if (!ab.reckless) recklessRecoilMove.value = false;
    if (!ab.analytic) analyticSlower.value = false;
});

const defenderMods = computed(() => defenderAbilityBattleFlags(defenderAbilityKey.value));
const atkAbFromSlot = computed(() => attackerAbilityBattleFlags(attackerAbilityKey.value));

const defenderGroundedUser = ref(true);
const defenderGroundedEffective = computed(() => {
    if (defenderMods.value.levitate) return false;
    return defenderGroundedUser.value;
});

const moveQuery = ref('');
const moveName = ref('');
const movesFiltered = computed(() => {
    const q = moveQuery.value.trim();
    let base = moveList.filter(m => m.category === '物理' || m.category === '特殊');
    if (q) base = base.filter(m => m.move.includes(q) || m.type.includes(q));
    const cur = moveList.find(m => m.move === moveName.value);
    if (cur && !base.includes(cur)) base = [cur, ...base];
    return base.slice(0, 400);
});

function filterMove(q: string) {
    moveQuery.value = q;
}

const move = computed(() => moveList.find(m => m.move === moveName.value) ?? null);

watch(
    () => moveName.value,
    () => {
        powerOverride.value = 0;
    }
);

const powerOverride = ref(0);

const doubles = ref(true);
const spreadMove = ref(false);
const weather = ref<Gen6DamageInput['weather']>('无');
const terrain = ref<Gen6DamageInput['terrain']>('无');
const attackerGrounded = ref(true);

const helpingHand = ref(false);
const critical = ref(false);
const sniper = ref(false);
const burned = ref(false);
const lifeOrb = ref(false);
const filterOrSolidRock = ref(false);
const friendGuard = ref(false);
const reflectDoubles = ref(false);
const lightScreenDoubles = ref(false);
const sheerForceSecondary = ref(false);
const recklessRecoilMove = ref(false);
const analyticSlower = ref(false);
const gutsIgnoresBurnDamageHalve = ref(true);

function resetIvEvDefault() {
    const iv = [31, 31, 31, 31, 31, 31];
    const ev = [0, 0, 0, 0, 0, 0];
    attackerIv.value = [...iv];
    attackerEv.value = [...ev];
    defenderIv.value = [...iv];
    defenderEv.value = [...ev];
}

const effectivePower = computed(() => {
    if (!move.value) return null;
    if (powerOverride.value > 0) return powerOverride.value;
    return parseMovePower(move.value.power);
});

const baseInput = computed((): Gen6DamageInput | null => {
    if (!move.value || !attacker.value || !defender.value) return null;
    if (!attackerStats.value || !defenderStats.value) return null;
    const cat = move.value.category;
    if (cat !== '物理' && cat !== '特殊') return null;
    const pw = effectivePower.value;
    if (pw === null || pw <= 0) return null;

    const atk = cat === '物理' ? attackerStats.value[1] : attackerStats.value[3];
    const def = cat === '物理' ? defenderStats.value[2] : defenderStats.value[4];
    if (atk <= 0 || def <= 0) return null;

    return {
        attackerLevel: levelAtk.value,
        attack: atk,
        defense: def,
        power: pw,
        moveType: move.value.type,
        moveCategory: cat,
        attackerTypes: [...attacker.value.属性],
        defenderTypes: [...defender.value.属性],
        doubles: doubles.value,
        spreadMove: spreadMove.value,
        weather: weather.value,
        terrain: terrain.value,
        attackerGrounded: attackerGrounded.value,
        defenderGrounded: defenderGroundedEffective.value,
        helpingHand: helpingHand.value,
        critical: critical.value,
        sniper: sniper.value || atkAbFromSlot.value.sniper,
        burned: burned.value && cat === '物理',
        adaptability: atkAbFromSlot.value.adaptability,
        lifeOrb: lifeOrb.value,
        expertBelt: false,
        filterOrSolidRock: filterOrSolidRock.value || defenderMods.value.filterOrSolidRock,
        friendGuard: friendGuard.value,
        reflectDoubles: reflectDoubles.value,
        lightScreenDoubles: lightScreenDoubles.value,
        damageRoll: 85,
        defenderThickFat: defenderMods.value.thickFat,
        defenderHeatproof: defenderMods.value.heatproof,
        defenderDrySkin: defenderMods.value.drySkin,
        defenderFurCoat: defenderMods.value.furCoat,
        defenderMultiscaleFullHp: multiscaleFullHp.value && defenderMods.value.multiscale,
        defenderWonderGuard: defenderMods.value.wonderGuard,
        defenderVoltAbsorb: defenderMods.value.voltAbsorb || defenderMods.value.lightningRod,
        defenderWaterAbsorb: defenderMods.value.waterAbsorb || defenderMods.value.stormDrain,
        defenderSapSipper: defenderMods.value.sapSipper,
        defenderFlashFire: defenderMods.value.flashFire,
        attackerMoldBreaker: atkAbFromSlot.value.moldBreaker,
        attackerHugePower: atkAbFromSlot.value.hugePower,
        attackerSheerForceBoost: sheerForceSecondary.value && atkAbFromSlot.value.sheerForce,
        skipBurnPhysicalDamageMod:
            burned.value && cat === '物理' && atkAbFromSlot.value.guts && gutsIgnoresBurnDamageHalve.value,
        fieldNegatesWeather: atkAbFromSlot.value.airLock || defenderMods.value.airLock,
        technicianPowerBoost: atkAbFromSlot.value.technician,
        ironFistPowerBoost: atkAbFromSlot.value.ironFist && moveNameSuggestsIronFist(move.value.move),
        strongJawPowerBoost: atkAbFromSlot.value.strongJaw && moveNameSuggestsStrongJaw(move.value.move),
        sandForcePowerBoost:
            atkAbFromSlot.value.sandForce &&
            weather.value === '沙暴' &&
            ['地面', '钢', '岩石'].includes(move.value.type),
        recklessPowerBoost: recklessRecoilMove.value && atkAbFromSlot.value.reckless,
        attackerAnalyticBoost: analyticSlower.value && atkAbFromSlot.value.analytic,
        defenderGrassPelt:
            defenderMods.value.grassPelt &&
            terrain.value === '青草场地' &&
            cat === '物理' &&
            defenderGroundedEffective.value
    };
});

const resultMin = computed(() =>
    baseInput.value ? calculateGen6Damage({ ...baseInput.value, damageRoll: 85 }) : { damage: 0, effectiveness: 0, steps: [] }
);
const resultMax = computed(() =>
    baseInput.value ? calculateGen6Damage({ ...baseInput.value, damageRoll: 100 }) : { damage: 0, effectiveness: 0, steps: [] }
);

const effLabel = computed(() => {
    if (!move.value || !defender.value) return '';
    return typeEffectivenessLabel(move.value.type, defender.value.属性);
});

const hpKillAnalysis = computed(() => {
    if (!defenderStats.value || !baseInput.value) return null;
    const maxHp = defenderStats.value[0];
    const targetHp = defenderEffectiveHp.value;
    const hpScale = defenderHpScalePercent.value;
    if (maxHp <= 0 || targetHp <= 0) return null;

    const dMin = resultMin.value.damage;
    const dMax = resultMax.value.damage;
    const eff = resultMax.value.effectiveness;

    const dmgPct = (d: number) => Math.round((d / targetHp) * 1000) / 10;

    if (eff === 0) {
        return {
            maxHp,
            effectiveHp: targetHp,
            hpScalePercent: hpScale,
            noDamage: true,
            verdict: '效果绝佳倍率为 0：不造成伤害。',
            pctMin: 0,
            pctMax: 0,
            barLeftPct: 0,
            barWidthPct: 0,
            stableOhko: false,
            rangeOhko: false,
            remainAfterMaxHp: targetHp,
            remainAfterMaxPct: 100
        };
    }

    if (dMax <= 0 && dMin <= 0) {
        return {
            maxHp,
            effectiveHp: targetHp,
            hpScalePercent: hpScale,
            noDamage: true,
            verdict: '结算伤害为 0（免疫直接伤害的特性/吸收等，或未通过其它门槛）。',
            pctMin: 0,
            pctMax: 0,
            barLeftPct: 0,
            barWidthPct: 0,
            stableOhko: false,
            rangeOhko: false,
            remainAfterMaxHp: targetHp,
            remainAfterMaxPct: 100
        };
    }

    const pctMin = dmgPct(dMin);
    const pctMax = dmgPct(dMax);
    const stableOhko = dMin >= targetHp;
    const rangeOhko = !stableOhko && dMax >= targetHp;
    const remainAfterMax = Math.max(0, targetHp - dMax);
    const remainPct = targetHp > 0 ? Math.round((remainAfterMax / targetHp) * 1000) / 10 : 0;

    const fullHp = hpScale >= 100;
    let verdict: string;
    if (stableOhko) {
        verdict = fullHp
            ? '稳定击杀：最小随机（85）也可对满血目标致死。'
            : '稳定击杀：最小随机也可清空当前有效 HP。';
    } else if (rangeOhko) {
        verdict = fullHp
            ? '有机会击杀：需较高随机才可能对满血目标致死。'
            : '有机会击杀：较高随机可能清空当前有效 HP。';
    } else {
        verdict = fullHp
            ? '无法满血一击：即使最大随机也无法清空 HP。'
            : '无法一击清空当前有效 HP（按滑条比例）。';
    }

    const loP = Math.min(100, (Math.min(dMin, dMax) / targetHp) * 100);
    const hiP = Math.min(100, (Math.max(dMin, dMax) / targetHp) * 100);
    const barLeftPct = loP;
    const barWidthPct = Math.max(0.5, hiP - loP);

    return {
        maxHp,
        effectiveHp: targetHp,
        hpScalePercent: hpScale,
        noDamage: false,
        pctMin,
        pctMax,
        stableOhko,
        rangeOhko,
        verdict,
        remainAfterMaxHp: remainAfterMax,
        remainAfterMaxPct: remainPct,
        barLeftPct,
        barWidthPct
    };
});

function pickDefaultMove() {
    const m =
        moveList.find(mm => mm.move === '十万伏特') ||
        moveList.find(mm => (mm.category === '物理' || mm.category === '特殊') && parseMovePower(mm.power) !== null);
    if (m) moveName.value = m.move;
}

pickDefaultMove();

watch(attackerNo, () => {
    pokemonQuery.value = '';
});
watch(defenderNo, () => {
    pokemonQueryDef.value = '';
});
</script>

<style scoped>
.damage-calc {
    min-height: 100vh;
    background: linear-gradient(165deg, #e6e9f2 0%, #eef0f6 40%, #f3f4f8 100%);
    overflow-x: hidden;
}
.scroll {
    padding: 10px 12px 28px;
    box-sizing: border-box;
    max-width: 100%;
}
.page-inner {
    max-width: 520px;
    margin: 0 auto;
}
.hint-banner {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 11px;
    line-height: 1.5;
    color: #4a4f5c;
    background: rgba(255, 255, 255, 0.78);
    backdrop-filter: blur(8px);
    border: 1px solid #e2e5ef;
    border-radius: 12px;
    padding: 9px 11px;
    margin: 0 0 14px;
    box-shadow: 0 1px 8px rgba(30, 35, 55, 0.04);
}
.hint-badge {
    flex-shrink: 0;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: #fff;
    background: linear-gradient(135deg, #4527a0, #7b1fa2);
    padding: 4px 7px;
    border-radius: 6px;
    line-height: 1.2;
}
.block-title {
    font-size: 12px;
    font-weight: 700;
    color: #2d3142;
    margin: 0 0 8px;
    letter-spacing: 0.05em;
}
.block-title::after {
    content: '';
    display: block;
    margin-top: 6px;
    width: 32px;
    height: 3px;
    border-radius: 3px;
    background: linear-gradient(90deg, #7b1fa2, rgba(123, 31, 162, 0.2));
}
.content-panel {
    background: #fff;
    border: 1px solid #e4e7f0;
    border-radius: 14px;
    padding: 12px 12px 14px;
    margin-bottom: 12px;
    box-shadow: 0 2px 16px rgba(22, 28, 48, 0.06);
}
.content-panel--result {
    background: linear-gradient(180deg, #fff 0%, #f9faff 100%);
    border-color: #dde2ee;
}
.battle-arena {
    background: #fff;
    border: 1px solid #e4e7f0;
    border-radius: 14px;
    padding: 10px 2px 12px;
    margin-bottom: 12px;
    box-shadow: 0 2px 16px rgba(22, 28, 48, 0.06);
}
.subsection {
    font-size: 12px;
    font-weight: 600;
    color: #444;
    margin: 10px 0 6px;
}
.form :deep(.el-form-item) {
    margin-bottom: 6px;
}
.form :deep(.el-form-item__label) {
    font-size: 12px;
    line-height: 1.3;
    margin-bottom: 2px;
}
.form :deep(.el-select),
.form :deep(.el-input__wrapper) {
    font-size: 12px;
}
.form :deep(.el-input-number--small) {
    width: 100%;
}
.full {
    width: 100%;
}
.full-num {
    width: 100%;
}
.type-row {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 8px;
}
.type-tag {
    padding: 1px 6px;
    border-radius: 999px;
    font-size: 10px;
    color: #fff;
}
.sub {
    display: block;
    font-size: 11px;
    color: #888;
    margin-top: 4px;
}
.sub.inline {
    display: inline;
    margin-left: 8px;
    margin-top: 0;
}
.stat-line {
    font-size: 11px;
    margin: 0 0 6px;
    color: #333;
    line-height: 1.4;
}
.stat-line .muted {
    color: #888;
    font-weight: normal;
    margin-left: 6px;
}
.muted {
    color: #888;
    font-size: 11px;
}
.inline-check {
    display: block;
    margin-top: 4px;
    font-size: 12px;
}
.switch-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 8px;
}
.switch-grid--3 {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 2px 10px;
}
/* 长文案勾选：单列，避免挤在一行 */
.switch-grid--stack {
    grid-template-columns: 1fr;
    gap: 10px 0;
}
.switch-grid--stack :deep(.el-checkbox) {
    align-items: flex-start;
    height: auto;
    margin-right: 0;
    white-space: normal;
}
.switch-grid--stack :deep(.el-checkbox__label) {
    white-space: normal;
    line-height: 1.45;
    padding-left: 8px;
}
.mult-hint {
    font-size: 10px;
    line-height: 1.45;
    margin: 0 0 8px;
}
.mult-group {
    margin-bottom: 10px;
}
.mult-group-title {
    font-size: 11px;
    font-weight: 600;
    color: #555;
    margin: 0 0 4px;
}
.mult-empty {
    display: block;
    padding: 2px 0;
}
.iv-ev-intro {
    font-size: 10px;
    line-height: 1.4;
    margin: -4px 0 8px;
}
.iv-ev-panels {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 8px;
}
.iv-ev-panel {
    background: #fafafa;
    border: 1px solid #ececf0;
    border-radius: 8px;
    padding: 8px 6px 8px;
    min-width: 0;
}
.iv-ev-panel--atk {
    border-left: 3px solid #c62828;
}
.iv-ev-panel--def {
    border-left: 3px solid #2e7d32;
}
.iv-ev-panel-title {
    font-size: 12px;
    font-weight: 700;
    color: #c62828;
    margin: 0 0 6px 2px;
}
.iv-ev-panel-title.defend {
    color: #2e7d32;
}
.iv-ev-scroll {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin: 0 -2px;
    padding: 0 2px;
}
.iv-ev-mini-grid {
    display: grid;
    grid-template-columns: 28px repeat(6, 52px);
    gap: 4px 3px;
    align-items: center;
    width: min-content;
    min-width: 100%;
}
.iv-ev-corner {
    display: block;
    min-height: 1px;
}
.iv-ev-colh {
    font-size: 9px;
    color: #666;
    text-align: center;
    line-height: 1.15;
    word-break: keep-all;
}
.iv-ev-rowh {
    font-size: 10px;
    font-weight: 600;
    color: #888;
    text-align: right;
    padding-right: 2px;
}
.iv-ev-cell {
    width: 52px;
    min-width: 52px;
}
.iv-ev-mini-grid :deep(.iv-ev-cell.el-input-number--small) {
    width: 52px;
}
.iv-ev-mini-grid :deep(.iv-ev-cell .el-input__wrapper) {
    padding-left: 4px;
    padding-right: 4px;
}
@media screen and (min-width: 480px) {
    .iv-ev-mini-grid {
        grid-template-columns: 32px repeat(6, minmax(52px, 1fr));
        width: 100%;
    }
    .iv-ev-cell,
    .iv-ev-mini-grid :deep(.iv-ev-cell.el-input-number--small) {
        width: 100%;
        min-width: 0;
    }
}
.tiny {
    font-size: 10px;
    text-align: center;
    line-height: 1.2;
}
.reset-btn {
    margin-bottom: 8px;
}
.result-card {
    background: transparent;
    border-radius: 0;
    padding: 6px 0 0;
    box-shadow: none;
    border: none;
}
.result-empty {
    padding: 18px 14px;
    text-align: center;
    background: #f4f6fb;
    border-radius: 12px;
    border: 1px dashed #cfd5e3;
}
.result-empty-title {
    margin: 0 0 8px;
    font-size: 13px;
    font-weight: 600;
    color: #5a6172;
}
.result-empty-desc {
    margin: 0;
    font-size: 11px;
    line-height: 1.5;
    color: #858ca0;
}
.big-line {
    font-size: 15px;
    margin: 0 0 8px;
    color: #2d3142;
}
.big-line strong {
    color: #c62828;
    font-weight: 800;
    letter-spacing: 0.02em;
}
.eff {
    margin-left: 8px;
    color: #c62828;
    font-weight: 600;
}
.meta {
    font-size: 11px;
    color: #666;
    margin: 2px 0;
    line-height: 1.4;
}
.collapse-adv {
    margin-top: 0;
}
.collapse-card {
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #e4e7f0;
    background: #fff;
    box-shadow: 0 2px 14px rgba(22, 28, 48, 0.05);
}
.collapse-card :deep(.el-collapse) {
    border: none;
}
.collapse-card :deep(.el-collapse-item__header) {
    font-size: 13px;
    font-weight: 600;
    padding: 12px 14px;
    min-height: 44px;
    background: #f8f9fc;
    border: none;
    color: #3d4250;
}
.collapse-card :deep(.el-collapse-item__wrap) {
    border: none;
}
.collapse-card :deep(.el-collapse-item__content) {
    padding: 10px 12px 16px;
    border-top: 1px solid #eef0f5;
}
.collapse {
    margin-top: 12px;
}
.steps {
    padding-left: 18px;
    margin: 0;
    font-size: 12px;
    line-height: 1.7;
}
.steps .lbl {
    font-weight: 600;
}
.steps .det {
    color: #666;
    margin: 0 4px;
}

.battle-columns {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 18px minmax(0, 1fr);
    gap: 0;
    align-items: stretch;
}
.battle-col {
    min-width: 0;
}
.battle-vs-col {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    min-height: 100px;
}
.battle-vs-col::before {
    content: '';
    position: absolute;
    top: 6%;
    bottom: 6%;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    background: linear-gradient(180deg, transparent, #c5cad8 15%, #c5cad8 85%, transparent);
}
.battle-vs-text {
    position: relative;
    z-index: 1;
    font-size: 8px;
    font-weight: 800;
    color: #9aa3b5;
    letter-spacing: 0.08em;
    background: #fff;
    padding: 5px 1px;
    line-height: 1;
}
.side-card {
    background: #f9fafc;
    border-radius: 12px;
    padding: 8px 6px 10px;
    border: 1px solid #eceff5;
    box-shadow: none;
    height: 100%;
    box-sizing: border-box;
}
.attacker-side {
    box-shadow: inset 0 3px 0 #c62828;
    border-top-color: #f5e6e8;
}
.defender-side {
    box-shadow: inset 0 3px 0 #2e7d32;
    border-top-color: #e6f0e8;
}
.side-label {
    font-weight: 700;
    font-size: 11px;
    color: #c62828;
    margin: 0 0 6px;
    text-align: center;
    letter-spacing: 0.06em;
}
.defend-label {
    color: #2e7d32;
}
.poke-strip {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    margin-bottom: 8px;
    padding: 6px 5px;
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid #e8ebf2;
    border-radius: 10px;
}
.poke-strip-meta {
    flex: 1;
    min-width: 0;
}
.poke-name {
    font-size: 12px;
    font-weight: 700;
    margin: 0;
    color: #1e222c;
    line-height: 1.25;
    word-break: break-all;
}
.poke-id {
    margin: 2px 0 4px;
    font-size: 10px;
}
.poke-sprite-lg {
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    object-fit: contain;
    image-rendering: pixelated;
}
@media screen and (min-width: 400px) {
    .poke-sprite-lg {
        width: 52px;
        height: 52px;
    }
    .poke-name {
        font-size: 13px;
    }
}
@media screen and (min-width: 640px) {
    .poke-sprite-lg {
        width: 58px;
        height: 58px;
    }
}
.type-row--compact {
    margin: 0;
    gap: 3px;
    flex-wrap: wrap;
}
.form-item-tight :deep(.el-form-item) {
    margin-bottom: 4px;
}
.form-item-tight :deep(.el-form-item__label) {
    margin-bottom: 1px;
}
.row-tight {
    margin-bottom: 0;
}
.hp-scale-hint {
    font-size: 11px;
    color: #555;
    margin: 4px 0 0;
    line-height: 1.4;
}
.form :deep(.el-slider__runway) {
    margin: 8px 0;
}
.form :deep(.el-slider__input) {
    width: 42px;
}
.opt-with-sprite {
    display: flex;
    align-items: center;
    gap: 8px;
}
.opt-sprite {
    width: 22px;
    height: 22px;
    object-fit: contain;
    image-rendering: pixelated;
}

.ko-block {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #e8ecf4;
}
.ko-title {
    font-size: 11px;
    color: #555;
    margin: 0 0 6px;
    line-height: 1.4;
}
.ko-pct {
    margin: 0 0 4px;
    font-size: 12px;
}
.hp-bar-wrap {
    position: relative;
    height: 8px;
    background: #e8e8ec;
    border-radius: 6px;
    overflow: hidden;
    margin: 6px 0 10px;
}
.hp-bar-fill {
    position: absolute;
    top: 0;
    height: 100%;
    background: linear-gradient(90deg, #6a1b9a, #c62828);
    border-radius: 6px;
    min-width: 3px;
    transition: left 0.2s, width 0.2s;
}
.ko-verdict {
    font-size: 12px;
    font-weight: 600;
    margin: 0;
    color: #333;
    line-height: 1.35;
}
.ko-verdict.ok {
    color: #c62828;
}
.ko-verdict.maybe {
    color: #e65100;
}
.ko-verdict.warn {
    color: #b71c1c;
}
.ko-meta {
    font-size: 11px;
    color: #666;
    margin: 6px 0 0;
    line-height: 1.35;
}
</style>
