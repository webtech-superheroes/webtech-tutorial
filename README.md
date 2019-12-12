# README

## Configurarea mediului de lucru

1. [Cloud9 în AWS](c9.md)
2. [Configurare MySQL](mysql.md)
3. [Lucru cu git](git.md)

## Dezvoltarea unei aplicații web cu arhitectură fontend - backend

Tutorialul este organizat în trei părți:

1. [Arhitectura aplicației](tutorial-arhitectura.md)
2. [Construirea API-ului RESTful folosind ExpressJS](tutorial-rest-api.md)
3. [Construirea interfeței folosind HTML, Axios, JQuery](tutorial-frontend.md)

Codul sursă rezultat este disponiblil pe github în directorul [simple-spa](https://github.com/webtech-superheroes/simple-spa).

Parcurgerea acestui tutorial presupune a avea cunoștințe de bază în a lucra cu o consolă Linux, înțelegerea conceptului de baze de date relațională, bazele programării, întelegerea protocolului HTTP și elemente de sintaxă JavaScript precum definirea de variabile, tipuri de date și structuri de date \(JSON\).

Scopul tutorialului este de a fi un ghid în a realiza primii pași în dezvoltarea unei aplicații cu arhitectura de tip frontend - backend. Materialul include referințe pentru a aprofunda tehnologiile utilizate.

## Progressive Web App \(PWA\) cu React și NodeJS backend

Codul pentru aplicația exemplificată este disponibil aici: https://github.com/webtech-superheroes/webtech-hub

## Operații pe date și persistență

***ORM (Object-relational mapping)***

- permite transpunerea bazei de date in cod prin realizarea de modele asociate fiecarui tabel
- sunt definite relatiile intre tabele
- ideal pentru realizarea de operatii simple pe date (CRUD)
- operatiile sunt realizate asincron

Implementările cele mai populare sunt:
* ActiveRecord Pattern - https://www.martinfowler.com/eaaCatalog/activeRecord.html
* DataMapper Pattern - https://martinfowler.com/eaaCatalog/dataMapper.html

***ETL (extract, transform, load)***

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