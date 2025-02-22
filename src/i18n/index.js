import { createI18n } from 'vue-i18n'

const messages = {
	uk: {
		main: 'Головна',
		ourParks: 'Наші парки',

		SINGING: 'Співуче',
		MAGIC_GARDEN: 'Магічний Сад',
		GIANTS_WORLD: 'Світ Велетнів',
		TROLDOMY: 'ТрольДоми',
		LIGHT_AND_DREAMS: 'Light & Dreams',
		FANTASTIC_PARK: 'Fantastic Park',

		production: 'Виробництво',
		invest: 'Інвестиційна програма',
		toggleTheme_dark: 'До світлої теми',
		toggleTheme_light: 'До темної теми',
		toggleLangTip: 'Мова',

		back: 'Повернутися',
	},
	en: {
		main: 'Main',
		ourParks: 'Our Parks',

		SINGING: 'Singing',
		MAGIC_GARDEN: 'Magic Garden',
		GIANTS_WORLD: 'Giants’ World',
		TROLDOMY: 'Trolldomy',
		LIGHT_AND_DREAMS: 'Light & Dreams',
		FANTASTIC_PARK: 'Fantastic Park',

		production: 'Production',
		invest: 'Investment Program',
		toggleTheme_dark: 'To light theme',
		toggleTheme_light: 'To dark theme',
		toggleLangTip: 'Language',

		back: 'Go back',
	},
}

export default createI18n({
	legacy: false,
	locale: localStorage.getItem('lang') || 'uk',
	fallbackLocale: 'uk',
	messages,
})
