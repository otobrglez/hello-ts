import _ = require("lodash");

interface Member {
  firstName:any
}

class Admin implements Member {
  public firstName:string;

  constructor(firstName:string,
              public lastName:string) {
    this.firstName = firstName;
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

  constructor() {
    this.elements = [];
  }

  add(element:T) {
    this.elements.push(element);
  }

  all():Array<T> {
    return this.elements;
  }
}

let me = new Admin("Oto", "Brglez");
let miha = new Admin("Miha", "Rekar");
let miha_other = new Guest("Miha M.");

var members:List<Member> = new List<Member>();
members.add(me);
members.add(miha);
members.add(miha_other);
members.add(null);


var firstNames = members.all().map((m) => m.firstName);

console.log(_.maxBy(members.all(), 'firstName'));
