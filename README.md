## RDW Dutch Vehicle OpenData

```html
<body>
  <script src="client.js"></script>
  <script>
      const rdw = new window.RDWVehicle.RegisteredVehiclesV3();
      rdw.query("GH123B", 1, 100)
          .then(console.log)
          .catch(console.error);
  </script>
</body>
```

Retrieve vehicle information from Dutch license plate numbers using RDW Open Data. 

- https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen/m9d7-ebf2/about_data

This package does not use any token as RDW OpenData permits requests to it's datasets without any authorization. Queries performed using this package should strictly bound to the browser client. Therefore the browser SDK should be used which is ``client.js`` as defined in ``package.json > browser`` and not the Node variant.

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
