<script setup>
import { onMounted } from 'vue'
import i18n from '~/i18n'
import { getIP } from '~/helpers'

const setLanguage = lang => {
  i18n.global.locale.value = lang
  localStorage.setItem('lang', lang)
}

const getLanguage = async () =>
  (await getIP()).country.iso_code === 'UA' ? 'uk' : 'en'

onMounted(async () =>
  setLanguage(localStorage.getItem('lang') || (await getLanguage()))
)
</script>

<template>
  <menu
    class="language-toggler flex"
    role="button"
    tabindex="0"
    :title="$t('toggleLangTip')"
  >
    <li
      v-for="(language, index) in ['uk', 'en']"
      :key="index"
      @click="setLanguage(language)"
    >
      <a role="button" :class="{ selected: $i18n.locale === language }">
        {{ language }}
      </a>
    </li>
  </menu>
</template>

<style lang="scss" scoped>
.language-toggler {
  li:first-of-type {
    border-right: 1px solid var(--text-color);
    padding-inline: 0.33em;
  }
  li:last-of-type {
    border-left: 1px solid var(--text-color);
    padding-inline: 0.33em;
  }

  .selected {
    color: var(--link-color);
  }
}
</style>
