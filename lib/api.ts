import type { QueryOpts, RegisteredVehicleList } from "./types"

const RegisteredVehiclesV3QueryEndpoint = "https://opendata.rdw.nl/api/v3/views/m9d7-ebf2/query.json"

export class RegisteredVehiclesV3 {
  constructor() { }

  public async query(options: QueryOpts): Promise<RegisteredVehicleList> {
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
      })

      return res.json()
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
