export const API_URL_IMAGES = {
    fox:{
        url:'https://randomfox.ca/floof/',
        src: 'image'
    },
    dog: {
        url:'https://random.dog/woof.json',
        src: 'url'
    }
}

export const API_URL_QUOTES = 'https://cat-fact.herokuapp.com'

export function RANDOM_QUOTE(type) {
    return {
        url: API_URL_QUOTES + `/facts/random?animal_type=${type}&amount=1`,
        options : {
            method: 'GET', 
            headers : {
                'Content-Type': 'application/json'
            }
        }
    }
}

export function RANDOM_IMAGE(type) {
    return {
        url:API_URL_IMAGES[type].url,
        src:API_URL_IMAGES[type].src,
        options : {
            method: 'GET', 
            headers : {
                'Content-Type': 'application/json'
            }
        }
    }
}
