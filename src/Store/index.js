import { atom, selector } from "recoil";

export const dataUser = selector({
    key: 'get-data-user',
    get: async () => {
        let user = null
        try {
            user = fetch('https://jsonplaceholder.typicode.com/users/1')
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