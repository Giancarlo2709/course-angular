import { Person } from './08-clases';
/* export class Person {
    public name: string;
    private address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
} */

export class Person {
    constructor(
        public name: string,
        public lastName: string,
        private address: string = 'No Address'
    ) { }
}

// Aplicando Herencia
/* export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, 'New York');
    }

} */

// Aplicando composicion
export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName);
    }

}

const tony = new Person('Tony', 'Stark','New York');

const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman);