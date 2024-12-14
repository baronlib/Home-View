import { timer } from "rxjs";
import { UvSource } from "./uv-source";
import { HttpClient } from "@angular/common/http";

const url: string = "uv/api/UV";
// Every two minutes
const pollTime: number = 120000; // Poll time in milliseconds

export class ArpansaUvSource extends UvSource {

    constructor(
        private http: HttpClient) {
        super();

        timer(0, pollTime).subscribe((n) => {
            this.http.get<number>(url).subscribe((index) => {
                this.uvIndex.value.next(index);
            });
        }
        );
    }
}