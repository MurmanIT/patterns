// Общий интерфейс
export interface Component {
    operation(): void
    draw(): void
}
// Компонент
export class Leaf implements Component {
    private s: String;
    constructor(s: String) {
        this.s = s;
    }

    public operation(): void {
        console.log('operation of Leaf');
    }

    public draw(): void {
        console.log('draw of Lead');
    }
}
// Компоновщик
export class Composite implements Component {
    private list: Component[];
    private s: String;

    constructor(s: String) {
        this.list = [];
        this.s = s;
    }
    
    public operation(): void {
        console.log('Operation of ', this.s);
        this.list.forEach((component) => {
            component.operation();
        })        
    }

    public add(c: Component): void {
        this.list.push(c);
    }

    public remove(i: number): void {
        if (this.list.length <= i) {
            throw new Error("index out of bound!");
        }
        this.list.slice(i, 1);
    }

    public draw(): void {
        console.log('Draw of ', this.s);
        this.list.forEach((component) => {
            component.operation();
        })
    }
}

const leaf1 = new Leaf("1");
const leaf2 = new Leaf("2");
const leaf3 = new Leaf("3");

const composite1 = new Composite("Comp1");
const composite2 = new Composite("Comp2");