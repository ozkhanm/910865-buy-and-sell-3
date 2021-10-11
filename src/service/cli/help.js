'use strict';

const chalk = require(`chalk`);

module.exports = {
  name: `--help`,
  run() {
    const welcomeText = `Программа запускает http-сервер и формирует файл с данными для API.

    Гайд:
    service.js <command>

    Команды:
    --version:            выводит номер версии
    --help:               печатает этот текст
    --generate <count>    формирует файл mocks.json`;

    console.info(chalk.gray(welcomeText));
  }
};
