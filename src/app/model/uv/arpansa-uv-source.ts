import { map, timer } from 'rxjs';
import { UvSource } from './uv-source';
import { HttpClient } from '@angular/common/http';

const url: string = 'https://uvdata.arpansa.gov.au/xml/uvvalues.xml';

// Every two minutes
const pollTime: number = 120000; // Poll time in milliseconds

export class ArpansaUvSource extends UvSource {

    constructor(
        private http: HttpClient, private location: string) {
        super();

        // Queries ARPANSA UV data, which is an XML document containing the current UV index for various locations.
        timer(0, pollTime).subscribe(() => {
            this.http.get(url, { responseType: 'text' }).pipe(
                map<string, number>(response => {
                    let index: number = -1.0;
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(response, 'application/xml');
                    const locations = xmlDoc.getElementsByTagName('location');
                    for (let i = 0; i < locations.length; i++) {
                        const locationAsString = locations[i].getAttribute('id');
                        if (locationAsString && locationAsString.toLowerCase() === this.location.toLowerCase()) {
                            const uvIndexAsString = locations[i].getElementsByTagName('index')[0].textContent;
                            if (uvIndexAsString) {
                                index = parseFloat(uvIndexAsString);
                            }
                            break;
                        }
                    }
                    return index;
                })
            ).subscribe((index: number) => {
                this.uvIndex.value.next(index);
            });
        });
    }
}