import { AbstractFactory, AbstractProductA, AbstractProductB } from "./interface";
import { ProductA1, ProductA2, ProductB1, ProductB2 } from "./prodcut";

export class ConcreteFactory1 implements AbstractFactory {
    createProductA(param?: any): AbstractProductA {
        return new ProductA1();
    }

    createProductB(): AbstractProductB {
        return new ProductB1();
    }
}

export class ConcreteFactory2 implements AbstractFactory {
    createProductA(param?: any): AbstractProductA {
        return new ProductA2();
    }

    createProductB(): AbstractProductB {
        return new ProductB2();
    }
}