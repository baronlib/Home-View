import { Subject } from 'rxjs';

export class Parameter {
    public name: string = '';
    public value: Subject<number> = new Subject<number>();
    public unit: string = '';
    public minValue: number = 0.0;
    public maxValue: number = 0.0;
}