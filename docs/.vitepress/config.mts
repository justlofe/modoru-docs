import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MODORU",
  description: "Modoru Wiki",
  lang: 'ru-RU',
  lastUpdated: true,

  markdown: {
    container: {
      tipLabel: "ПРИМЕЧАНИЕ",
      warningLabel: "ПРЕДУПРЕЖДЕНИЕ",
      dangerLabel: "ВНИМАНИЕ",
      infoLabel: "ИНФО",
      detailsLabel: "Подробная информация"
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Домой', link: '/' },
      { text: 'Введение', link: '/main/play-guide' }
    ],

    sidebar: [
      {
        items: [
          { text: "Введение", link: '/introduction'}
        ]
      },
      {
        text: "Основное",
        items: [
          { text: 'Правила', link: '/main/rules'},
          { text: 'Как попасть на сервер?', link: '/main/play-guide'},
          { text: 'Ники игроков', link: '/main/nicknames'},
          { text: 'Подписки', link: '/main/subscriptions'}
        ]
      },
      {
        text: 'Глобальные механики',
        items: [
          { text: 'Команды игроков', link: '/global/commands' },
          { text: 'Кастомные крафты', link: '/global/crafts' }
        ]
      },
      {
        text: "Кастомные механики",
        items: [
          { text: 'Чат', link: '/custom/chat'},
          { text: 'Напитки', link: '/custom/brewing'},
          { text: 'Изменения жителей', link: '/custom/villagers'},
          { text: 'Косметика', link: '/custom/cosmetics'}
        ]
      },
      {
        text: "Остальные механики",
        items: [
          { text: 'Остальные механики', link: '/misc/misc'},
        ]
      }
    ],


    outline: {
      label: "На этой странице"
    },

    // переводы
    lightModeSwitchTitle: "Переключиться на светлую тему",
    darkModeSwitchLabel: "Переключиться на тёмную тему",

    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница"
    },

    returnToTopLabel: "Наверх",

    sidebarMenuLabel: "Меню",

    // конфиги
    editLink: {
      pattern: 'https://github.com/justlofe/modoru-docs/edit/docs/:path',
      text: 'Редактировать страницу'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск'
          },
          modal: {
            displayDetails: 'Отобразить подробный список',
            resetButtonTitle: 'Сбросить поиск',
            backButtonTitle: 'Закрыть поиск',
            noResultsText: 'Нет результатов по запросу',
            footer: {
              selectText: 'выбрать',
              selectKeyAriaLabel: 'выбрать',
              navigateText: 'перейти',
              navigateUpKeyAriaLabel: 'стрелка вверх',
              navigateDownKeyAriaLabel: 'стрелка вниз',
              closeText: 'закрыть',
              closeKeyAriaLabel: 'esc'
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.modoru.space' },
      { icon: 'telegram', link: 'https://t.me/modoruru' },
      { icon: 'github', link: 'https://github.com/justlofe/modoru-docs' },
      { icon: 'vk', link: 'https://vk.com/modorumdr' }
    ]
  }
})
