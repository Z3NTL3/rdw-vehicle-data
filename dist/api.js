"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisteredVehiclesV3 = void 0;
const RegisteredVehiclesV3QueryEndpoint = "https://opendata.rdw.nl/api/v3/views/m9d7-ebf2/query.json";
class RegisteredVehiclesV3 {
    constructor() { }
    async query(options) {
        try {
            let res = await fetch(RegisteredVehiclesV3QueryEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "query": `SELECT * WHERE kenteken='${options.license_plate}'`,
                    "page": {
                        "pageNumber": options.page,
                        "pageSize": options.max_entry
                    }
                })
            });
            return res.json();
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
}
exports.RegisteredVehiclesV3 = RegisteredVehiclesV3;
//# sourceMappingURL=api.js.map