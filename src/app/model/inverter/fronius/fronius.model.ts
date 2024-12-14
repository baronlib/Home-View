export interface RequestArguments {
    DataCollection: string;
    DeviceClass: string;
    DeviceId: string;
    Scope: string;
}

export interface Status {
    Code: number;
    Reason: string;
    UserMessage: string;
}

export interface Head {
    RequestArguments: RequestArguments;
    Status: Status;
    Timestamp: Date;
}

export interface DAYENERGY {
    Value: number;
    Unit: string;
}

export interface FAC {
    Value: number;
    Unit: string;
}

export interface IAC {
    Value: number;
    Unit: string;
}

export interface IDC {
    Value: number;
    Unit: string;
}

export interface PAC {
    Value: number;
    Unit: string;
}

export interface TOTALENERGY {
    Value: number;
    Unit: string;
}

export interface UAC {
    Value: number;
    Unit: string;
}

export interface UDC {
    Value: number;
    Unit: string;
}

export interface YEARENERGY {
    Value: number;
    Unit: string;
}

export interface DeviceStatus {
    StatusCode: number;
    MgmtTimerRemainingTime: number;
    ErrorCode: number;
    LEDColor: number;
    LEDState: number;
    StateToReset: boolean;
}

export interface Data {
    DAY_ENERGY: DAYENERGY;
    FAC: FAC;
    IAC: IAC;
    IDC: IDC;
    PAC: PAC;
    TOTAL_ENERGY: TOTALENERGY;
    UAC: UAC;
    UDC: UDC;
    YEAR_ENERGY: YEARENERGY;
    DeviceStatus: DeviceStatus;
}

export interface Body {
    Data: Data;
}

export interface FroniusInverterData {
    Head: Head;
    Body: Body;
}