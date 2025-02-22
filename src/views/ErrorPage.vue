<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.back()
</script>

<template>
	<main class="flex flex-col justify-center items-center">
		404 ⛔ {{ useRoute().path }}
		<a role="button" @click="goBack">{{ $t('back') }}</a>
	</main>
</template>

<style lang="scss" scoped></style>
