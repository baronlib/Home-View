import { HttpClient } from "@angular/common/http";
import { InverterParameterSource } from '../inverter-source';
import { timer } from "rxjs";
import { FroniusInverterData } from "./fronius.model";

const url: string = "/inverter/solar_api/v1/GetInverterRealtimeData.cgi?Scope=Device&DeviceId=1&DataCollection=CommonInverterData";
const pollTime: number = 2000; // Poll time in milliseconds

export class FroniusInverterSource extends InverterParameterSource {

  constructor(private http: HttpClient)
  {
    super();

    this.currentPower.minValue=  0.0;
    this.currentPower.maxValue = 5300.0;

    this.dayEnergy.minValue = 0.0;
    this.dayEnergy.maxValue = 25000;

    // Poll the interver every set ms
    timer(0, pollTime).subscribe(
          (n)=> {
            this.http.get<FroniusInverterData>(url).subscribe((data) =>
            {
              let power: number = 0.0;
              if(data.Body.Data.PAC)
              {
                power = data.Body.Data.PAC.Value;
              }
              this.currentPower.value.next(power);
              this.dayEnergy.value.next(data.Body.Data.DAY_ENERGY.Value);
            });
          }
        );
  }
}