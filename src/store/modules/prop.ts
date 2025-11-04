import { defineStore } from 'pinia';

export const usePropStore = defineStore('prop', {
    state: () => ({
        propSearchQuery: '',
    }),
    actions: {
    }
})