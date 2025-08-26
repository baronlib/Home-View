import { ParameterSource } from '../parameter/parameter-source.model';
import { Parameter } from '../parameter/parameter.model';

export abstract class ForecastSource implements ParameterSource {

    protected minTemp: Parameter;
    protected maxTemp: Parameter;

    constructor() {

        this.minTemp = new Parameter();
        this.minTemp.name = 'Min. Temp.';
        this.minTemp.unit = "°C";
        this.minTemp.minValue = 0;
        this.minTemp.maxValue = 50;

        this.maxTemp = new Parameter();
        this.maxTemp.name = 'Max. Temp.';
        this.maxTemp.unit = "°C";
        this.maxTemp.minValue = 0;
        this.maxTemp.maxValue = 50;
    }

    getParameters(): Parameter[] {
        return new Array<Parameter>(this.minTemp, this.maxTemp);
    }
}