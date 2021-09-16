export const categories = ['business', 'science', 'technology', 'sports', 'health', 'entertainment']


export const toDate = publishedAt => {
    return Date(publishedAt).slice(4, 10) + ', ' + Date(publishedAt).slice(10, 15)
}