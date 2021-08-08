export class Adaptee {
    public metohod(): void {
        console.log("`method` of Adaptee is being call");
    }
}

export interface Target {
    call(): void;
}


export class Adapter implements Target {
    public call(): void {
        console.log('Adapter`s call method');
        const apatee: Adaptee = new Adaptee();
        apatee.metohod();
    }
}