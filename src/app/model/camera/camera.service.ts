import { Injectable } from '@angular/core';
import { Camera } from './camera';

import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs-compat';
import { AlertComponent } from 'src/app/components/alert.component';

@Injectable({
    providedIn: 'root',
})

export class CameraService{

    constructor(private _snackBar: MatSnackBar){

        // TODO - subscribe for alerts
        // Observable.timer(0, 2000).subscribe(
        //     (n)=>
        //     {
        //         this.openSnackBar();
        //     }
        //   );

    }

    getCameras() : Camera[]{

        // TODO - call Http Watcher.API
        return new Array(new Camera(1, 'Front', 'http://cellar:81/mjpg/FRONT_DOOR/video.mjpg'));
    }

    openSnackBar() {
        this._snackBar.openFromComponent(AlertComponent, {
          duration: 4 * 1000,
        });
      }
}