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

- [] TODO: verifică existența fișierului package.json
- [] TODO: crează un ***fișier server.js***


## 2. Cum construiesc un server HTTP folosind ExpressJS?

## 3. Cum instalez MySQL și cum creez baza de date?

## 4. Cum mă conectez la baza de date din NodeJS folosind Sequelize?

## 5. Cum definesc modele pentru tabele folosind Sequelize?

## 6. Cum creez tabelele în baza de date folosind mecanismul de sincronizare din Sequelize?

## 7. Cum expun datele dintr-un tabel folosind metoda GET?

## 8. Cum creez o nouă înregistrare într-un tabel folosind metoda POST?

## 9. Cum actualizez o înregistrare folosind metoda PUT?

## 10. Cum șterg o înregistrare folosind metoda DELETE?

