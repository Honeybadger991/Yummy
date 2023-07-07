
export const getPopular = async () => {
    return await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`)
    .then(res => res.json());
}

export const getFast = async () => {
    return await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&maxReadyTime=30&offset=${Math.floor(Math.random()*480)}&number=12`)
    .then(res => res.json());
}

export const getVegetarian = async () => {
    return await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=12`)
    .then(res => res.json());
}

export const getCuisine = async (type) => {
    return await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=${type}&number=20`).then(res => res.json());
}

export const getQuery = async (name) => {
    return await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=12`)
    .then(res => res.json());
}

export const getDetails = async (id) => {
    return await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json());
}

