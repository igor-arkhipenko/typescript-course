class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string
//     readonly numbersOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

// ==========================================

class Animal {
    public color: string = 'black'
    protected voice: string = ''
    private go() {
        console.log('Go!')
    }

    constructor() {
        this.go()
    }
}

const animal = new Animal()
console.log(animal)

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('Meow')
console.log(cat)
// cat.voice    - недоступно напрямую для потомка класса Animal из-за protected.
//              - можно задать только методом из класса-потомка (setVoice)

// ======================================

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Render component')
    }

    info(): string {
        return 'This is info'
    }
}
