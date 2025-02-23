import { createI18n } from 'vue-i18n'

const messages = {
	uk: {
		main: 'Головна',
		ourParks: 'Наші парки',
		
		SINGING: 'Співуче',
		MAGIC_GARDEN: 'Магічний Сад',
		GIANTS_WORLD: 'Світ Велетнів',
		TROLDOMY: 'Трольдоми',
		LIGHT_AND_DREAMS: 'Light&Dreams',
		FANTASTIC_PARK: 'Fantastic Park',
		
		production: 'Виробництво',
		invest: 'Інвестиційна програма',
		discount: 'Система лояльності',
		about: 'Про нас',
		toggleTheme_dark: 'До світлої теми',
		toggleTheme_light: 'До темної теми',
		toggleLangTip: 'Мова',

		back: 'Повернутися',

		contacts: 'КОНТАКТИ',
		parks: 'НАШІ ПАРКИ',
		address: 'Київ, вул. Лаврська 31',

		invest_h3: 'Інвестиції в Юніверсал парк ЮА',

		invest_top_left: 'про UNIVERSAL PARK',
		invest_top_left_: 'у соціальних мережах',
		invest_top_left_1: 'Адреса',

		invest_top_right: 'Умови',
		invest_top_right_: 'До 25% річних або індивідуальні умови в залежності від участі в проекті',
		invest_top_right_1: 'Сума інвестицій',
		invest_top_right_1_: 'Від 25,000$',
		invest_top_right_2: 'Гарантії',
		invest_top_right_2_: 'Підписуємо інвестиційний договір а також персональний нотаріальний договір з власником компанії',
		invest_top_right_3: 'За рахунок чого будуть виплачуватися проценти',
		invest_top_right_3_: 'Основний дохід компанії формується за рахунок вхідного квитка. Середня ціна квитка 225 грн з людини.',
		invest_top_right_4: 'Кожен наш проект відвідує протягом року від 100 тисяч людей',

		invest_mid_center: 'ФIНАНСОВа МОДЕЛь',
		invest_mid_p1: 'вхiдний квиток',
		invest_mid_p2: 'громадське харчування',
		invest_mid_p3: 'сувенiрна продукцiя',
		invest_mid_p4: 'спонсорськi пакети',

		invest_stats: 'ПРИКЛАДИ ВIДВIДУВАНОСТI НАШИХ ПРОЄКТIВ',
		invest_stats_upto: 'до',
		invest_stats_peryear: 'в рік',
		invest_stats_upto_: 'тисяч',
		invest_stats_upto__: 'відвідувачів',

		invest_CTA: 'є пропозиції? Звертайтеся!',
		invest_CTA_mail: 'Твій email',
		invest_CTA_send: 'ВІДПРАВИТИ',
	},
	en: {
		main: 'Main',
		ourParks: 'Our Parks',

		SINGING: 'Singing',
		MAGIC_GARDEN: 'Magic Garden',
		GIANTS_WORLD: 'Giants’ World',
		TROLDOMY: 'Troldomy',
		LIGHT_AND_DREAMS: 'Light & Dreams',
		FANTASTIC_PARK: 'Fantastic Park',

		production: 'Production',
		invest: 'Investment Program',
		discount: 'Loyalty Scheme',
		about: 'About Us',
		toggleTheme_dark: 'To light theme',
		toggleTheme_light: 'To dark theme',
		toggleLangTip: 'Language',

		back: 'Go back',

		contacts: 'CONTACTS',
		parks: 'OUR PARKS',
		address: 'Kyiv, Lavrska St, 31',

		invest_h3: 'Investments in Universal Park UA',

		invest_top_left: 'about UNIVERSAL PARK',
		invest_top_left_: 'on social networks',
		invest_top_left_1: 'Address',

		invest_top_right: 'Conditions',
		invest_top_right_: 'Up to 25% per annum or individual conditions depending on participation in the project',
		invest_top_right_1: 'Investment amount',
		invest_top_right_1_: 'From $25,000',
		invest_top_right_2: 'Guarantees',
		invest_top_right_2_: 'We sign an investment agreement as well as a personal notarial agreement with the owner of the company',

		invest_top_right_3: 'What will interest be paid for?',
		invest_top_right_3_: 'The company\'s main income comes from admission tickets. The average ticket price is 225 UAH per person.',
		invest_top_right_4: 'Each of our projects is visited by 100 thousand or more people per year',

		invest_mid_center: 'FINANCIAL MODEL',

		invest_mid_p1: 'entrance ticket',
		invest_mid_p2: 'catering',
		invest_mid_p3: 'souvenir products',
		invest_mid_p4: 'sponsorship packages',

		invest_stats: 'EXAMPLES OF THE VISIBILITY OF OUR PROJECTS',
		invest_stats_upto: 'up to',
		invest_stats_upto_: 'thousands',
		invest_stats_upto__: 'of visitors',
		invest_stats_peryear: 'per year',

		invest_CTA: 'Have any suggestions? Contact us!',
		invest_CTA_mail: 'Your email',
		invest_CTA_send: 'SEND',
	},
}

export default createI18n({
	legacy: false,
	locale: localStorage.getItem('lang') || 'uk',
	fallbackLocale: 'uk',
	messages,
})
