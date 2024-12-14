
import { Component } from '@angular/core';
import { ParameterSourceRepoService } from './model/parameter/parameter-source-repo.service';
import { Parameter } from './model/parameter/parameter.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    // BlueIris UI3 URL on the local network
    ui3Url: string = 'http://192.168.1.77:81/ui3.htm?maximize=1';

    iFrameSrc: string = this.sanitizer.bypassSecurityTrustResourceUrl(this.ui3Url) as string;

    // Parameters to show in the dashboard  
    public parameters: Parameter[] = [];

    constructor(private sanitizer: DomSanitizer, parameterSources: ParameterSourceRepoService) {

        // Get all parameters from all parameter sources
        parameterSources.getAllParameterSources().forEach((paramSource) =>
            paramSource.getParameters().forEach((param) => {
                this.parameters.push(param);
            }));
    }
}
