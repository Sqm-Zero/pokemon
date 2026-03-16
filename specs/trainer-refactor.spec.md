# Feature: 训练家图鉴页面重构

## Overview

重构训练家图鉴的页面结构，将原有的二级结构（分组列表 → 分组详情）优化为三级结构（分组列表 → 战斗列表 → 战斗详情），提升信息层次的清晰度和用户浏览体验。新增战斗详情页展示完整的精灵阵容和战斗统计信息，优化卡片布局和交互动画，延续现有的玻璃态设计风格。

**目标用户**: 游戏玩家（C端）
**优先级**: Should Have - 应该有
**技术栈**: Vue 3 + TypeScript + Element Plus

## Functional Requirements

### 页面结构

#### FR-PAGE-001: 训练家图鉴列表页
系统应保持现有的训练家图鉴列表页（`/trainer`）不变，包括8个分组和版本切换功能（挑战版/噩梦版）。

#### FR-PAGE-002: 战斗列表页路由
当用户点击分组时，系统应导航到 `/trainer/group/:groupName` 路由，展示该分组下的所有战斗列表。

#### FR-PAGE-003: 战斗详情页路由
当用户点击战斗卡片时，系统应导航到 `/trainer/group/:groupName/battle/:battleIndex` 路由，展示该战斗的完整详情。

### 战斗列表页

#### FR-BATTLE-LIST-001: 战斗卡片布局
系统应以卡片式布局展示战斗列表，每个卡片包含：
- 战斗标题（battle.title）
- 战斗类型标签（battle.battle_type），根据类型使用不同配色
- 道具标签（battle.item）
- 精灵数量（battle.pokemons.length）
- 精灵预览（前3个精灵的头像缩略图）
- 等级统计（平均等级、最高等级）

#### FR-BATTLE-LIST-002: 战斗类型配色
系统应根据战斗类型使用不同的配色方案：
- 单打: 蓝色系（#409eff）
- 双打: 紫色系（#9c27b0）
- 群战: 橙色系（#ff9800）
- 三打: 绿色系（#67c23a）
- 一番战: 红色系（#f56c6c）

#### FR-BATTLE-LIST-003: 版本参数传递
系统应将版本参数（normal/hardcore）从列表页传递到战斗列表页和战斗详情页，确保数据一致性。

#### FR-BATTLE-LIST-004: 卡片交互
当用户点击战斗卡片时，系统应：
1. 触发卡片缩放动画（scale 0.98）
2. 导航到战斗详情页
3. 传递 battleIndex 参数

### 战斗详情页

#### FR-BATTLE-DETAIL-001: 战斗基本信息
系统应在页面顶部展示战斗基本信息：
- 战斗标题
- 战斗类型
- 道具信息
- 位置信息（如果有）

#### FR-BATTLE-DETAIL-002: 精灵阵容展示
系统应展示该战斗中所有精灵的完整信息，每个精灵卡片包含：
- 精灵头像
- 精灵名称（处理特殊形态）
- 等级徽章
- 特性
- 持有道具（可点击跳转）
- 技能列表（可点击跳转）

#### FR-BATTLE-DETAIL-003: 战斗统计信息
系统应在页面中展示战斗统计信息：
- **等级分析**: 平均等级、最高等级、最低等级
- **属性分布**: 各属性精灵的数量分布（如3只水系、2只火系）
- **克制推荐**: 基于精灵属性推荐克制属性

#### FR-BATTLE-DETAIL-004: 精灵卡片交互
当用户点击精灵卡片时，系统应：
1. 保存当前滚动位置
2. 导航到精灵详情页（`/pokemon/info`）
3. 返回时恢复滚动位置

#### FR-BATTLE-DETAIL-005: 技能和道具跳转
当用户点击技能或道具时，系统应：
- 点击技能: 导航到技能详情页（`/move/move_info`）
- 点击道具: 导航到道具详情页（`/prop/prop_info`）

### 交互优化

#### FR-INTERACTION-001: 页面切换动画
当页面切换时，系统应使用 Vue Router 的过渡动画，提供流畅的视觉体验。

#### FR-INTERACTION-002: 滚动位置记忆
当用户从战斗详情页返回战斗列表页时，系统应：
1. 恢复之前的滚动位置
2. 保持页面状态

#### FR-INTERACTION-003: 手势切换战斗
在战斗详情页，当用户左右滑动时，系统应：
- 向左滑动: 切换到下一场战斗
- 向右滑动: 切换到上一场战斗
- 边界处理: 第一场和最后一场禁用对应方向的滑动

#### FR-INTERACTION-004: 长按预览
当用户长按精灵卡片时，系统应：
1. 显示精灵详情预览弹窗
2. 不跳转到详情页
3. 松开或点击关闭按钮时关闭弹窗

### 数据处理

#### FR-DATA-001: 数据获取
系统应保持现有的数据获取方式，使用 `reqNPC()` 和 `reqYHNPC()` 函数获取战斗数据。

#### FR-DATA-002: 精灵名称处理
系统应复用现有的精灵名称处理逻辑：
- `processPokemonName()`: 处理显示名称
- `restorePokemonRawName()`: 还原为数据中的原始名称
- `specialForms`: 特殊形态映射
- `nameAliases`: 别名映射

#### FR-DATA-003: 精灵图片获取
系统应复用现有的图片获取逻辑：
- 使用 `getPokemonNumberByName()` 获取精灵编号
- 使用 `getImageSrc()` 生成图片路径

## Non-Functional Requirements

### Performance

- **首屏渲染**: < 500ms
- **页面切换**: < 300ms
- **虚拟滚动**: 战斗列表超过20个时启用虚拟滚动
- **图片懒加载**: 精灵头像使用懒加载，减少初始加载时间
- **计算缓存**: 统计数据使用 `computed` 缓存，避免重复计算

### UI/UX Design

#### 视觉风格
- **延续现有风格**: 保持玻璃态（glassmorphism）+ 圆角卡片设计
- **配色方案**:
  - 主色: #409eff（蓝色）
  - 背景: #f0f4f8（浅灰蓝）
  - 卡片: rgba(255, 255, 255, 0.8) + backdrop-filter: blur(10px)
- **圆角**: 16px（卡片）、12px（内部元素）、8px（小元素）
- **阴影**: 0 4px 20px rgba(0, 0, 0, 0.03)（卡片）

#### 布局规范
- **间距系统**: 4px 基准（4, 8, 12, 16, 20, 24）
- **卡片间距**: 16px
- **内边距**: 16px（卡片）、12px（内部元素）
- **最大宽度**: 500px（居中布局）

#### 字体规范
- **标题**: 16px, font-weight: 700
- **正文**: 14px, font-weight: 400
- **小字**: 12px, font-weight: 400
- **标签**: 11px, font-weight: 600

#### 动画规范
- **过渡时间**: 0.3s（标准）、0.2s（快速）
- **缓动函数**: cubic-bezier(0.175, 0.885, 0.32, 1.275)（弹性）
- **hover 效果**: transform: scale(0.98)（按下）
- **页面切换**: fade + slide（淡入淡出 + 滑动）

### Code Organization

#### 组件结构
```
src/views/Trainer/
├── index.vue                    # 训练家图鉴列表页（保持不变）
├── BattleList/
│   ├── index.vue               # 战斗列表页
│   └── components/
│       └── BattleCard.vue      # 战斗卡片组件
└── BattleDetail/
    ├── index.vue               # 战斗详情页
    └── components/
        ├── BattleInfo.vue      # 战斗基本信息组件
        ├── BattleStats.vue     # 战斗统计信息组件
        └── PokemonCard.vue     # 精灵卡片组件
```

#### Composables
```
src/composables/
├── usePokemonName.ts           # 精灵名称处理逻辑
├── usePokemonImage.ts          # 精灵图片获取逻辑
├── useBattleStats.ts           # 战斗统计计算逻辑
└── useScrollMemory.ts          # 滚动位置记忆逻辑
```

#### Types
```
src/types/
└── trainer.ts                  # 训练家相关类型定义
```

### Accessibility

- **键盘导航**: 所有交互元素支持 Tab 键导航
- **焦点管理**: 页面切换时正确管理焦点
- **语义化标签**: 使用正确的 HTML 语义化标签
- **ARIA 属性**: 为交互元素添加适当的 ARIA 属性

## Acceptance Criteria

### AC-001: 战斗列表页展示
**Given** 用户在训练家图鉴列表页
**When** 用户点击"道馆馆主 详细阵容"分组
**Then** 系统应导航到 `/trainer/group/道馆馆主%20详细阵容`
**And** 展示该分组下的所有战斗卡片
**And** 每个卡片显示标题、类型、道具、精灵数量、精灵预览、等级统计

### AC-002: 战斗类型配色
**Given** 战斗列表页已加载
**When** 系统渲染战斗卡片
**Then** 单打战斗应使用蓝色标签
**And** 双打战斗应使用紫色标签
**And** 群战战斗应使用橙色标签

### AC-003: 战斗详情页展示
**Given** 用户在战斗列表页
**When** 用户点击第一个战斗卡片
**Then** 系统应导航到 `/trainer/group/:groupName/battle/0`
**And** 展示战斗基本信息（标题、类型、道具）
**And** 展示所有精灵的完整信息
**And** 展示战斗统计信息（等级分析、属性分布、克制推荐）

### AC-004: 精灵卡片跳转
**Given** 用户在战斗详情页
**When** 用户点击第一个精灵卡片
**Then** 系统应保存当前滚动位置
**And** 导航到精灵详情页
**And** 返回时恢复滚动位置

### AC-005: 手势切换战斗
**Given** 用户在战斗详情页（第2场战斗）
**When** 用户向左滑动
**Then** 系统应切换到第3场战斗
**And** URL 更新为 `/trainer/group/:groupName/battle/2`

### AC-006: 长按预览
**Given** 用户在战斗详情页
**When** 用户长按精灵卡片
**Then** 系统应显示精灵详情预览弹窗
**And** 不跳转到详情页
**When** 用户松开或点击关闭按钮
**Then** 弹窗应关闭

### AC-007: 虚拟滚动
**Given** 战斗列表超过20个
**When** 用户滚动页面
**Then** 系统应只渲染可见区域的卡片
**And** 滚动应流畅无卡顿

### AC-008: 图片懒加载
**Given** 用户在战斗详情页
**When** 页面初始加载
**Then** 系统应只加载可见区域的精灵图片
**When** 用户滚动页面
**Then** 系统应加载进入可见区域的精灵图片

## Error Handling

| Error Condition | Handling | User Message |
|-----------------|----------|--------------|
| 分组名称不存在 | 显示空状态页面 | "该分组不存在或已被删除" |
| 战斗索引越界 | 重定向到第一场战斗 | 无（静默处理） |
| 精灵图片加载失败 | 显示占位图 | 无（静默处理） |
| 数据获取失败 | 显示错误提示 | "数据加载失败，请刷新重试" |
| 路由参数缺失 | 重定向到训练家列表页 | 无（静默处理） |

## Implementation TODO

### Phase 1: 基础结构搭建

#### 路由配置
- [ ] 更新 `src/router/routes.ts`，添加新路由
  - [ ] `/trainer/group/:groupName` → BattleList
  - [ ] `/trainer/group/:groupName/battle/:battleIndex` → BattleDetail
- [ ] 保持现有 `/trainer` 路由不变

#### 组件创建
- [ ] 创建 `src/views/Trainer/BattleList/index.vue`
- [ ] 创建 `src/views/Trainer/BattleList/components/BattleCard.vue`
- [ ] 创建 `src/views/Trainer/BattleDetail/index.vue`
- [ ] 创建 `src/views/Trainer/BattleDetail/components/BattleInfo.vue`
- [ ] 创建 `src/views/Trainer/BattleDetail/components/BattleStats.vue`
- [ ] 创建 `src/views/Trainer/BattleDetail/components/PokemonCard.vue`

#### 类型定义
- [ ] 创建 `src/types/trainer.ts`
  - [ ] 导入现有的 `Pokemon`, `BattleInfo`, `BattleData` 类型
  - [ ] 定义 `BattleStats` 类型
  - [ ] 定义 `AttributeDistribution` 类型

### Phase 2: Composables 抽离

- [ ] 创建 `src/composables/usePokemonName.ts`
  - [ ] 迁移 `processPokemonName` 逻辑
  - [ ] 迁移 `restorePokemonRawName` 逻辑
  - [ ] 迁移 `specialForms` 和 `nameAliases` 数据
- [ ] 创建 `src/composables/usePokemonImage.ts`
  - [ ] 迁移 `getPokemonNumberByName` 逻辑
  - [ ] 迁移 `getImageSrc` 逻辑
- [ ] 创建 `src/composables/useBattleStats.ts`
  - [ ] 实现等级分析计算
  - [ ] 实现属性分布计算
  - [ ] 实现克制推荐计算
- [ ] 创建 `src/composables/useScrollMemory.ts`
  - [ ] 实现滚动位置保存
  - [ ] 实现滚动位置恢复

### Phase 3: 战斗列表页实现

- [ ] 实现 `BattleList/index.vue`
  - [ ] 从路由获取 `groupName` 和 `version` 参数
  - [ ] 调用 `reqNPC()` 或 `reqYHNPC()` 获取数据
  - [ ] 渲染战斗卡片列表
  - [ ] 实现虚拟滚动（使用 `vue-virtual-scroller`）
- [ ] 实现 `BattleCard.vue`
  - [ ] 展示战斗基本信息
  - [ ] 展示精灵预览（前3个）
  - [ ] 计算并展示等级统计
  - [ ] 实现战斗类型配色
  - [ ] 实现点击跳转

### Phase 4: 战斗详情页实现

- [ ] 实现 `BattleDetail/index.vue`
  - [ ] 从路由获取 `groupName`, `battleIndex`, `version` 参数
  - [ ] 获取战斗数据
  - [ ] 实现手势切换战斗（使用 `@vueuse/gesture`）
  - [ ] 实现滚动位置记忆
- [ ] 实现 `BattleInfo.vue`
  - [ ] 展示战斗标题
  - [ ] 展示战斗类型
  - [ ] 展示道具信息
  - [ ] 展示位置信息
- [ ] 实现 `BattleStats.vue`
  - [ ] 展示等级分析
  - [ ] 展示属性分布（使用图表）
  - [ ] 展示克制推荐
- [ ] 实现 `PokemonCard.vue`
  - [ ] 展示精灵头像（懒加载）
  - [ ] 展示精灵名称
  - [ ] 展示等级徽章
  - [ ] 展示特性
  - [ ] 展示持有道具（可点击）
  - [ ] 展示技能列表（可点击）
  - [ ] 实现点击跳转
  - [ ] 实现长按预览

### Phase 5: 样式和动画

- [ ] 实现战斗列表页样式
  - [ ] 卡片布局
  - [ ] 战斗类型配色
  - [ ] hover 效果
- [ ] 实现战斗详情页样式
  - [ ] 页面布局
  - [ ] 精灵卡片样式
  - [ ] 统计信息样式
- [ ] 实现页面切换动画
  - [ ] fade + slide 过渡
- [ ] 实现手势动画
  - [ ] 滑动切换动画

### Phase 6: 性能优化

- [ ] 实现虚拟滚动
  - [ ] 安装 `vue-virtual-scroller`
  - [ ] 配置虚拟滚动组件
- [ ] 实现图片懒加载
  - [ ] 使用 `v-lazy` 指令或 Intersection Observer
- [ ] 实现计算缓存
  - [ ] 使用 `computed` 缓存统计数据

### Phase 7: 测试和优化

- [ ] 手动测试所有功能
  - [ ] 测试页面跳转
  - [ ] 测试数据展示
  - [ ] 测试交互功能
  - [ ] 测试边界情况
- [ ] 性能测试
  - [ ] 测试首屏渲染时间
  - [ ] 测试页面切换时间
  - [ ] 测试滚动流畅度
- [ ] 浏览器兼容性测试
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

### Phase 8: 清理和文档

- [ ] 删除或重构 `GroupDetail/index.vue`（如果不再需要）
- [ ] 更新项目文档
- [ ] 代码审查和优化

## Out of Scope

以下功能明确排除在本次重构范围外：

- **搜索和筛选功能**: 战斗列表页不包含搜索框和筛选器
- **收藏和标记功能**: 不支持收藏战斗或标记已完成
- **战斗模拟器**: 不包含战斗模拟或伤害计算功能
- **多语言支持**: 仅支持中文
- **暗色模式**: 不包含暗色主题切换
- **数据导出**: 不支持导出战斗数据
- **社交分享**: 不包含分享到社交媒体的功能
- **离线支持**: 不包含 PWA 或离线缓存功能

## Open Questions

- [ ] **属性克制推荐算法**: 如何计算克制推荐？是否需要考虑双属性精灵？
- [ ] **手势库选择**: 使用 `@vueuse/gesture` 还是自己实现手势识别？
- [ ] **虚拟滚动库选择**: 使用 `vue-virtual-scroller` 还是 `vue-virtual-scroll-list`？
- [ ] **图表库选择**: 属性分布图表使用 ECharts 还是 Chart.js？
- [ ] **长按预览实现**: 使用弹窗还是底部抽屉？
- [ ] **版本参数持久化**: 是否需要将版本参数保存到 localStorage？

## Design System

### Color Palette

#### Primary Colors
- **主色**: `#409eff` (蓝色)
- **成功**: `#67c23a` (绿色)
- **警告**: `#ff9800` (橙色)
- **危险**: `#f56c6c` (红色)
- **信息**: `#909399` (灰色)

#### Battle Type Colors
- **单打**: `#409eff` (蓝色)
- **双打**: `#9c27b0` (紫色)
- **群战**: `#ff9800` (橙色)
- **三打**: `#67c23a` (绿色)
- **一番战**: `#f56c6c` (红色)

#### Background Colors
- **页面背景**: `#f0f4f8` (浅灰蓝)
- **卡片背景**: `rgba(255, 255, 255, 0.8)` + `backdrop-filter: blur(10px)`
- **次级背景**: `#f8fafc` (更浅的灰蓝)

#### Text Colors
- **主文本**: `#2c3e50` (深灰)
- **次文本**: `#606266` (中灰)
- **辅助文本**: `#909399` (浅灰)
- **占位文本**: `#c0c4cc` (更浅的灰)

### Typography

- **字体家族**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **标题 H1**: `24px / 700`
- **标题 H2**: `20px / 700`
- **标题 H3**: `16px / 700`
- **正文**: `14px / 400`
- **小字**: `12px / 400`
- **标签**: `11px / 600`

### Spacing

- **基准**: `4px`
- **xs**: `4px`
- **sm**: `8px`
- **md**: `12px`
- **lg**: `16px`
- **xl**: `20px`
- **2xl**: `24px`

### Border Radius

- **小**: `8px`
- **中**: `12px`
- **大**: `16px`
- **圆角**: `20px`

### Shadows

- **卡片**: `0 4px 20px rgba(0, 0, 0, 0.03)`
- **悬浮**: `0 8px 30px rgba(0, 0, 0, 0.08)`
- **按钮**: `0 4px 12px rgba(64, 158, 255, 0.3)`

### Animations

- **标准**: `0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)`
- **快速**: `0.2s ease-in-out`
- **缓慢**: `0.5s ease-in-out`

## References

- **现有代码**: `src/views/Trainer/GroupDetail/index.vue`
- **数据类型**: `src/apis/npc/type.ts`
- **Pokemon Store**: `src/store/modules/pokemon.ts`
- **Element Plus**: https://element-plus.org/
- **Vue 3 文档**: https://vuejs.org/
- **TypeScript 文档**: https://www.typescriptlang.org/
