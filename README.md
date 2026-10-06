## RDW Dutch Vehicle OpenData

```html
<body>
  <script src="client.js"></script>
  <script>
    const rdw = new window.RDWVehicle.RegisteredVehiclesV3();
    rdw.query({
      license_plate: "GH123B",
      page: 1,
      max_entry:100
    })
        .then(console.log)
        .catch(console.error);
  </script>
</body>
```

Retrieve vehicle information from Dutch license plate numbers using RDW Open Data. 

- https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen/m9d7-ebf2/about_data

This package does not use any token as RDW OpenData permits requests to it's datasets without any authorization. Queries performed using this package are intended to be executed exclusively in the browser. Therefore, the browser SDK should be used, as defined in ``package.json`` under ``browser``, rather than the Node.js variant. 

Using the browser SDK allows your application to benefit from an effectively indefinite quota, as requests are made directly from the client device rather than through a centralized server.

#### Example

Clone this repository and start a HTTP server from project root. Subsequently navigate to ``index.html`` and have a look at the browser's console.

#### Features

- (Query): RDW Vehicle OpenData V3. [Read more](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen/m9d7-ebf2/about_data).

#### Package scripts
Helpful package scripts if you would like to extend the API with more features.

- ``build`` - compiles Typescript files
- ``browserify`` - bundles ``dist`` output for the browser


### Author
- z3ntl3 aka Efdal Sancak
