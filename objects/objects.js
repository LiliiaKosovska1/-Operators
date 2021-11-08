const Dog = {
    name : "Alice",
    friendly : true,
    age : 5,
};

const Cat = {
    name : "Murka",
    friendly : false,
    age : 2,
};

const likeCats = 'likeCats';
Dog[likeCats] = false;

if (Dog.name) {
    console.log("HI! I'm ", Dog.name);
}
 
if (Dog.age > Cat.age && Cat.friendly == true || Dog.likeCats !== true){
    console.log("I can eat you, ", Cat.name);
}

const newField = 'owner';
Dog[newField] = 'Liliia';

if (!Cat.hasOwnProperty('owner')){
    Cat[newField] = "Anrdiy";
}

console.log(Cat);
console.log(Dog);