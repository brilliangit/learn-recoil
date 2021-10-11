import { atom, selector } from "recoil";

export const dataUser = selector({
    key: 'get-data-user',
    get: async () => {
        let user = null
        try {
            user = await fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(resp => resp.json())
                .then(resp => resp)
        } catch (error) {
            user = {
                message: error.message
            }
        }
        return user
    }
})

export const theme = atom({
    key: 'switch-theme',
    default: 'dark'
})
// http://www.omdbapi.com?apikey=2681e8d8&i=tt3896198&s=superman

export const filter = atom({
    key:'filter-film',
    default: 'batman'
})

export const listFilm = selector({
    key:'list-film',
    get: async({get}) => {
        const filterParam = get(filter)
        let film = [];
        
        try {
            film = await fetch(`http://www.omdbapi.com?apikey=2681e8d8&i=tt3896198&s=${filterParam}`)
            .then(res => res.json())
            .then(resp => resp)
        } catch (error) {
            
        }
        return film
    }
})