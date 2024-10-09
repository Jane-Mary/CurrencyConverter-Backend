const currency = require('../models/currency')
const currncyApiService = require('./api/currencyapi.service')

class currencyService {

    format(data) {
        const result = []
        for ( const key in data) {
            if (data.hasOwnProperty(key)){
                const currency = data[key];
                result.push({ name:currency.name, short_code: currency.code })
            }
        }
        return result
    }

    async currencyapi () {
        const currencies = await currncyApiService.getSupportedCurrencies();
        if(currencies.error) {
            return  { error:true, data: currencies.data }
        }
        console.log(currencies.error);
        const data = this.format(currencies.data.data)
       const countCurrenciesInCollection =  await currency.countDocuments()
       if (countCurrenciesInCollection != 0) {
        await currency.deleteMany({})
       }
       await currency.create(data)
        return ({ error:false, data: data})
    }
}

module.exports = new currencyService()