import { Todo } from "./todo"

let dataBase:Todo[] = [
    
]
for (let i=0; i<10; i++){
    dataBase.push(new Todo(`${i} this is the title`, `this is the text for ${i}`))
}
export default dataBase