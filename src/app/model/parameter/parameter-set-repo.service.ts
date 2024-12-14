import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FroniusInverterSource } from '../inverter/fronius/fronius-inverter-source';
import { ArpansaUvSource } from '../uv/arpansa-uv-source';
import { ParameterSet } from './parameter-set.model';

@Injectable({
    providedIn: 'root'
})
export class ParameterSetRepoService {

    public parameterSets: ParameterSet[] = [];

    constructor(private http: HttpClient) {

        // Displays each parameter on the each corner of the screen, starting at the top left corner going clockwise
        this.parameterSets.push({
            parameterSource: new ArpansaUvSource(this.http, 'Perth'),
            parameterSourceView: {
                color: 'magenta',
            }
        });
        this.parameterSets.push({
            parameterSource: new FroniusInverterSource(this.http),
            parameterSourceView: {
                color: 'red',
            }
        });
    }
}