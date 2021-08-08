import { Plane } from "./plane";

export class AirbusPlane implements Plane {
    
    private _name: string;

    constructor() {
        this._name = 'Airbus';
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