
export default class User{
    
    name = '';
    lastname = '';
    age = '';

    constructor(name,lastname,age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }


    getName(){

        return this.name;
    }

    getLastname(){

        return this.lastname;
    }

    getAge(){

        return this.age;
    }


}