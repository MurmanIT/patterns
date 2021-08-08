/**
 * Реализация задаёт общий интерфейс для всех реализаций. Все
 * методы, которые здесь описаны, будут доступны из класса
 * абстракции и его подклассов.
 * Интерфейсы абстракции и реализации могут как совпадать, так
 * или быть совершенно разными. Но обычно, в реализации живут
 * базовые операции, на которых строятся сложные операции
 * абстракции
 */
export interface Implementor {
    callee(s: any): void;
}
/**
 * Абстракция содержит управляющую логику. Код абстракции
 * делегирует реальную работу связанному объекту реализации.
 */
export class Abstraction {
    implementor: Implementor;
    constructor(imp: Implementor) {
        this.implementor = imp;
    }

    public callIt(s: string): void {
        throw new Error("This is method is abstract");
    }
}
/**
 *  Конкретные Реализации содержат платформо-зависимый код.
 */
export class ConcreteImplementorA implements Implementor {
    public callee(s: any): void {
        console.log("`callee` of ConcreteImplemantorA is being called");
        console.log(s);
    }
}

export class ConcreteImplementorB implements Implementor {
    public callee(s: any): void {
        console.log("`callee` B");
        console.log(s);
    }
}
/**
 * Расширенные Абстракции содержат различные вариации
 * управляющей логики. Как и родитель, работает с реализациями
 * только через общий интерфейс реализации.
 */
export class RefinedAbstractionA extends Abstraction {
    constructor(imp: Implementor) {
        super(imp);
    } 

    public callIt(s: String): void {
        console.log("This is RefinedAbstractionA");
        this.implementor.callee(s);
    }
}

export class RefinedAbstractionB extends Abstraction {
    constructor(imp: Implementor) {
        super(imp);
    }

    public callIt(s: String): void {
        console.log("This is RefinedAbstractionB");
        this.implementor.callee(s);
    }
}

/**
 * Клиент
 */
export function show(): void {
    const abstractionA: Abstraction = new RefinedAbstractionA(new ConcreteImplementorA());
    const abstractionB: Abstraction = new RefinedAbstractionB(new ConcreteImplementorB());  

    abstractionA.callIt("abstractionA");
    abstractionB.callIt("abstractionB");
}

show();