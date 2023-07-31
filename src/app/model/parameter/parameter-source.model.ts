import { Parameter } from "./parameter.model";

export abstract class ParameterSource {

    abstract getParameters(): Parameter[];
}