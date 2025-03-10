import { createI18n } from 'vue-i18n'

const messages = {
  uk: {
    main: 'Головна',
    ourParks: 'Наші парки',

    SINGING: 'Співоче',
    MAGIC_GARDEN: 'Магічний Сад',
    GIANTS_WORLD: 'Світ Велетнів',
    TROLDOMY: 'Трольдоми',
    LIGHT_AND_DREAMS: 'Light&Dreams',
    FANTASTIC_PARK: 'Fantastic Park',

    production: 'Виробництво',
    invest: 'Інвестиційна програма',
    discount: 'Система лояльності',
    about: 'Про нас',

    pageNotFound: 'Сторінку не знайдено',

    toggleTheme_dark: 'До світлої теми',
    toggleTheme_light: 'До темної теми',
    toggleLangTip: 'Мова',
    loading: 'Грузимо...',
    back: 'Повернутися',
    buy: 'Купити квитки',
    details: 'детально',

    photo_gallery: 'ФОТОгалерея',
    video_about: 'ВІДЕО про ',
    press_about: 'Преса про ',
    more_details: 'детальніше ↗',

    contacts: 'КОНТАКТИ',
    parks: 'НАШІ ПАРКИ',
    address: 'Київ, вул. Лаврська 31',

    singing1:
      'Співоче є одним із наймальовничіших куточків столиці, адже розмістилося воно на Печерських пагорбах, в самому серці зеленого Києва.',
    singing2:
      'Це місце стало справжнім туристичним якорем та улюбленою локацією сімейного дозвілля, відомою унікальними івентами та культурними подіями.',
    singing3:
      "'СПІВОЧЕ' це сімейний парк відпочинку, де кожен може знайти собі заняття. На території організовані зони дозвілля та відпочинку сімейного типу, різноманітні квіткові інсталяції та фотозони. Панорамні схили парку оповиті справжньою зеленою ковдрою із сотень видів дерев, кущів, квітів та інших рослин. З оглядових майданчиків відкривається фантастичний краєвид на Дніпро та лівий берег Києва.",

    singing_press_1:
      'Оновлення та вдосконалення: які заходи пропонують відвідувачам "Співочого поля" у Києві',
    singing_press_1_:
      'У Київському міському центрі народної творчості та культурологічних досліджень "Співоче поле" анонсували програму на цей рік.',
    singing_press_1_src: 'Суспільне',

    singing_press_2:
      'Чим дивує цього року виставка тюльпанів на "Співочому полі" (фоторепортаж)',
    singing_press_2_:
      '25 квітня 2024 року на "Співочому полі" у Печерському ландшафтному парку стартувала традиційна виставка тюльпанів.',
    singing_press_2_src: 'UNIAN',

    singing_press_3:
      'Тюльпани, однорічники, хризантеми, ілюмінації: Співоче поле анонсує програму на 2024 рік',
    singing_press_3_:
      'Планами на сезон 2024 поділилися у дописі парку. Цього року заплановано 4 виставки, які вже стали улюбленими.',
    singing_press_3_src: 'Bigkyiv',

    magic_garden_press: 'Преса про Магічний сад',
    magic_garden_press_1:
      'Чим дивує цього року виставка тюльпанів на "Співочому полі" (фоторепортаж)',
    magic_garden_press_1_:
      'На "Співочому полі" на території Печерського ландшафтного парку в Києві з 22 вересня 2023 року триває традиційна щорічна виставка хризантем.',
    magic_garden_press_1_src: 'UNIAN',

    magic_garden_press_2: 'У Києві стартує проєкт "Магічний сад"',
    magic_garden_press_2_:
      'У Києві у п\'ятницю, 22 вересня, в парку "Співоче" стартує проєкт "Магічний сад".',
    magic_garden_press_2_src: 'UKRINFORM',

    magic_garden_press_3:
      'Фантастичні фігури серед хризантем: у Києві з\'явився "Магічний сад"',
    magic_garden_press_3_:
      'П’ятнадцять тисяч кущів хризантем і 35 істот, створених з моху та природних матеріалів, занурюють відвідувачів "Магічного саду" на Співочому у світ фантазій.',
    magic_garden_press_3_src: 'Вечірній Київ',

    magic_garden_press_4:
      'Яскраві барви осені: у Києві тривають останні приготування до відкриття щорічної виставки хризантем',
    magic_garden_press_4_:
      '22 вересня у Києві на Співочому полі на території Печерського ландшафтного парку відкриють виставку хризантем "Магічний сад".',
    magic_garden_press_4_src: 'Суспільне',

    giants_world_press_1:
      'Світ Велетнів у центрі Чернівців: що відомо про новий тематичний парк розваг',
    giants_world_press_1_:
      'Вже 19 липня в парку Шевченка у Чернівцях стартує унікальний проєкт Світ Велетнів. Проєкт вже з успіхом пройшов у Києві, Львові та Ужгороді, а ось у Чернівцях його покажуть вперше.',
    giants_world_press_1_src: 'C4',

    giants_world_press_2:
      'Світ Велетнів у Голосіївському парку підкорює тисячі киян',
    giants_world_press_2_:
      'У столиці проходить експозиція "Світ велетнів". За перший місяць роботи з гігантськими казковими персонажами вже встигли познайомитися понад 16 тисяч киян.',
    giants_world_press_2_src: 'Вечірній Київ',

    giants_world_press_3:
      '«Світ Велетнів»: У Києві покажуть живі фігури, які заговорять голосами відомих українців',
    giants_world_press_3_:
      '"Світ Велетнів", тематичний парк казкових персонажів, всі герої якого "оживуть" за допомогою аніматроніки, а також будуть розмовляти з гостями голосами відомих українців.',
    giants_world_press_3_src: 'Прямий',

    troldomy_press_1: 'Казковий світ Трольдомів',
    troldomy_press_1_:
      'На території відпочинкового комплексу «Emily Resort», що у Винниках, запрацював тематичний парк «Казковий світ Трольдомів».',
    troldomy_press_1_src: 'Високий замок',
    troldomy_press_2: 'Казка у Львові',
    troldomy_press_2_:
      'У Львові відкрили тематичний парк «Трольдоми», де кожен матиме можливість повзаємодіяти з казковими істотами.',
    troldomy_press_2_src: 'НТА',
    troldomy_press_3:
      'Казка у Львові. Унікальне місце для дітей та дорослих: біля Львова “оселилися” трольдоми',
    troldomy_press_3_:
      'Величезні пухнасті герої, які вміють не тільки рухатися, але й розмовляти: у Львові відкрили тематичний парк «Трольдоми». Унікальне місце для дітей та дорослих: біля Львова «оселилися» трольдоми.',
    troldomy_press_3_src: 'Вголос',

    lights_and_dreams_press_1:
      'У Ужгороді відкриють парк світлових фігур «Lights & Dreams»',
    lights_and_dreams_press_1_:
      '18 липня в Боздоському парку Ужгорода відбудеться довгоочікуване відкриття парку світлових фігур «Lights & Dreams», який вже з успіхом пройшов в Україні та за кордоном.',
    lights_and_dreams_press_1_src: 'Новини Закарпаття',

    lights_and_dreams_press_2:
      'Парк світлових фігур Lights & Dreams в Ужгороді',
    lights_and_dreams_press_2_:
      'На вас чекає незабутня подорож за межами уяви, яка включає в себе унікальні атракціони, інтерактивні розваги, зони дозвілля для дорослих та дітей, стилізовані фотозони, шоу аніматорів та гастро-заклади.',
    lights_and_dreams_press_2_src: 'Tourinform',

    lights_and_dreams_press_3: "'Lights & Dreams': де казка стає реальністю",
    lights_and_dreams_press_3_:
      "У Чернівцях відкрилася нова туристична атракція, яка стає справжнім місцем чудес та мрій – парк світлових фігур 'Lights & Dreams'.",
    lights_and_dreams_press_3_src: 'Go Chernivtsi',

    lights_and_dreams_press_4:
      'В Ужгороді відкриють парк світлових фігур «Lights & Dreams»',
    lights_and_dreams_press_4_:
      'Всі фігури проєкту «Lights & Dreams» виготовлені вручну з 50 000 ліхтариків, натурального шовку та спеціальних LED-ламп.',
    lights_and_dreams_press_4_src: 'Varosh',

    magic_garden1:
      'Проєкт «Магічний сад» — це справжній тематичний парк із казковими героями, масштабними квітковими інсталяціями та яскравими фотозонами, де кожен відвідувач зможе відчути себе частиною історії.',
    magic_garden2:
      "Головні герої парку – добрі та злі персонажі легенд про міфічних створінь, що оберігають Землю. Загалом виставка передбачає близько 35 об'ємних 3D фігур, а також понад десятки тисяч квітів. Голосом проєкту став народний артист України, відомий актор театру та кіно Богдан Бенюк.",
    magic_garden3:
      'Кожен куточок парку сповнений чарів та фантазії, створюючи неповторну атмосферу, яка дарує незабутні емоції і дітям, і дорослим.',

    giants_world1:
      '«Світ Велетнів» не має аналогів у світі. Головні герої парку — добрі та злі велетні з легенди про Долину Туманів, що «оживають» за допомогою аніматроніки, а також розмовляють з гостями голосами відомих українців.',
    giants_world2:
      'У цьому тематичному парку навіть дорослі можуть про все забути і знову відчути себе маленькими мрійниками. Анімовані фігури велетнів заввишки понад 4 метри, інтерактивні розваги, шоу аніматорів, програма з акторами та спілкування з відвідувачами парку — це все те, що чекає на відвідувачів.',
    giants_world3:
      'Особливість цього парку полягає в тому, що фігури велетнів не лише рухаються, але й розмовляють завдяки сучасним технологіям аніматроніки. Кожен герой має свою особливу місію, що додає унікальності цьому казковому світу.',
    giants_world4:
      'Крім того, гості можуть взяти участь у захоплюючих квестах, досліджуючи загадкові куточки парку та розгадуючи таємниці велетнів. Для наймолодших відвідувачів створено спеціальні ігрові зони та майстер-класи, де вони зможуть власноруч створювати свої маленькі шедеври.',
    giants_world5:
      '«Світ Велетнів» — це місце, де мрії стають реальністю, де кожен знайде для себе щось особливе і незабутнє.',

    troldom1:
      'Трольдоми — це новий унікальний парк світового масштабу з оригінальним дизайн-контентом та справжньою сюжетною історією. Це живий світ, у який можуть поринути і дорослі, і діти.',
    troldom2:
      'За легендою, трольдоми рятують життя кожній дитині, яка народжується у поселенні. Отже, трольдоми — це охоронці дітей. Фігури трольдомів заввишки сягають від метра до чотирьох метрів, найвища фігура — чотири метри. У парку також є малюсінький трольдом і закохана парочка — Арарін і Молобур.',
    troldom3:
      'Найцікавіше, що фігури трольдомів не лише рухаються (мають вмонтовану аніматроніку), а й розмовляють. Кожен має свій унікальний голос та місію.',
    troldom4:
      '«Я завжди радий новим друзям, — говорить Окоран, вартовий башти Тіньозора. — У мене лише одне око, але воно бачить далеко і чітко. Тому я й стою на варті трольдомів…».',
    troldom5:
      'Окрім самих фігур, парк має унікальні тематичні локації, які до вподоби не тільки дітям, а й дорослим. На території є «тунелі бажань», які стануть для відвідувачів гарною фотозоною, зони з майстер-класами, інтерактивні гойдалки.',
    troldom6:
      'Важливою частиною парку є оригінальна авторська вистава, за допомогою якої можна дізнатись та побачити найголовніше — історію трольдомів. Трольдоми запрошують вас у дивовижну подорож, де кожна стежка розповідає нову історію, а кожен крок відкриває нові пригоди.',

    light_and_dreams1:
      'Парк світлових фігур «Lights&Dreams», який вже встигли полюбити мільйони українців та за кордоном. Цей унікальний парк ілюмінацій та масштабних світлових інсталяцій має на меті створити справжній тематичний простір з казковими героями, незабутніми локаціями та яскравими фотозонами. Він побував у країнах Балтії та Туреччині.',
    light_and_dreams2:
      'Кожна інсталяція у парку сягає до 7 метрів у висоту, що робить їх справжніми витворами мистецтва. Тематичні локації парку є частиною легенди про паралельний світ, де панують феї, ельфи та дракони. Провідником у цей дивовижний світ виступає магічна лампа.',
    light_and_dreams3:
      'Відвідувачі мають змогу насолодитися понад 30 ілюмінаційними локаціями, серед яких: «Ліс казкових фей та ельфів», «Тунель закоханих», «Магічні коти», «Золотий дракон» та інші. На гостей чекає незабутня подорож за межами уяви, що включає унікальні інтерактивні розваги, зони дозвілля для дорослих та дітей, стилізовані фотозони, шоу аніматорів та гастрономічні заклади.',
    light_and_dreams4:
      'Важливо зазначити, що світлові фігури працюють в енергозберігальному режимі, споживаючи лише 20 кВт на годину. Крім ілюмінацій, парк пропонує інтерактивні зони дозвілля, зони відпочинку та театралізовані виступи акторів.',

    header:
      'UniPark - українська компанія, яка працює над створенням проєктів з 2015 року.',
    header_:
      'Наша особливість полягає в тому, що кожен наш тематичний парк є унікальним і має свою особливу історію.',
    header__:
      'Ми подарували незабутні враження мільйонам українців, а також мешканцям інших країн.',

    main_prod_over:
      'Використовуємо\nсучасні цифрові технології. Створюємо живі композиції за допомогою робототехніки та аніматроніки',

    our_production: 'НАШЕ ВИРОБНИЦТВО',

    our_team: 'Наша команда',
    our_team_:
      'Над створенням проєктів в нас працює команда справжніх спеціалістів, відданих справі, якою займаються',

    Team0: 'Денис Погорелко',
    Team0_: 'засновник',
    Team1: 'Віталій Бенедик',
    Team1_: 'операційний керівник',
    Team2: 'Анастасія Бабій',
    Team2_: 'керівник проектів',
    Team3: 'Дарія Ткачук',
    Team3_: 'PR департамент',
    Team4: 'Анна Кліменко',
    Team4_: 'СММ спеціаліст',
    Team5: 'Іванна Боднарчук',
    Team5_: 'ландшафтний дизайнер',
    Team6: 'Анастасія Уткачова',
    Team6_: 'проджект менеджер',
    Team7: 'Олег Удовенко',
    Team7_: 'технічний відділ',
    Team8: 'Анна Марійко',
    Team8_: 'режисер постановник',
    Team9: 'Дмитро Чуб',
    Team9_: '3D дизайнер',
    Team10: 'Ксенія Тимошенко',
    Team10_: 'дизайнер',
    Team11: 'Сергій Кім',
    Team11_: 'відеограф',
    Team12: 'Вадім Червоняк',
    Team12_: 'веб-розробник',

    welcome:
      'Ласкаво запрошуємо в світ UniPark – компанії, що втілює мрії у реальність, створюючи неповторні тематичні парки як в Україні, так і за кордоном.',
    our_ideology: 'Наша ідеологія',

    our_mission:
      "Наша місія полягає в тому, щоб подарувати кожному гостю незабутні позитивні враження, які живуть у пам'яті протягом усього життя. Ми віримо, що кожна прогулянка нашими парками – це унікальний шлях до щастя і радості, де кожен крок наповнений чарами, магією та незабутніми емоціями. Об'єднані бажанням дарувати людям магію і веселощі, ми неустанно працюємо, щоб кожен момент у UniPark став частиною найяскравіших спогадів вашого життя.",

    our_direction: 'Основний напрямок нашої компанії',
    our_direction_:
      'Створення від ідеї до реалізації унікальних тематичних парків, які мають власну історію, унікальних персонажів та захоплюючі інсталяції, які ми виготовляємо на власному виробництві.',

    achievement: 'Ми реалізували безліч проєктів у різних країнах світу',
    achievement_:
      'Наша компанія створює та відкриває проєкти не тільки в Україні, а й за кордоном. Парки від UniPark були в Туреччині та країнах Балтії. Мешканці кожної відвіданої нами країни залишалися в захваті від побаченого.',

    quote:
      'Ми реалізували безліч унікальних проєктів в Україні та інших країнах світу. Наша команда створює від ідеї до втілення тематичні парки різної складності. Всі проєкти мають смислове навантаження та власну індивідуальну історію.',

    founder: 'Засновник компанії',

    invest_h3: 'Інвестиції в Юніверсал парк ЮА',
    invest_top_left: 'про UNIVERSAL PARK',
    invest_top_left_: 'у соціальних мережах',
    invest_top_left_1: 'Адреса',
    invest_top_right: 'Умови',
    invest_top_right_:
      'До 25% річних або індивідуальні умови в залежності від участі в проекті',
    invest_top_right_1: 'Сума інвестицій',
    invest_top_right_1_: 'Від 25,000$',
    invest_top_right_2: 'Гарантії',
    invest_top_right_2_:
      'Підписуємо інвестиційний договір а також персональний нотаріальний договір з власником компанії',
    invest_top_right_3: 'За рахунок чого будуть виплачуватися проценти',
    invest_top_right_3_:
      'Основний дохід компанії формується за рахунок вхідного квитка. Середня ціна квитка 225 грн з людини.',
    invest_top_right_4:
      'Кожен наш проект відвідує протягом року від 100 тисяч людей',
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

    discount_h3:
      'Ми раді повідомити, що відтепер для Вас діє нова система лояльності з численними вигодами',
    discount_mid_h3: 'Що дає система лояльності?',
    discount_benefit_1: 'Знижку 10%',
    discount_benefit_2: 'Ексклюзивні знижки',
    discount_benefit_3: 'Розрахунок бонусами',
    discount_benefit_4: 'актуальна інформація',
    discount_benefit_1_:
      'на покупку наступних квитків на заходи Universal park',
    discount_benefit_2_: 'на групові квитки',
    discount_benefit_3_:
      'на території парку (бонуси діють на певну групу товарів)',
    discount_benefit_4_: 'про заходи, що плануються в парку',
    discount_CTA: 'реєструйся в пару кліків',
    discount_CTA_:
      'Перейдіть до телеграм бота й отримайте карту лояльності в декілька кліків',
    discount_CTA_1: 'Телеграм бот',

    production_1: 'про виробництво',
    production_2: 'Особливість',
    production_3: 'Високі стандарти якості',
    production_4: 'Сучасні технології',
    production_5: 'Професійна команда',
    production_6: 'Індивідуальний підхід',
    production_1_:
      'Наше виробництво — це поєднання передових технологій, високої якості та бездоганного сервісу. Ми пишаємося тим, що кожен етап нашого виробничого процесу спрямований на створення елементів, які відповідають найвищим стандартам.',
    production_2_:
      'Ми маємо багаторічний досвід створення фігур з аніматронікою найвищої якості, а також створення тематичних інсталяцій і елементів декору «під ключ».',
    production_3_:
      'Ми використовуємо лише найкращі матеріали, що гарантує надійність і довговічність наших виробів. Кожен екземпляр проходить суворий контроль якості на всіх етапах виробництва, що забезпечує відповідність вимогам.',
    production_4_:
      'Наше обладнання — це сучасні технологічні рішення, що дозволяють нам досягати високої продуктивності та точності у виробництві. Ми постійно інвестуємо в оновлення нашого обладнання та впровадження інновацій, що дозволяє нам залишатися на передовій галузі.',
    production_5_:
      'Наша команда — це висококваліфіковані фахівці, які мають багаторічний досвід роботи у своїй сфері. Вони з пристрастю та відданістю виконують свою роботу, забезпечуючи найвищий рівень обслуговування.',
    production_6_:
      'Ми розуміємо, що кожен виріб унікальний. Тому ми застосовуємо індивідуальні рішення, що дозволяють максимально задовольнити очікування для кожного проєкту. Від проектування до фінального продукту — ми працюємо, щоб забезпечити найкращий результат.',

    production_AZ: 'створені нами парки',

    SINGING_:
      'Сімейний парк відпочинку, де кожен може знайти собі заняття. На території організовані зони дозвілля та відпочинку сімейного типу, різноманітні квіткові інсталяції та фотозони.',
    TROLDOMY_:
      'Новий унікальний парк світового масштабу з оригінальним дизайн-контентом та справжньою сюжетною історією. Головні персонажі надзвичайно милі та яскраві трольдоми, які рухаються та говорять з відвідувачами.',
    LIGHT_AND_DREAMS_:
      'Цей унікальний парк ілюмінацій та масштабних світлових інсталяцій має на меті створити справжній тематичний простір з казковими героями, незабутніми локаціями та яскравими фотозонами.',
    GIANTS_WORLD_:
      'Тематичний парк з фігурами заввишки від 3 до 5 метрів. Головні герої парку — добрі та злі велетні з легенди про Долину Туманів, що «оживають» за допомогою аніматроніки, а також розмовляють з гостями голосами відомих українців.',
    MAGIC_GARDEN_:
      'Проект «Магічний Сад» – тематичний парк із казковими героями, масштабними квітковими інсталяціями та яскравими фотозонами, де кожен відвідувач зможе відчути себе частиною історії.',
    FANTASTIC_PARK_:
      'Цей фантастичний проєкт готується до зустрічі з вами, але треба трошки зачекати!\nСлідкуйте за новинами Universal Park, ми повідомимо Вам про день нашої спільної подорожі!..',

    FANTASTIC_PARK_1:
      'FАNTASTIC PARK це перший в Україні тематичний парк розваг, в якому зібрані фантастичні герої, масштабні інсталяції, казкові ілюмінації та унікальні інтерактивні зони для дорослих та дітей!',
    FANTASTIC_PARK_2:
      "Ти зможеш не просто споглядати за композиціями та робити фото - а взаємодіяти з ними. У FANTASTIC PARK ти станеш невід'ємною частиною кожної локації!",
    FANTASTIC_PARK_3:
      'Цей фантастичний проєкт готується до зустрічі з вами, але треба трошки зачекати!',
    FANTASTIC_PARK_4:
      'Слідкуйте за новинами Universal Park, ми повідомимо Вам про день нашої спільної подорожі!..',
  },
  en: {
    main: 'Main',
    ourParks: 'Our Parks',

    SINGING: 'Spivoche',
    MAGIC_GARDEN: 'Magical Garden',
    GIANTS_WORLD: 'Giants’ World',
    TROLDOMY: 'Troldomy',
    LIGHT_AND_DREAMS: 'Light & Dreams',
    FANTASTIC_PARK: 'Fantastic Park',

    production: 'Production',
    invest: 'Investment Program',
    discount: 'Loyalty System',
    about: 'About Us',

    pageNotFound: 'Page Not Found',

    toggleTheme_dark: 'To light theme',
    toggleTheme_light: 'To dark theme',
    toggleLangTip: 'Language',
    loading: 'Loading...',
    back: 'Go back',
    details: 'details',

    photo_gallery: 'PHOTO gallery',
    video_about: 'VIDEO about ',
    press_about: 'Press about ',
    more_details: 'more details ↗',

    buy: 'Buy tickets',
    contacts: 'CONTACTS',
    parks: 'OUR PARKS',
    address: 'Kyiv, Lavrska St, 31',

    singing1:
      'Spivoche is one of the most picturesque corners of the capital, located on the Pechersk hills, in the heart of green Kyiv.',
    singing2:
      'This place has become a true tourist anchor and a favorite family leisure spot, known for its unique events and cultural activities.',
    singing3:
      "'SPIVOCHE' is a family recreation park where everyone can find an activity. The area is organized into family-friendly leisure zones, various flower installations, and photo zones. The panoramic slopes of the park are covered with a true green blanket of hundreds of tree, bush, flower, and other plant species. From the viewing platforms, there is a fantastic view of the Dnieper and the left bank of Kyiv.",

    singing_press_1:
      'Updates and improvements: what events does Spivoche Field in Kyiv offer to visitors',
    singing_press_1_:
      'Kyiv City Center for Folk Art and Cultural Research Spivoche Field announced the program for this year.',
    singing_press_1_src: 'Suspilne',

    singing_press_2:
      'What surprises the tulip exhibition at Spivoche Field offers this year (photo report)',
    singing_press_2_:
      'On April 25, 2024, the traditional tulip exhibition started in the Pechersk Landscape Park in Kyiv.',
    singing_press_2_src: 'UNIAN',

    singing_press_3:
      'Tulips, annuals, chrysanthemums, illuminations: Spivoche Field announces the program for 2024',
    singing_press_3_:
      'The park shared its plans for the 2024 season. This year, four exhibitions are planned, which have already become favorites.',
    singing_press_3_src: 'Bigkyiv',

    magic_garden_press: 'Press about Magical Garden',
    magic_garden_press_1:
      'What surprises the tulip exhibition at Spivoche Field offers this year (photo report)',
    magic_garden_press_1_:
      'The annual chrysanthemum exhibition has been running at Spivoche Field in the Pechersk Landscape Park in Kyiv since September 22, 2023.',
    magic_garden_press_1_src: 'UNIAN',

    magic_garden_press_2:
      'The Magical Garden project starts at Spivoche Park in Kyiv',
    magic_garden_press_2_:
      'On Friday, September 22, the Magical Garden project starts at Spivoche Park in Kyiv.',
    magic_garden_press_2_src: 'UKRINFORM',

    magic_garden_press_3:
      'Fantastic figures among chrysanthemums: the Magical Garden appeared in Kyiv',
    magic_garden_press_3_:
      'Fifteen thousand chrysanthemum bushes and 35 creatures made of moss and natural materials immerse visitors of the Magical Garden at Spivoche into a world of fantasy.',
    magic_garden_press_3_src: 'Vechirniy Kyiv',

    magic_garden_press_4:
      'Bright autumn colors: Kyiv is preparing for the opening of the annual chrysanthemum exhibition',
    magic_garden_press_4_:
      'On September 22, the chrysanthemum exhibition Magical Garden will open at Spivoche Field in the Pechersk Landscape Park.',
    magic_garden_press_4_src: 'Suspilne',

    giants_world_press_1:
      'Giants World in the center of Chernivtsi: what is known about the new themed amusement park',
    giants_world_press_1_:
      'On July 19, a unique project Giants World will start in Shevchenko Park in Chernivtsi. The project has already successfully taken place in Kyiv, Lviv, and Uzhhorod, but will be shown in Chernivtsi for the first time.',
    giants_world_press_1_src: 'C4',

    giants_world_press_2:
      'Giants World in Holosiivskyi Park conquers thousands of Kyivans',
    giants_world_press_2_:
      'An exhibition Giants World is taking place in the capital. Over the first month of work, more than 16,000 Kyivans have already met the giant fairy-tale characters.',
    giants_world_press_2_src: 'Vechirniy Kyiv',

    giants_world_press_3:
      'Giants World: Live figures will be shown in Kyiv, speaking in the voices of famous Ukrainians',
    giants_world_press_3_:
      "Giants World, a themed park of fairy-tale characters, where all heroes will 'come to life' with the help of animatronics and will talk to guests with the voices of famous Ukrainians.",
    giants_world_press_3_src: 'Pryamyi',

    troldomy_press_1: 'The Fairytale World of Trolldoms',
    troldomy_press_1_:
      "At the Emily Resort recreational complex in Vynnyky, the themed park 'Fairy World of Troldoms' has started its operation.",
    troldomy_press_1_src: 'Vysokyi Zamok',
    troldomy_press_2: 'A fairy tale in Lviv',
    troldomy_press_2_:
      "In Lviv, the themed park 'Troldomy' has opened, offering visitors the opportunity to interact with mythical beings.",
    troldomy_press_2_src: 'NTA',
    troldomy_press_3:
      'A fairy tale in Lviv. A unique place for children and adults: trolldoms have “settled” near Lviv',
    troldomy_press_3_:
      "Giant fluffy heroes that can move and talk: Lviv has opened a themed park 'Troldomy'. A unique place for both children and adults, the Troldomy creatures have 'settled' near Lviv.",
    troldomy_press_3_src: 'Vholos',

    lights_and_dreams_press_1:
      "The 'Lights & Dreams' light figure park opens in Uzhhorod",
    lights_and_dreams_press_1_:
      "On July 18, the long-awaited opening of the 'Lights & Dreams' light figure park will take place at Bozdosky Park in Uzhhorod. This project has already been successful both in Ukraine and abroad.",
    lights_and_dreams_press_1_src: 'Novyny Zakarpattia',
    lights_and_dreams_press_2:
      "'Lights & Dreams' light figure park in Uzhhorod",
    lights_and_dreams_press_2_:
      'A unique adventure awaits you, featuring interactive attractions, leisure zones for adults and children, photo zones, animator shows, and food spots.',
    lights_and_dreams_press_2_src: 'Tourinform',
    lights_and_dreams_press_3:
      "'Lights & Dreams': Where fairy tales come to life",
    lights_and_dreams_press_3_:
      "A new tourist attraction has opened in Chernivtsi – the 'Lights & Dreams' light figure park, which is quickly becoming a place of wonder and dreams.",
    lights_and_dreams_press_3_src: 'Go Chernivtsi',
    lights_and_dreams_press_4:
      "In Uzhhorod, the 'Lights & Dreams' light figure park opens",
    lights_and_dreams_press_4_:
      "All figures in the 'Lights & Dreams' project are handmade with 50,000 light bulbs, natural silk, and special LED lamps.",
    lights_and_dreams_press_4_src: 'Varosh',

    magic_garden1:
      "The 'Magical Garden' project is a true theme park with fairy-tale characters, large floral installations, and vibrant photo zones, where every visitor can feel like part of the story.",
    magic_garden2:
      "The main characters of the park are the good and evil characters from legends about mythical creatures that protect the Earth. The exhibition includes about 35 large 3D figures and over tens of thousands of flowers. The voice of the project was the People's Artist of Ukraine, famous theater and film actor Bohdan Benyuk.",
    magic_garden3:
      'Every corner of the park is filled with magic and fantasy, creating a unique atmosphere that gives unforgettable emotions to both children and adults.',

    giants_world1:
      "'The World of Giants' has no analogs in the world. The main heroes of the park are the good and evil giants from the legend of the Valley of Mists, who 'come to life' with animatronics and also speak to guests with the voices of famous Ukrainians.",
    giants_world2:
      'In this theme park, even adults can forget about everything and feel like little dreamers again. Animated giant figures over 4 meters tall, interactive entertainment, animator shows, programs with actors, and communication with park visitors — all this awaits the visitors.',
    giants_world3:
      'The uniqueness of this park lies in the fact that the giant figures not only move but also talk thanks to modern animatronic technology. Each hero has its own special mission, adding uniqueness to this fairy-tale world.',
    giants_world4:
      "Moreover, guests can participate in exciting quests, exploring the mysterious corners of the park and solving the giants' secrets. For the youngest visitors, special play zones and workshops have been created where they can make their own little masterpieces.",
    giants_world5:
      "'The World of Giants' is a place where dreams come true, where everyone can find something special and unforgettable.",

    troldom1:
      'Troldoms is a new unique world-class park with original design content and a real story. It is a living world where both adults and children can immerse themselves.',
    troldom2:
      'According to the legend, the troldoms save the lives of every child born in the settlement. Thus, the troldoms are the guardians of children. The figures of troldoms range in height from one meter to four meters, with the tallest figure being four meters. The park also features a tiny troldom and a loving couple — Ararin and Molobur.',
    troldom3:
      'The most interesting thing is that the troldom figures not only move (they are equipped with animatronics), but they also speak. Each one has its unique voice and mission.',
    troldom4:
      '‘I am always happy to meet new friends,’ says Okoran, the guardian of the Shadow Tower. ‘I only have one eye, but it sees far and clearly. That’s why I stand guard over the troldoms…’',
    troldom5:
      "In addition to the figures themselves, the park features unique thematic locations that appeal to both children and adults. There are 'wish tunnels' which will make for great photo zones, masterclass areas, and interactive swings.",
    troldom6:
      "The park also features an original author's performance that reveals the most important thing — the history of the troldoms. Troldoms invites you on a fascinating journey, where every path tells a new story, and every step opens new adventures.",

    light_and_dreams1:
      "'Lights&Dreams' is a light figure park loved by millions of Ukrainians and people abroad. This unique park of illuminations and large-scale light installations aims to create a true thematic space with fairy-tale characters, unforgettable locations, and vibrant photo zones. It has visited the Baltic States and Turkey.",
    light_and_dreams2:
      "Each installation in the park reaches up to 7 meters in height, making them true works of art. The park's thematic locations are part of a legend about a parallel world ruled by fairies, elves, and dragons. The guide to this amazing world is a magical lamp.",
    light_and_dreams3:
      "Visitors can enjoy more than 30 illuminated locations, including: 'The Forest of Fairy Fairies and Elves', 'The Tunnel of Lovers', 'Magical Cats', 'The Golden Dragon', and others. Guests are in for an unforgettable journey beyond imagination, including unique interactive entertainment, leisure zones for both adults and children, styled photo zones, animator shows, and dining establishments.",
    light_and_dreams4:
      'It is important to note that the light figures operate in energy-saving mode, consuming only 20 kW per hour. In addition to illuminations, the park offers interactive leisure zones, rest areas, and theatrical performances by actors.',

    header:
      'UniPark is a Ukrainian company that has been working on creating projects since 2015.',
    header_:
      'Our specialty is that each of our theme parks is unique and has its own special story.',
    header__:
      'We have given unforgettable experiences to millions of Ukrainians, as well as residents of other countries.',

    main_prod_over:
      'We use\nmodern digital technologies. We create live compositions using robotics and animatronics',

    our_production: 'OUR PRODUCTION',

    our_team: 'Our Team',
    our_team_:
      'Our projects are created by a team of true specialists who are dedicated to their work.',

    Team0: 'Denys Pohorelko',
    Team0_: 'Founder',
    Team1: 'Vitalii Benedyk',
    Team1_: 'Chief Operating Officer',
    Team2: 'Anastasiia Babii',
    Team2_: 'Project Manager',
    Team3: 'Daria Tkachuk',
    Team3_: 'PR Department',
    Team4: 'Anna Klimenko',
    Team4_: 'SMM Specialist',
    Team5: 'Ivanna Bodnarchuk',
    Team5_: 'Landscape Designer',
    Team6: 'Anastasiia Utkachova',
    Team6_: 'Project Manager',
    Team7: 'Oleh Udovenko',
    Team7_: 'Technical Department',
    Team8: 'Anna Mariiko',
    Team8_: 'Stage Director',
    Team9: 'Dmytro Chub',
    Team9_: '3D Designer',
    Team10: 'Kseniia Tymoshenko',
    Team10_: 'Designer',
    Team11: 'Serhii Kim',
    Team11_: 'Videographer',
    Team12: 'Vadym Chervoniak',
    Team12_: 'Web Developer',

    welcome:
      'We cordially invite you to the world of UniPark – a company that turns dreams into reality, creating unique theme parks both in Ukraine and abroad.',

    our_ideology: 'Our ideology',

    our_mission:
      'Our mission is to give each guest unforgettable positive experiences that will live in their memory for a lifetime. We believe that every walk through our parks is a unique path to happiness and joy, where every step is filled with charm, magic and unforgettable emotions. United by the desire to give people magic and fun, we work tirelessly to make every moment at UniPark become part of the most vivid memories of your life.',

    our_direction: 'The main direction of our company',
    our_direction_:
      'Creating, from idea to implementation, unique theme parks that have their own history, unique characters, and exciting installations that we produce in our own production facility.',

    achievement:
      'We have implemented many projects in different countries of the world',
    achievement_:
      'Our company creates and opens projects not only in Ukraine, but also abroad. UniPark parks were in Turkey and the Baltic countries. Residents of each country we visited were delighted with what they saw.',

    quote:
      'We have implemented many unique projects in Ukraine and other countries of the world. Our team creates theme parks of varying complexity from idea to implementation. All projects have a semantic load and their own individual history.',

    founder: 'Founder of the company',

    invest_h3: 'Investments in Universal Park UA',
    invest_top_left: 'about UNIVERSAL PARK',
    invest_top_left_: 'on social networks',
    invest_top_left_1: 'Address',
    invest_top_right: 'Conditions',
    invest_top_right_:
      'Up to 25% per annum or individual conditions depending on participation in the project',
    invest_top_right_1: 'Investment amount',
    invest_top_right_1_: 'From $25,000',
    invest_top_right_2: 'Guarantees',
    invest_top_right_2_:
      'We sign an investment agreement as well as a personal notarial agreement with the owner of the company',
    invest_top_right_3: 'What will interest be paid for?',
    invest_top_right_3_:
      "The company's main income comes from admission tickets. The average ticket price is 225 UAH per person.",
    invest_top_right_4:
      'Each of our projects is visited by 100 thousand or more people per year',
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
    invest_CTA: 'Have an offer? Contact us!',
    invest_CTA_mail: 'Your email',
    invest_CTA_send: 'SEND',

    discount_h3:
      'We are pleased to announce that from now on a new loyalty system with numerous benefits is available for you',
    discount_mid_h3: 'What does the loyalty system provide?',
    discount_benefit_1: '10% discount',
    discount_benefit_2: 'Exclusive discounts',
    discount_benefit_3: 'Payment with bonuses ',
    discount_benefit_4: 'Up-to-date information',
    discount_benefit_1_:
      'for purchasing future tickets to Universal Park events',
    discount_benefit_2_: 'for group tickets',
    discount_benefit_3_:
      'within the park (bonuses apply to a specific group of products)',
    discount_benefit_4_: 'about upcoming events in the park',
    discount_CTA: 'register in just a few clicks',
    discount_CTA_:
      'Go to the Telegram bot and get a loyalty card in just a few clicks',
    discount_CTA_1: 'Telegram bot',

    production_1: 'about production',
    production_2: 'Feature',
    production_3: 'High-quality standards',
    production_4: 'Modern technologies',
    production_5: 'Professional team',
    production_6: 'Individual approach',
    production_1_:
      'Our production is a combination of advanced technologies, high quality, and impeccable service. We take pride in ensuring that every stage of our manufacturing process is aimed at creating elements that meet the highest standards.',
    production_2_:
      'We have many years of experience in creating high-quality animatronic figures, as well as designing themed installations and turnkey decorative elements.',
    production_3_:
      'We use only the best materials, ensuring reliability and durability. Each product undergoes rigorous quality control at all stages of production to meet the required standards.',
    production_4_:
      'Our equipment features cutting-edge technological solutions that enable us to achieve high productivity and precision in manufacturing. We continuously invest in upgrading our equipment and implementing innovations to stay at the forefront of the industry.',
    production_5_:
      'Our team consists of highly qualified specialists with many years of experience in their fields. They work with passion and dedication, providing the highest level of service.',
    production_6_:
      'We understand that every product is unique. That is why we offer customized solutions tailored to meet the expectations of each project. From design to final production, we ensure the best possible result.',

    production_AZ: 'parks created by us',

    SINGING_:
      'A family recreation park where everyone can find something to do. The territory has organized family-type leisure and recreation areas, various flower installations and photo zones.',
    TROLDOMY_:
      'A new, unique world-class park featuring original design content and a true storyline. The main characters are incredibly charming and vibrant Troldomy creatures that move and interact with visitors.',
    LIGHT_AND_DREAMS_:
      'This unique park of illuminations and large-scale light installations is designed to create a truly themed space with fairytale characters, unforgettable locations, and vibrant photo zones.',
    GIANTS_WORLD_:
      'A themed park with figures ranging from 3 to 5 meters in height. The main characters are good and evil giants from the legend of the Valley of Mists, who come to life through animatronics and interact with visitors using voices of famous Ukrainians.',
    MAGIC_GARDEN_:
      'The "Magical Garden" project is a theme park with fairy tale characters, large-scale flower installations and bright photo zones where every visitor can feel like a part of the story.',
    FANTASTIC_PARK_:
      "This fantastic project is getting ready to meet you, but you'll have to wait a little!\nFollow the news of Universal Park, we will inform you about the day of our joint trip!..",

    FANTASTIC_PARK_1:
      'FANTASTIC PARK is the first theme amusement park in Ukraine, which brings together fantastic characters, large-scale installations, fairy-tale illuminations and unique interactive zones for adults and children!',
    FANTASTIC_PARK_2:
      'You will not only be able to admire the compositions and take photos - but also interact with them. In FANTASTIC PARK you will become an integral part of each location!',
    FANTASTIC_PARK_3:
      "This fantastic project is getting ready to meet you, but you'll have to wait a little!",
    FANTASTIC_PARK_4:
      'Follow the news of Universal Park, we will inform you about the day of our joint trip!..',
  },
}

export default createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'uk',
  fallbackLocale: 'uk',
  messages,
})
