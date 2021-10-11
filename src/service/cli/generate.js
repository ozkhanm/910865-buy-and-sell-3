'use strict';

const chalk = require(`chalk`);
const fs = require(`fs`).promises;

const { getRandomInt, shuffle } = require(`../../utils`);

const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const {
  MAX_OFFER_COUNT,
  FILE_NAME,
  DEFAULT_COUNT,
  OfferType,
  DescriptionRange,
  PictureNumberRange,
  SumRange,
  ExitCode,
} = require(`../../constants`);

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf-8`);

    return content.trim().split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));

    return [];
  }
};

const getRandomPictureName = (id) => {
  if (id < 10) {
    return `item0${id}.jpg`;
  } else {
    return `item${id}.jpg`;
  }
};

const getRandomCategoryList = (num, categories) => {
  return shuffle(categories).slice(0, num);
};

const generateOffers = (offersNumber, titles, categories, sentences) => {
  if (offersNumber > MAX_OFFER_COUNT) {
    console.error(chalk.red(`Не больше 1000 объявлений`));

    process.exit(ExitCode.success);
  }

  return Array(offersNumber).fill({}).map(() => {
    return {
      type: OfferType[Object.keys(OfferType)[getRandomInt(0, Object.keys(OfferType).length - 1)]],
      title: titles[getRandomInt(0, titles.length - 1)],
      description: shuffle(sentences).slice(DescriptionRange.MIN,DescriptionRange.MAX).join(` `),
      sum: getRandomInt(SumRange.MIN, SumRange.MAX),
      picture: getRandomPictureName(getRandomInt(PictureNumberRange.MIN, PictureNumberRange.MAX)),
      category: getRandomCategoryList(getRandomInt(1, categories.length - 1), categories)
    };
  });
};

module.exports = {
  name: `--generate`,
  async run(args) {
    const sentences = await readContent(FILE_SENTENCES_PATH);
    const titles = await readContent(FILE_TITLES_PATH);
    const categories = await readContent(FILE_CATEGORIES_PATH);

    const [count] = args;
    const offerCount = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const data = JSON.stringify(generateOffers(offerCount, titles, categories, sentences));


    try {
      await fs.writeFile(FILE_NAME, data);
      console.error(chalk.red(`Ошибка`));
      process.exit(ExitCode.error);
    } catch (err) {
      console.log(chalk.green(`Файл создан`));
      process.exit(ExitCode.success);
    }
  }
};
