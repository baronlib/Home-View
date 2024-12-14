
import { Component } from '@angular/core';
import { ParameterSetRepoService } from './model/parameter/parameter-set-repo.service';

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

    constructor(private sanitizer: DomSanitizer, public parameterSetRepo: ParameterSetRepoService) {
    }

    getPositionClass(index: number): string {
        const positions = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];
        return positions[index % positions.length];
    }
}
