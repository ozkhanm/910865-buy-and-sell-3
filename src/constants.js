'use strict';

const DEFAULT_COMMAND = `--help`;

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

module.exports = {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  FILE_NAME,
  DEFAULT_COUNT,
  MAX_OFFER_COUNT,
  OfferType,
  SumRange,
  PictureNumberRange,
  DescriptionRange,
  ExitCode,
};
