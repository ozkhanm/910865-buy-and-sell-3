'use strict';

const fs = require(`fs`);
const { getRandomInt, shuffle } = require(`../../utils`);

const {
  CATEGORIES,
  MAX_OFFER_COUNT,
  TITLES,
  AD_DESCRIPTIONS,
  FILE_NAME,
  DEFAULT_COUNT,
  OfferType,
  DescriptionRange,
  PictureNumberRange,
  SumRange,
  ExitCode,
} = require(`../../constants`);

const getRandomPictureName = (id) => {
  if (id < 10) {
    return `item0${id}.jpg`;
  } else {
    return `item${id}.jpg`;
  }
};

const getRandomCategoryList = (num) => {
  return shuffle(CATEGORIES).slice(0, num);
};

const generateOffers = (offersNumber) => {
  if (offersNumber > MAX_OFFER_COUNT) {
    console.error(`Не больше 1000 объявлений`);

    process.exit(ExitCode.success);
  }

  return Array(offersNumber).fill({}).map(() => {
    return {
      type: OfferType[Object.keys(OfferType)[getRandomInt(0, Object.keys(OfferType).length - 1)]],
      title: TITLES[getRandomInt(0, TITLES.length - 1)],
      description: shuffle(AD_DESCRIPTIONS).slice(DescriptionRange.MIN,DescriptionRange.MAX).join(` `),
      sum: getRandomInt(SumRange.MIN, SumRange.MAX),
      picture: getRandomPictureName(getRandomInt(PictureNumberRange.MIN, PictureNumberRange.MAX)),
      category: getRandomCategoryList(getRandomInt(1, CATEGORIES.length - 1))
    };
  });
};

module.exports = {
  name: `--generate`,
  run(args) {
    const [count] = args;
    const offerCount = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const data = JSON.stringify(generateOffers(offerCount));

    fs.writeFile(FILE_NAME, data, (err) => {
      if (err) {
        process.exit(ExitCode.error);
      }

      process.exit(ExitCode.success);
    });
  }
};
