import { Plane } from "./plane";

export class BoeingPlane implements Plane {
    private _name: string;

    constructor() {
        this._name = 'Boeing';
    }

    get name() {
        return this._name;
    }

    fly(): string {
        return `${this.name} is Landing`;
    }
    land(): string {
        return `${this.name} is Flying ***`;
    }
}