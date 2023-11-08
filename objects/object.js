const person = {
    name: "Asiya",
    age: 21,
    fun: function(){ 
        return "Pursuing B.Tech In CS"
    }
};
console.log(person,person.fun());

//Accessing Method without Paranthesis
const person1 = {
    name: "Asiya",
    age: 21,
    fun: function(){
        return "Pursuing B.Tech In CS"
    }
};

console.log(person,person.fun);  //It will return the function definition

print = person.fun();
console.log(print);

const me = {
    firstName: "Syed",
    lastName: "Asiya",
    car: "Mercedes Benz S-class",
    letsGo: function(){
        return "hello " +
        this.firstName +
        this.lastName + 
        " owns " + 
        this.car;
    }
    
}
console.log(me.letsGo());