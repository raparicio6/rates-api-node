const { healthCheck } = require('./controllers/healthCheck');
const { getExchangeRates, createExchangeRate, getCurrencies } = require('./controllers/exchangeRates');
const { GET, POST } = require('./constants');

module.exports = [
  {
    method: [GET],
    path: '/health',
    handler: healthCheck
  },
  {
    method: [GET],
    path: '/exchange_rates',
    handler: getExchangeRates
  },
  {
    method: [POST],
    path: '/exchange_rates',
    handler: createExchangeRate
  },
  {
    method: [GET],
    path: '/currencies',
    handler: getCurrencies
  }
];
