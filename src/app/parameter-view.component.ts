import { Component, OnInit, Input } from '@angular/core';
import { Parameter } from './model/parameter/parameter.model';

@Component({
    selector: 'parameter-view',
    templateUrl: "./parameter-view.component.html"
})
export class ParameterViewComponent {

    @Input('parameter') parameter: Parameter = new Parameter();
}
