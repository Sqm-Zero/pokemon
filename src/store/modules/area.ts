import { defineStore } from 'pinia'

export const useAreaStore = defineStore('main', {
  state: () => ({
    areaName: '',
    sharedData: {},
    scrollPosition: 0
  }),
  actions: {
  }
})