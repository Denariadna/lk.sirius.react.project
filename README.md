# Название: Корпоративная образовательная платформа
### Описание:
ГазОбучение – это корпоративная образовательная платформа, созданная специально для сотрудников компании Газпром. Она предоставляет возможности для прохождения курсов, участия в вебинарах, получения сертификаций, а также проведения внутренних мероприятий и онлайн-конференций.
Платформа ориентирована на профессиональный рост сотрудников и повышение их квалификации. Ее главная цель – сделать обучение современным, интерактивным и доступным, объединяя сотрудников со всех филиалов компании.

### Уникальные особенности
1. **Интеграция с корпоративной системой**
- Платформа интегрируется с внутренними учетными системами Газпрома. Это позволяет каждому сотруднику войти в систему под своим корпоративным аккаунтом.
2. **Геймификация обучения**
- Сотрудники получают баллы за прохождение курсов и участие в вебинарах. Лучшие из них отмечаются в рейтинге сотрудников, что стимулирует вовлеченность. Можно даже делать месячные призы для лучших. Можно и для не самых :)
3. **Виртуальные классы и трансляции**
- Возможность проведения онлайн-занятий в реальном времени. Преподаватели могут использовать функции:
  - Виртуальная доска.
  - Разделение участников на группы.
  - Интерактивные опросы в процессе вебинара.
4. **Адаптация контента**
- Курсы автоматически адаптируются к роли сотрудника: от линейного персонала до топ-менеджмента.
5. **Аналитика и отчеты**
- Руководители подразделений получают доступ к аналитике по обучению сотрудников:
   - Прогресс в прохождении курсов.
   - Рекомендации на основе слабых зон в обучении команды.
   - Обучение становится доступным в любое время благодаря мобильному приложению.


### Функционал платформы
1. **Раздел курсов**
- Курсы разделены на категории:
  - Обязательные курсы (требуются для выполнения профессиональных обязанностей).
  - Курсы для карьерного роста (менеджмент, управление проектами, лидерство).
  - Общие курсы (например, основы безопасного поведения на объектах Газпрома).
2. Онлайн-вебинары
- Прямая трансляция с возможностью:
  - Задавать вопросы в чате.
  - Выполнять задания во время вебинара.
  - Получать сертификаты по завершении.
  - Личный кабинет сотрудника
3. Отображение прогресса обучения.
- История завершенных курсов и полученных сертификатов.
- Рекомендации по обучению на основе анализа навыков
4. Календарь мероприятий
- Запланированные вебинары и курсы доступны в общем календаре.
5. Корпоративные мероприятия
   - Возможность проведения онлайн-собраний, конференций и тимбилдинговых мероприятий.
### Структура проекта
lk.sirius.react.project/
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── fonts
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── components
    │   ├── app
    │   │   ├── App.css
    │   │   └── App.js
    │   ├── card_main
    │   │   ├── card_main.css
    │   │   └── card_main.jsx
    │   ├── card_services
    │   │   ├── card.css
    │   │   └── card.jsx
    │   ├── footer
    │   │   └── footer.jsx
    │   └── header
    │       └── header.jsx
    ├── const.js
    ├── index.css
    ├── index.js
    ├── layout
    │   └── main-layouts
    │       └── MainLayout.jsx
    ├── logo.svg
    ├── __mocks__
    │   └── fake_info
    │       └── FakeInfo.js
    ├── pages
    │   ├── auth
    │   │   ├── Auth.css
    │   │   └── Auth.jsx
    │   ├── main-page
    │   │   └── MainPage.jsx
    │   ├── service-detail-page
    │   │   ├── ServiceDetailPage.css
    │   │   └── ServiceDetailPage.jsx
    │   └── service-page
    │       └── ServicePade.jsx
    ├── reportWebVitals.js
    ├── setupTests.js
    └── store

### Концепция разработки
- Компоненты разделены по функциям (например, Dashboard, WebinarPage).
- Каждый компонент независим, что упрощает тестирование и добавление нового функционала.
- Платформа оптимизирована для работы как на ПК, так и на мобильных устройствах.
- Все данные шифруются и хранятся на корпоративных серверах.

### Именование коммитов
- feat: предоставляет новую функцию или улучшение
- fix: исправляет ошибки
- docs: вносит исправления в документацию
- chore: изменяет инструменты
- test: добавляет или модифицирует тесты