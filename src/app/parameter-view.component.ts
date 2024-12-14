import { Component, OnInit, Input } from '@angular/core';
import { Parameter } from './model/parameter/parameter.model';
import { ParameterSourceView } from './model/parameter/parameter-source-view.model';

@Component({
    selector: 'parameter-view',
    templateUrl: "./parameter-view.component.html"
})
export class ParameterViewComponent {

    @Input() parameter: Parameter = new Parameter();

    @Input() parameterSourceView: ParameterSourceView = new ParameterSourceView();
}
