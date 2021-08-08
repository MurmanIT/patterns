import { Concrete1, Concrete2, Concrete3 } from "./concrete";
import { Prototype } from "./prototype";

export class Builder {
    private prototypeMap: { [s: string]: Prototype; } = {};

    constructor() {
        this.prototypeMap['c1'] = new Concrete1();
        this.prototypeMap['c3'] = new Concrete2();
        this.prototypeMap['c3'] = new Concrete3();
    }

    createOne(s: string): Prototype {
        console.log(s);
        return this.prototypeMap[s].clone();
    }
}