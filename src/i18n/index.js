import { createI18n } from 'vue-i18n'

const messages = {
	en: {
		OurParks: 'Our Parks',
		Main: 'Home',
		SINGING: 'Singing',
		MAGIC_GARDEN: 'Magic Garden',
		GIANTS_WORLD: 'Giants’ World',
		TROLDOMY: 'Trolldomy',
		LIGHT_AND_DREAMS: 'Light & Dreams',
		FANTASTIC_PARK: 'Fantastic Park',
		Production: 'Production',
		Invest: 'Investment Program',
		toggleTheme_dark: 'Dark Theme',
		toggleTheme_light: 'Light Theme',
		toggleLangTip: 'Language',
	},
	uk: {
		OurParks: 'Наші парки',
		Main: 'Головна',
		SINGING: 'Співуче',
		MAGIC_GARDEN: 'Магічний Сад',
		GIANTS_WORLD: 'Світ Велетнів',
		TROLDOMY: 'ТрольДоми',
		LIGHT_AND_DREAMS: 'Light & Dreams',
		FANTASTIC_PARK: 'Fantastic Park',
		Production: 'Виробництво',
		Invest: 'Інвестиційна програма',
		toggleTheme_dark: 'Темна тема',
		toggleTheme_light: 'Світла тема',
		toggleLangTip: 'Мова',
	},
}

export default createI18n({
	legacy: false,
	locale: sessionStorage.getItem('lang') || 'uk',
	fallbackLocale: 'uk',
	messages,
})
