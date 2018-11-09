# Construirea unui API RESTful

Un API RESTful reprezintă o metodă de a expune date și de a realiza operații pe acele date prin intermediul protocolului HTTP.

În acest exercițiu construim un server web cu ajutorul NodeJS și al framework-ului ExpressJS. Datele sunt stocate într-o bază de date relațională MySQL. Accesul la date se face prin Sequelize.

## Ce vei avea nevoie?

* Acces la mediul de lucru Cloud9
* NodeJS versiunea >= 8.9
* O instanță de MySQL
* Postman

## 1. Cum inițializez o aplicație NodeJS?

Pentru a inițializa o aplicație NodeJS execut următoarea comandă din terminal

```bash
npm init
```
Urmăresc instrucțiunile de pe ecran și completez următoarele detalii:
* Name - numele proiectului
* Version - versiunea proiectului (default)
* Description - o descriere succintă
* Entry point - fișierul care pornește aplicația: server.js
* Test command - comanda care este executată pentru a testa aplicația
* Git repository - dacă este cazul adresa către git
* Keywords - cuvinte cheie care descriu aplicația
* Author
* License - dacă este cazul

![npm init](./docs/00101-npm-init.png)

În final confrim dacă datele introduse sunt corecte. Dacă am executat comanda cu succes voi obține un fișier ***pagckage.json*** cu datele introduse.

- [ ] TODO: verifică existența fișierului package.json
- [ ] TODO: crează un fișier ***server.js***


## 2. Cum construiesc un server HTTP folosind ExpressJS?

## 3. Cum instalez MySQL și cum creez baza de date?

Cloud9 pune la dispoziție un utilitar pentru configurarea unui serviciu de MySQL denumit ***mysql-ctl***

Pentru a instala și porni serverul de baze de date rulez comanda:

```bash
mysql-ctl start
```

Conectarea la baza de date se realizează executând urmatoarea comandă

```bash
mysql -u root
```

Din consola MySQL voi rula comenzi SQL. Sfârșitul unei comenzi este marcat de caracterul ***;***

De exemplu pentru a crea baza de date cu numele **profile** voi executa

```sql
create database profile;
```

Notă: Acest utilitar este specific mediului Cloud9. Mai multe detalii despre instalarea și configurarea MySQL pe un alt sistem de operare în documentația oficială (https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

- [ ] TODO: verifică dacă baza de date a fost creată cu succes executând ```show databases;```
- [ ] TODO: părăsește consola mysql executând comanda ```exit```

## 4. Cum mă conectez la baza de date din NodeJS folosind Sequelize?

## 5. Cum definesc modele pentru tabele folosind Sequelize?

Un model este o reprezentare a unui tabel în codul sursă al aplicației. Sequelize permite definirea de modele folosind funcția ***define()***

Primul parametrul al funcției este numele tabelului. O convenție presupusă de lucru cu Sequelize este că numele tabelului va fi definit în limba engleză la plural. Al doilea parametru este un obiect care descrie structura tabelului prin perechi cheie:valoare, unde cheia este numele coloanei și valoarea este tipul de date.

```js
const Messages = sequelize.define('messages', {
    subject: Sequelize.STRING,
    name: Sequelize.STRING,
    message: Sequelize.TEXT
})
```

Mai multe detalii despre definirea de modele - http://docs.sequelizejs.com/manual/tutorial/models-definition.html

Lista cu tipurile de date suportate de Sequelize - http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types

Pentru a modela o aplicație este necesar să pornești de la domeniul pe care îl adresează, să identifici entități și relații între entități, să stabilești care sunt proprietățile lor și să identifici tipurile de date corespunzătoare. Este o activitate ce se desfășoară de obicei iterativ și incremenental pe parcursul dezvoltării aplicației. Așa că Sequelize propune un mecanism automat de sincronizare a bazei de date care este descris în pasul următor.

## 6. Cum creez tabelele în baza de date folosind mecanismul de sincronizare din Sequelize?

Sequelize permite sincronizarea automată a modelelor cu baza de date prin intermediul funcției ***sync()***

Adădugând parametrul ```{force: true}``` tabelele existente vor fi șterse și vor fi create confrom definiției din model.

## 7. Cum expun datele dintr-un tabel folosind metoda GET?

## 8. Cum creez o nouă înregistrare într-un tabel folosind metoda POST?

## 9. Cum actualizez o înregistrare folosind metoda PUT?

## 10. Cum șterg o înregistrare folosind metoda DELETE?

