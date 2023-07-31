import { ParameterSource } from "../parameter/parameter-source.model";
import { Parameter } from "../parameter/parameter.model";

export abstract class UvSource implements ParameterSource {
    
    protected uvIndex: Parameter;

    constructor() {
        
        this.uvIndex = new Parameter();
        this.uvIndex.name = "UV Index";
        this.uvIndex.unit = "";
        this.uvIndex.minValue = 0;
        this.uvIndex.maxValue = 15;

        // TODO - colour
    }

    getParameters(): Parameter[] {
        return new Array<Parameter>(this.uvIndex);
    }
}