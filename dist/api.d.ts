import type { RegisteredVehicleList } from "./types";
export declare class RegisteredVehiclesV3 {
    constructor();
    query(license_plate: string, page: number, max_entry: number): Promise<RegisteredVehicleList>;
}
//# sourceMappingURL=api.d.ts.map