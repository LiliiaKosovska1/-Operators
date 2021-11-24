class Animal {
    constructor(name) {
        this.name = name;

    }
    sound() {
        return ' '; 
    }
    canBite(){
        return console.log (false);
    }
    canJump(){
        return console.log(true);
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        return console.log('Meow!');
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        return console.log('Woof!');
    }
    canBite(){
        return console.log(true);
    }

}
class Mouse extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        return console.log('Pi-pi-pi!');
    }
}

class Elephant extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        return console.log('Fiiii!');
    }
    canBite(){
        return console.log(true);
    }
    canJump(){
        return console.log(false);
    }

}

const Tom = new Cat('Tom', 'red');
Tom.sound();
const Rex = new Dog('Rex');
Rex.sound();
Rex.canBite();
const Jerry = new Mouse('Jerry');
Jerry.sound();
const Juliy = new Elephant('Juliy');
Juliy.sound();
Juliy.canJump();

