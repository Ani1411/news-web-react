

export const categories = ['business', 'science', 'technology', 'sports', 'health', 'entertainment']

export const NEWS_DATA_API_KEY = 'pub_116372cfc513aa03e2c5a75098d27b49d736' // https://newsdata.io/
export const NEWS_API_KEY = '81b8c2fc259c4192b5ffbda9bb1ce2ca' // https://newsapi.org/


export const toDate = publishedAt => {
    return Date(publishedAt).slice(4, 10) + ', ' + Date(publishedAt).slice(10, 15)
}


const BASE_API_URL = 'https://newsapi.org/v2/top-headlines?'
const home_page_size = '50'
const country = 'in'


export const NEWS_API_URL_HEAD = BASE_API_URL + `apiKey=${NEWS_API_KEY}&country=${country}&pageSize=${home_page_size}`