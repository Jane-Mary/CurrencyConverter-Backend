const currencyService = require('../services/currency.service');

const find = async (request,response,next) => {}

const getFromCurrencyapi = async (request,response,next) => {
    const currencies = await currencyService.currencyapi();
    if(currencies.error) {
        return response.status(500).json({ error:true, data:currencies.data})
    }

    return response.status(200).json({ error:false, data:currencies.data})
}

module.exports = { find, getFromCurrencyapi };