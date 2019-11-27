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

Codul sursă rezultat este disponiblil pe github în directorul [code](https://github.com/webtech-superheroes/webtech-tutorial).

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

Din fisiere

* csv - https://www.npmjs.com/package/csvtojson

* json - folosind JSON.parse() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

* xml
* xlsx - https://www.npmjs.com/package/xlsx

Din baze de date

* relationale (SQL)
* nerelationale (noSQL)
* grafuri

Din servicii web
* API-uri REST
* API-uri SOAP


