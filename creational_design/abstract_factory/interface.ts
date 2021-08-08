export interface AbstractProductA {
    methodA(): string;
}

export interface AbstractProductB {
    methodB(): number;
}

export interface AbstractFactory {
    createProductA(param: any): AbstractProductA;
    createProductB(): AbstractProductB;
}