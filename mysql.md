# Configurarea serviciului mysql

Serviciul `mysql` este cel care ne permite gestionarea bazei de date în care aplicația va stoca informații.

Pentru a testa că acest serviciu este pornit în terminal executăm următoarea comandă:

```bash
sudo service mysql status
```

![mysql status](.gitbook/assets/001-mysql-status.png)

## Configurare utilizator nou

Ne vom conecta la baza de date folosind userul `root` și apoi vom genera credențialele de autentificare pentru aplicația noastră.

```bash
sudo mysql -u root
```

Adăugăm un nou utilizator. În exemplul de mai jos puteți inlocui `username` și `password` cu numele respectiv parola dorită.

```bash
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
```

Apoi îi acordăm privilegiile necesare

```bash
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' WITH GRANT OPTION;
```

În final pentru a îeși din consola mysql tastează comanda `exit`.

## Conectare server mysql

Acum ne vom conecta la serverul de baze de date folosind credențialele pe care tocmai le-am creat.

```bash
mysql -u username -p
```

Parola o vom introduce după ce executăm comanda de mai sus. Caracterele nu vor fi afișate. După introducerea parolei apăsăm tasta enter.

## Creare bază de date

Din consola MySQL voi rula comenzi SQL. Sfârșitul unei comenzi este marcat de **caracterul ;**

Pentru a crea o nouă baza de date executăm comanda `CREATE DATABASE`

```text
CREATE DATABASE database_name;
```

Pentru a lista bazele de date disponibile executam următoarea comandă:

```text
SHOW DATABASES;
```

![002-show-databases](.gitbook/assets/002-create-database.png)

## Revenire în consola linux

Pentru a părăsi utilitarul mysql, tastează comanda `exit`

