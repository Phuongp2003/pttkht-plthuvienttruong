// plugins/global-components.js
import { defineNuxtPlugin } from '#app'
import LoadingTransition from '~/components/LoadingTransition.vue'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('LoadingTransition', LoadingTransition)
})
