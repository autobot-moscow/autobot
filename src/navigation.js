import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Главная',
      href: getPermalink('/'),
    },
    // {
    //   text: 'Цены',
    //   href: getPermalink('/pricing'),
    // },
    {
      text: 'Блог',
      href: getPermalink('/blog'),
    },

    // {
    //   text: 'Услуги',
    //   href: getPermalink('/services'),
    // },
    // {
    //   text: 'Контакты',
    //   href: getPermalink('/contact'),
    // },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Блог',
      links: [
        // { text: 'Цены', href: '/pricing' },
        { text: 'Статьи', href: '/blog' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Telegramm', icon: 'tabler:brand-telegram', href: 'https://t.me/autobot_moscow' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://t.me/autobot_moscow' },
    { ariaLabel: 'Yandex', icon: 'tabler:brand-yandex', href: 'https://t.me/autobot_moscow' },
    { ariaLabel: 'Mail', icon: 'tabler:brand-vk', href: 'https://t.me/autobot_moscow' },
  ],
  footNote: `
    <a class="text-blue-600 underline dark:text-muted" href="https://autobot.moscow/"> «Автобот» Доставка авто</a> 	&reg; Все права защищены.
  `,
};
