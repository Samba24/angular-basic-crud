export default class Random {
    private id : number;
    private description : string;

    constructor(description, id ?){
        if(id){this.id = id;}
        this.description = description;
    }
}
