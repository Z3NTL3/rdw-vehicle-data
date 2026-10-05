import type { RegisteredVehicleList } from "./types"

const RegisteredVehiclesV3QueryEndpoint = "https://opendata.rdw.nl/api/v3/views/m9d7-ebf2/query.json"

export class RegisteredVehiclesV3 {
  constructor() { }

  public async query(license_plate: string, page: number, max_entry: number): Promise<RegisteredVehicleList> {
    try {
      let res = await fetch(RegisteredVehiclesV3QueryEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
         	"query": `SELECT * WHERE kenteken='${license_plate}'`,
         	"page": {
         			"pageNumber": page,
         			"pageSize": max_entry
         	}
        })
      })

      return res.json()
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
