<script setup>
import { ref, onMounted } from 'vue'
import i18n from '~/i18n'
import { getIPInfo } from '~/helpers'

const selectedLanguage = ref(i18n.global.locale)

const handleClick = lang => {
  setLanguage(lang)
}

const setLanguage = lang => {
  i18n.global.locale = lang
  sessionStorage.setItem('lang', lang)
  selectedLanguage.value = lang
}

onMounted(async () => {
  let defaultLang = sessionStorage.getItem('lang')

  if (!defaultLang) {
    const ipInfo = await getIPInfo()
    defaultLang = ipInfo.country.iso_code === 'UA' ? 'uk' : 'en'
    setLanguage(defaultLang)
  } else {
    i18n.global.locale = defaultLang
  }
})
</script>

<template>
  <menu
    class="language-toggler"
    role="button"
    tabindex="0"
    :title="$t('toggleLangTip')"
  >
    <li
      v-for="(language, index) in ['uk', 'en']"
      :key="index"
      @click="handleClick(language)"
    >
      {{ language }}
    </li>
  </menu>
</template>

<style lang="scss" scoped>
.language-toggler {
	cursor: pointer;
}
</style>
