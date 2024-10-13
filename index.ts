/* Заданиу 1*/

class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species
    }

    sound(): void {
        console.log("The animal makes a sound");
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, species: string, breed: string) {
        super(name, species);
        this.breed = breed;
    }

    sound(): void {
        console.log("The dog barks");
    }
}

const myDog = new Dog("Hmurii", "Paddy", "Dvorterer");
myDog.sound();


/**Задание 2*/

class Library {
    static totalBooks: number = 0;

    addBook(): void {
        Library.totalBooks += 3;
    }
}

const library1 = new Library();
const library2 = new Library();
const library3 = new Library();

library1.addBook();
library2.addBook();
library3.addBook();

console.log(Library.totalBooks);


/**Задание 3*/

class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}

class Motorcycle extends Vehicle {
    type: string;

    constructor(make: string, model: string, type: string) {
        super(make, model);
        this.type = type;
    }
}

const myMotorcycle = new Motorcycle("Yamahoo", "Jog", "Scooter");
console.log(myMotorcycle);
console.log(`Ответ на задание 3: ${JSON.stringify(myMotorcycle, null, 2)}`);