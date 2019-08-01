export default class Random {
    id : number;
    description : string;

    constructor(description, id ?){
        if(id){this.id = id;}
        this.description = description;
    }
}
