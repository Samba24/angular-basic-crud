export default class Random {
    private id : number;
    private description : string;

    constructor(description, id ?){
        if(id){this.id = id;}
        this.description = description;
    }

    set setId(id){
        this.id = id;
    }

    set setDescription(description){
        this.description = description
    }

    get getId(){
        return this.id
    }

    get getDescription(){
        return this.description;
    }
}
