var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const RegisteredVehiclesV3QueryEndpoint = "https://opendata.rdw.nl/api/v3/views/m9d7-ebf2/query.json";
class RegisteredVehiclesV3 {
    constructor() { }
    query(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield fetch(RegisteredVehiclesV3QueryEndpoint, {
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
        });
    }
}
export { RegisteredVehiclesV3 };
//# sourceMappingURL=api.js.map