# Initializare structura proiect

Pentru a vă realiza structura proiectului pe modelul exemplificat la seminar sunt necesari următorii pași

### Pași premergători

1. Realizați o clonă locală a proiectului
2. Creați un workspace in Visual Studio cu directorul proiectului

### Inițializare frontend

Inițializarea aplicației de frontend se face folosind utilitarul `create-react-app`

Pentru a instala utilitarul executați comanda

```bash
npm install -g create-react-app        
```

Pentru a inițiaza aplicația de frontend executați comanda

```bash
npx create-react-app frontend
```

### Inițializare backend

Adăugați un director backend și un fișier server.js

Navigați în directorul backend

```bash
cd backend
```

Inițializarea aplicației de backend se face folosind utilitarul `npm init` 

```bash
npm init -y
```

În urma acestei comenzi veți obține fișierul package.json în care sunt salvate dependințele aplicației.

Pentru a adăuga dependințele necesare executați următoarle comenzi:

```bash
npm install --save sequelize
npm install --save express
npm install --save mysql2
```

Realizați următoarea structură de directoare

```bash
backend
  |__config
  |__routes
  |__models
  |__controllers
```

### Publicare modificări pe git

Anterior publicării pe git vă recomand să adăugați un fișier `.gitignore` care să excludă directoarele node\_modules de la versionare. 

Continutul lui trebuie să cuprindă numele directoarelor sau fișierelor excluse precum în exemplul de mai jos.

```bash
node_modules
```

Pentru a publica modificările pe git este necesară înregistrarea fisierelor adăugate în repository-ul local.

```bash
git add .
git commit -m "structura initiala de proiect"
```

Publicarea pe repository-ul origin se face apelând comanda git push

```bash
git push
```

\(nota: structura de directoare va fi publicata doar in urma adaugării de fișiere\)

Pentru a actualiza un repository exitent cu cele mai recente modificări apelați comanda git pull

```bash
git pull
```

### Pentru cei grăbiți

Am adăugat în atașamentul acestui tutorial un script care realizează structura proiectului. Tot ce rămâne de făcut e să il rulați din bash în directorul de proiect și să publicați structura pe git.

```bash
./project-setup.sh
```

{% file src="../.gitbook/assets/project-setup.sh" caption="project-setup.sh" %}



