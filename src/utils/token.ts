export const SET_TOKEN = (token: string) => {
    localStorage.setItem('TOKEN', token)
}
export const GET_TOKEN = () => {
    return localStorage.getItem('TOKEN')
}
export const CLEAR_TOKEN = () => {
    return localStorage.removeItem('TOKEN')
}