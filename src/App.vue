<script setup>
import HeaderView from '~/components/HeaderView.vue'
import FooterView from '~/components/FooterView.vue'
import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { locale, t } = useI18n()

// `${t(route.meta.title)} 🌳 UniPark`
// `${t(route.meta.title)} • UniPark`
// `${t(route.meta.title)} — UniPark`
// `${t(route.meta.title)}\u2003UniPark`

const updateTitle = () => {
  document.title = route.meta.title ? `${t(route.meta.title)} 🌳 UniPark` : 'Universal Park'
}

watch([route, locale], updateTitle, { immediate: true })

onMounted(updateTitle)
</script>

<template>
	<header-view />
	<router-view />
	<footer-view />
</template>
