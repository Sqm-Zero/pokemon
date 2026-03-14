import { ref } from 'vue';

/**
 * 滚动位置记忆 composable
 */
export function useScrollMemory() {
    const scrollPosition = ref(0);

    /** 保存当前滚动位置 */
    function saveScrollPosition() {
        scrollPosition.value = window.scrollY;
    }

    /** 恢复滚动位置 */
    function restoreScrollPosition(delay = 200) {
        if (scrollPosition.value > 0) {
            setTimeout(() => {
                window.scrollTo({ top: scrollPosition.value, behavior: 'smooth' });
            }, delay);
        }
    }

    /** 重置滚动位置 */
    function resetScrollPosition() {
        scrollPosition.value = 0;
    }

    return {
        scrollPosition,
        saveScrollPosition,
        restoreScrollPosition,
        resetScrollPosition
    };
}
