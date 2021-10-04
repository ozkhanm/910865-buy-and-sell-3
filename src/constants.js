'use strict';

const DEFAULT_COMMAND = `--help`;

const USER_ARGV_INDEX = 2;

const FILE_NAME = `mocks.json`;

const DEFAULT_COUNT = 1;

const MAX_OFFER_COUNT = 1000;

const TITLES = [
  `Продам книги Стивена Кинга`,
  `Продам новую приставку Sony Playstation 5`,
  `Продам отличную подборку фильмов на VHS`,
  `Куплю антиквариат`,
  `Куплю породистого кота`,
  `Продам коллекцию журналов «Огонёк»`,
  `Отдам в хорошие руки подшивку «Мурзилка»`,
  `Продам советскую посуду. Почти не разбита`,
  `Куплю детские санки`
];

const AD_DESCRIPTIONS = [
  `Товар в отличном состоянии.`,
  `Пользовались бережно и только по большим праздникам.`,
  `Продаю с болью в сердце...`,
  `Бонусом отдам все аксессуары.`,
  `Даю недельную гарантию.`,
  `Если товар не понравится — верну всё до последней копейки.`,
  `Это настоящая находка для коллекционера!`,
  `Если найдёте дешевле — сброшу цену.`,
  `Таких предложений больше нет!`,
  `Две страницы заляпаны свежим кофе.`,
  `При покупке с меня бесплатная доставка в черте города.`,
  `Кажется, что это хрупкая вещь.`,
  `Мой дед не мог её сломать.`,
  `Кому нужен этот новый телефон, если тут такое...`,
  `Не пытайтесь торговаться. Цену вещам я знаю.`
];

const CATEGORIES = [
  `Книги`,
  `Разное`,
  `Посуда`,
  `Игры`,
  `Животные`,
  `Журналы`,
];

const OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};

const SumRange = {
  MIN: 1000,
  MAX: 100000
};

const PictureNumberRange = {
  MIN: 1,
  MAX: 16
};

const DescriptionRange = {
  MIN: 1,
  MAX: 5
};

const ExitCode = {
  success: 0,
  error: 1,
};

module.exports = {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  FILE_NAME,
  DEFAULT_COUNT,
  MAX_OFFER_COUNT,
  TITLES,
  AD_DESCRIPTIONS,
  CATEGORIES,
  OfferType,
  SumRange,
  PictureNumberRange,
  DescriptionRange,
  ExitCode,
};
