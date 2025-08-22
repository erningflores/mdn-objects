const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf(){
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

person.age = 45;
person["name"]["last"] = "Cratchit";
person["eyes"] = "hazel";
person.farewell = function(){
    console.log("Bye everybody!");
};
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

function logProperty(propertyName){
    console.log(person[propertyName]);
}

logProperty("name");

const item = {
    name: {
        category: "fruits",
        type: "apple",
    },
    dayStored: 1,
    tobeSold(){
        console.log(`${this.name.category}, an ${this.name.type} is ready to be sold today.`);
    },
    tobeThrown(){
        console.log(`${this.name.type} needs to be thrown.`);
    },
};

//this refers to the object on which the method is called for
console.log(person.introduceSelf());
console.log(item.tobeThrown());

function createPerson(name){
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function(){
        console.log(`Hi! I'm ${this.name}`);
    };
    return obj;
}

const alcohol = createPerson("Alcohol");
alcohol.introduceSelf();

const bear = createPerson("Bear");
bear.introduceSelf();

function Person(name){
    this.name = name;
    this.introduceSelf = function(){
        console.log(`Hi! I'm ${this.name}`);
    }
}

const flower = new Person("Flower");
flower.introduceSelf();

const myNotification = new Notification("Hello");
console.log(myNotification.title);