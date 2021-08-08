import { AbstractFactory, AbstractProductA, AbstractProductB } from "./interface";

export class Tester {
    private abstractProductA: AbstractProductA;
    private abstractProductB: AbstractProductB;

    constructor(factory: AbstractFactory) {
        this.abstractProductA = factory.createProductA();
        this.abstractProductB = factory.createProductB();
    }

    public test(): void {
        console.log(this.abstractProductA.methodA());
        console.log(this.abstractProductB.methodB());
    }
}
/**
 * import {AbstractFactory, ConcreteFactory1, Tester, ConcreteFactory2 } from './abstractFactory'
export function show() {
 // Abstract factory1
 var factory1: AbstractFactory = new ConcreteFactory1();
 var tester1: Tester = new Tester(factory1);
 tester1.test();

 // Abstract factory2
 var factory2: AbstractFactory = new ConcreteFactory2();
 var tester2: Tester = new Tester(factory2);
 tester2.test();
}

show();
 */