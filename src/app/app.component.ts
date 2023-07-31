
import { Component } from '@angular/core';
import { ParameterSourceRepoService } from './model/parameter/parameter-source-repo.service';
import { Parameter } from './model/parameter/parameter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent 
{
  // Parameters to show in the dashboard  
  public parameters: Parameter[];

  constructor(private parameterSources: ParameterSourceRepoService) {
    this.parameters = new Array<Parameter>();
    // Get all parameters from all parameter sources
    parameterSources.getAllParameterSources().forEach((ps) =>
      ps.getParameters().forEach((param)=> {
        this.parameters.push(param);
      }));
  }
}
