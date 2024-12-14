import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParameterSource } from './parameter-source.model';
import { FroniusInverterSource } from '../inverter/fronius/fronius-inverter-source';
import { ArpansaUvSource } from '../uv/arpansa-uv-source';

@Injectable({
    providedIn: 'root'
})
export class ParameterSourceRepoService {

    private parameterSources: ParameterSource[];

    constructor(private http: HttpClient) {

        this.parameterSources = new Array<ParameterSource>();

        // Displays each parameter on the each corner of the screen, starting at the top left corner going clockwise        
        this.parameterSources.push(new ArpansaUvSource(this.http, 'Perth'));
        this.parameterSources.push(new FroniusInverterSource(this.http));
    }

    getAllParameterSources(): ParameterSource[] {
        return this.parameterSources;
    }
}