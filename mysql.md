# Configurarea serviciului mysql

Serviciul ```mysql``` este cel care ne permite gestionarea bazei de date în care aplicația va stoca informații.

Pentru a testa că acest serviciu este pornit în terminal executăm următoarea comandă:

```bash
sudo service mysql status
```

Ne vom conecta la baza de date folosind userul ```root``` și apoi vom genera credențialele de autentificare pentru aplicația noastră.

```bash
sudo mysql -u root
```

Adăugăm un nou utilizator. În exemplul de mai jos puteți inlocui ```username``` și ```password``` cu numele respectiv parola dorită.

```bash
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
```

Apoi îi acordăm privilegiile necesare 

```bash
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' WITH GRANT OPTION;
```

În final pentru a îeși din consola mysql tastează comanda ```exit```.

Acum ne vom conecta la serverul de baze de date folosind credențialele pe care tocmai le-am creat.

```bash
mysql -u username -p
```

Parola o vom introduce după ce executăm comanda de mai sus. Caracterele nu vor fi afișate. După introducerea parolei apăsăm tasta enter.