import * as planes from './plane/index';

export class PlaneFactory {
    static getInstance<T>(name: string, ...args: any[]): T {
        const instance = Object.create(planes[name].prototype);
        instance.constructor.apply(instance, args);
        return <T> instance;
    }
}