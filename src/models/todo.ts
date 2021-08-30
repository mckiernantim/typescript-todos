export class Todo{
    title:string;
    text:string;
    constructor(title:string, text:string){
        this.title = title;
        this.text= text;
    }
    displayContent() {
        alert(`this todo is :${this.title} :  ${this.text}`)
    }
}