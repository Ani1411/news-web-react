

export const categories = ['business', 'science', 'technology', 'sports', 'health', 'entertainment']

const NEWS_API_KEY = '81b8c2fc259c4192b5ffbda9bb1ce2ca'


export const toDate = publishedAt => {
    return Date(publishedAt).slice(4, 10) + ', ' + Date(publishedAt).slice(10, 15)
}


let  yourDate = new Date()
let date_now = yourDate.toISOString().split('T')[0]

const BASE_API_URL = 'https://newsapi.org/v2/'
const endpoint1 = 'everything?'
const endpoint2 = 'top-headlines?'
const sortBy = 'publishedAt'
const query = 'india'
const home_page_size = '50'
const lang = 'en'
const country = 'in'


// export const NEWS_API_URL_HEAD= BASE_API_URL + endpoint1 + `from=${date_now}&sortBy=${sortBy}&q=${query}&pageSize=${home_page_size}&language=${lang}&apiKey=${NEWS_API_KEY}`
export const NEWS_API_URL_HEAD = BASE_API_URL + endpoint2 + `apiKey=${NEWS_API_KEY}&country=${country}&pageSize=${home_page_size}`