import _ = require("lodash");

interface Member {
  firstName:any
  bornOn?:number
}

class Admin implements Member {
  public bornOn:number;

  constructor(public firstName:string,
              public lastName:string,
              bornOn?:number) {
    if (bornOn) {
      this.bornOn = bornOn;
    }
  }
}

class Guest implements Member {
  public firstName:string;

  constructor(firstName:string) {
    this.firstName = firstName;
  }
}

class List<T> {
  elements:Array<T>;

  constructor(initialMembers?:Array<T>) {
    if (initialMembers) {
      this.elements = initialMembers;
    } else {
      this.elements = [];
    }
  }

  add(element:T) {
    this.elements.push(element);
  }

  all():Array<T> {
    return this.elements;
  }

  oldest():T {
    return _.minBy(this.elements, 'bornOn');
  }

  youngest():T {
    return _.maxBy(this.elements, 'bornOn');
  }
}

/*
 * Usage
 * */

let me = new Admin('Oto', 'Brglez', 1987);
let miha = new Admin('Miha', 'Rekar', 1988);
let marko = new Guest('Marko');
let arto = new Guest('Arto');

/* New List of Members */
let members:List<Member> = new List<Member>([me, miha, marko, arto]);

/* Get first names */
let firstNames = members.all().map((m) => m.firstName);
console.log('First names', firstNames);

/* Get all admins */
let admins = members.all().filter((m) => m instanceof Admin);
console.log('Admins', admins);

/* Get youngest member */
console.log('Youngest', members.youngest().firstName);

/* Fancy loops */
for (let m of members.all()) {
  console.log(m.firstName)
}
