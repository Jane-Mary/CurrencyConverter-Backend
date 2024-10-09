class currencyApiService {

    apiKey
    baseUrl
    paths = {
        currency: '/v3/currencies',
        rates: '/v3/latest'
    }

    constructor() {
        this.baseUrl = process.env.CURRENCY_BASE_URL;
        this.apiKey = process.env.CURRENCY_API_KEY;
    }

    getOptions(method = 'GET') {
        return {
            method,
            headers: {
                'apikey': this.apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    }

    getUrl(path) {
        return this.baseUrl + this.paths[path]
    }

    async getSupportedCurrencies() {

        try {
            const request = await fetch(this.getUrl('currency'), this.getOptions())
            console.log(this.getUrl(),this.getOptions());
            if (request.status === 200) {
                const response = await request.json();
                console.log(response);
                return { error: false, data: response }
            }
            return { error: true, data: request.status }
        } catch (error) {
            console.log(error);
            return { error: true, data: error.message }
        }
    }

    async getRate(from_currency, to_currency) {

        try {
            const url = this.getUrl('rate') + '?base_currency=' + from_currency + '&currencies' + to_currency
            const request = await fetch(this.getUrl('currency'), this.getOptions())
            console.log(this.getUrl(),this.getOptions());
            if (request.status === 200) {
                const response = await request.json();
                console.log(response);
                return { error: false, data: response }
            }
            return { error: true, data: request.status }
        } catch (error) {
            console.log(error);
            return { error: true, data: error.message }
        }
    }

}

module.exports = new currencyApiService()