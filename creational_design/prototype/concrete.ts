import { Prototype } from "./prototype";

export class Concrete1 implements Prototype {

    clone(): Prototype {
        return new Concrete1();
    }
    toString(): string {
        return 'This is Concrete1';
    }
}

export class Concrete2 implements Prototype {
    clone(): Prototype {
        return new Concrete2();
    }
    toString(): string {
        return 'This is Concrete2';
    }
}

export class Concrete3 implements Prototype {
    clone(): Prototype {
        return new Concrete3();
    }
    toString(): string {
        return 'This is Concrete3';
    }
}