# Initializare proiect de la zero

Pentru a vă realiza structura proiectului pe modelul exemplificat la seminar sunt necesari următorii pași

### Pași premergători

1. Realizați o clonă locală a proiectului
2. Creați un workspace in Visual Studio cu directorul proiectului

### Inițializare backend

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

### Publicare modificări pe git

Anterior publicării pe git vă recomand să adăugați un fișier `.gitignore` care să excludă directoarele node\_modules de la versionare. Continutul lui trebuie să cuprindă numele directoarelor sau fișierelor excluse precum în exemplul de mai jos.

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

Pentru a actualiza un repository cu cele mai recente modificări apelați comanda git pull

```bash
git pull
```

