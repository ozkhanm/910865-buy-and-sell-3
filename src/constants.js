'use strict';

const DEFAULT_COMMAND = `--help`;

const DEFAULT_PORT = 3000;

const USER_ARGV_INDEX = 2;

const FILE_NAME = `mocks.json`;

const DEFAULT_COUNT = 1;

const MAX_OFFER_COUNT = 1000;

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

const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

const MAX_ELEMENT_COUNT_MESSAGE = `Не больше 1000 объявлений`;

const MocksGenerationStatus = {
  success: `Файл создан`,
  error: `Ошибка`,
};

module.exports = {
  DEFAULT_COMMAND,
  DEFAULT_PORT,
  USER_ARGV_INDEX,
  FILE_NAME,
  DEFAULT_COUNT,
  MAX_OFFER_COUNT,
  OfferType,
  SumRange,
  PictureNumberRange,
  DescriptionRange,
  ExitCode,
  HttpCode,
  MAX_ELEMENT_COUNT_MESSAGE,
  MocksGenerationStatus
};
