import {ItPerson} from "./it_person";
import _ = require("lodash");

console.log(new ItPerson("Janez", "Novak"));

interface Member {
  firstName:string;
  bornOn?:number;
}

class Admin implements Member {
  firstName:string;
  public bornOn:number;

  constructor(firstName:string,
              public lastName:string) {
    this.firstName = firstName
  }
}

class Guest implements Member {
  firstName:string;
  public bornOn:number;

  constructor(firstName:string) {
    this.firstName = firstName
  }
}

class List<T> {
  elements:Array<T>;

  constructor() {
    this.elements = []
  }

  add(element:T) {
    this.elements.push(element)
  }

  all():Array<T> {
    return this.elements;
  }

  oldest():T {
    return _.minBy(this.elements, 'bornOn')
  }
}


let me = new Admin('Oto', 'Brglez');
me.bornOn = 1987;

let miha = new Admin('Miha', 'Rekar');
miha.bornOn = 1988;

let miha1 = new Guest('Miha M.');
// miha1.bornOn = 1982;

let members:Array<Member> = [me, miha, miha1];

members.forEach((member) => console.log(member.firstName));


for (let m of members) {
  console.log(m.firstName)
}

let memberNames = members.map((member) => member.firstName);

console.log('----');

var numbers:List<Member> = new List<Member>();
numbers.add(me);
numbers.add(miha);
numbers.add(miha1);

console.log(numbers.all());
console.log(numbers.all().length);

console.log(members);

console.log(numbers.oldest().firstName);
