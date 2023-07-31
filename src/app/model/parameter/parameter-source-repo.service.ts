import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParameterSource } from './parameter-source.model';
import { FroniusInverterSource } from '../inverter/fronius/fronius-inverter-source';

@Injectable({
    providedIn: 'root'
})
export class ParameterSourceRepoService {

    private parameterSources: ParameterSource[];

    constructor(private http: HttpClient) {

        this.parameterSources = new Array<ParameterSource>();

        this.parameterSources.push(new FroniusInverterSource(this.http));
        //this.parameterSources.push(new ArpansaUvSource(this.http));
        // Nice to have!
        // this.parameterSources.push(new WeatherSource());
    }

    getAllParameterSources(): ParameterSource[]{
        return this.parameterSources;
    }
}