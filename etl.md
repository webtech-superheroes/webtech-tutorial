# ETL (extract, transform, load)

Prelucrarea de date este realizată în general în trei pași: extragere date, transformare și încărcare:

Extragerea de date se poate realiza:

Din fisiere de diverse tipuri

* text - https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback sau https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options 
* csv - https://www.npmjs.com/package/csvtojson
* json - folosind JSON.parse() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
* xml - https://www.npmjs.com/package/xml-js
* xlsx - https://www.npmjs.com/package/xlsx

Din baze de date

* relationale (SQL: MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, Oracle)
* nerelationale (noSQL: MongoDB, Couchbase)
* orientate pe grafuri (Neo4J)

Din servicii web
* API-uri REST
* API-uri SOAP

În acest tutorial sunt exemplificate două medode de ETL:

1. [Folosind funcții](etl-functional.md)
2. [Folosind clasa ETL](etl-class.md)

Codul sursă este disponibil în directorul ***etl***