<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.back()
</script>

<template>
	<main class="flex-col-center not-found w100">
		404 ⛔ {{ useRoute().path }}

		<button @click="goBack">back</button>
	</main>
</template>

<style lang="scss" scoped></style>
