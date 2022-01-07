const TODOS_STOGRAGE_KEY = 'TODOS'

export default {
    get(){
        return  JSON.parse(localStorage.getItem(TODOS_STOGRAGE_KEY)) || []
    },
    set(todos){
        localStorage.setItem(TODOS_STOGRAGE_KEY, JSON.stringify(todos))
    }
}