import { ParameterSource } from '../parameter/parameter-source.model';
import { Parameter } from '../parameter/parameter.model';

export abstract class InverterParameterSource implements ParameterSource {

    public getParameters(): Parameter[] {
        return new Array<Parameter>(this.currentPower);
    }

    // Currently generated Power in Watts
    protected currentPower: Parameter;

    // Total energy generated today
    protected dayEnergy: Parameter;

    constructor() {
        this.currentPower = new Parameter();
        this.currentPower.name = "Power";
        this.currentPower.unit = "W";

        this.dayEnergy = new Parameter();
        this.dayEnergy.name = "Daily Energy";
        this.dayEnergy.unit = "Wh";
    }
}
