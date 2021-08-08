import { AbstractProductA, AbstractProductB } from "./interface";

export class ProductA1 implements AbstractProductA {
    methodA = () => {
        return 'This is method A';
    }
}

export class ProductB1 implements AbstractProductB {
    methodB = () => {
        return 1;
    }
}

export class ProductA2 implements AbstractProductA {
    methodA = () => {
        return 'This is method A2';
    }
}

export class ProductB2 implements AbstractProductB {
    methodB = () => {
        return 42;
    }
}