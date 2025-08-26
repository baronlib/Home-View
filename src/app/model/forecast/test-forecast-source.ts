import { timer } from 'rxjs';
import { ForecastSource } from './forecast-source';

export class TestForecastSource extends ForecastSource {

    constructor() {
        super();

        timer(0, 5000).subscribe(() => {
            this.minTemp.value.next(Math.random() * 40);
            this.maxTemp.value.next(Math.random() * 40 + 10);
        });
    }
}