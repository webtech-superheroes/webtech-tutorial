# Construirea interfeței folosind HTML și JavaScript

În prima parte am construit un server web capabil să servească fișiere statice și să expună date pentru a realiza operațiile de creare, citire, actualizare și ștergere \(CRUD\). În a doua parte vom dezvolta o interfață minimalistă cu scopul de a exemplifica metodele de comunicare între componenta de frontend și componenta de backend.

În general dezvoltarea de frontend este un proces iterativ ce presupune realizarea de schițe de design întermediare, care sunt validate cu utilizatorii, transformarea acestora în cod HTML și CSS, implementarea de cod care gestionează interacțiunea cu utilizatorul, testare și lansare în producție.

Dacă pe partea de backend procesul este destul de bine structurat și omogen în diferite limbaje de programare, dezvoltarea de frontend conține elemente subiective care țin de estetică, stil, aspect.

## Realizarea unei schițe de design

În dezvoltare web pornești de cele mai multe ori de la o problemă vag definită pe care un utilizator o are, te gandești la o interfață pe care o prototipezi, realizezi o schiță de design. Pornind de la o schiță identifici elementele html necesare și determini pașii prin care să implementezi rezultatul dorit.

Vom prezenta datele sub forma unui tabel în care fiecare rând reprezintă o înregistrare din baza de date. 

Tabelul va avea o secțiune de antet care va fi statică și o secțiune dinamică pe care o vom construi în funcție de datele primite de pe server. Fiecare înregistrare va permite acțiunile de editare și stergere pe care le vom prezenta prin două elemente de tip buton.

Pentru a captura datele de la utilizator vom folosi un formular cu elemente de tip text și un buton care să activeze acțiunea de prelucrare a datelor.

În final dacă deschid documentul HTML în Chrome rezultatul va arăta astfel.

![html output](../.gitbook/assets/01101-html.png)

## Transformare schiței în cod HTML

HTML este un limbaj care se învațâ pe parcurs. Fiecare element are o reprezentare standard în browserele web ce poate fi extinsă folosind clase de stil CSS.

Pornim de la structura unui document HTML în care vom adăuga codul pentru a realiza un tabel și cel pentru a realiza un formular în secțiunea `body` a documentului.

```markup
<!DOCTYPE html>
<html>
    <head>
        <title>Message list</title>
    </head>
    <body>
        <h1>Messages</h1>
    </body>
</html>
```

Elementele HTML necesare realizării unui tabel - [https://www.w3schools.com/html/html\_tables.asp](https://www.w3schools.com/html/html_tables.asp)

Codul pentru a reprezenta un tabel va arăta astfel:

```markup
<div id="content">
    <table style="width:100%;">
        <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Name</th> 
            <th>Message</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Subject data</td>
            <td>Name data</td>
            <td>Message data</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    </table>
</div>
```

Elementele HTML necesare realizării unui formular - [https://www.w3schools.com/html/html\_forms.asp](https://www.w3schools.com/html/html_forms.asp)

Iar codul pentru a reprezenta un formular va fi acesta:

```markup
<form>
  <input type="hidden" name="id" id="id" /><br />
  Name:<br />
  <input type="text" name="name" id="name" /><br />
  Subject:<br />
  <input type="text" name="subject" id="subject"><br/>
  Message:<br />
  <textarea name="message" id="message"></textarea> <br/>
  <input type="submit" value="Save message">
  <input type="reset" value="Cancel">
</form>

    
```

Ce am obținut din acest exercițiu este un document static, dar ne dorim să îl populăm cu date de pe server și să implementăm fiecare acțiune folosind JavaScript.

## Afișare date la încărcare

Evenimentul declanșat atunci când pagina este încărcată `onload` va determina o cerere de tip GET care va furniza lista de mesaje pe care o vom afișa în tabel.

Apăsarea butonului de ștergere pentru o înregistrare va determina o cerere de tip DELETE. 

Completarea formularului și apăsarea butonului salvează va determina o cerere de tip POST dacă este vorba de adăugarea unei înregistrări noi.

Editarea se va face preluând datele cu GET și în final cu cerere de tip PUT către backend.

```markup
<script type="text/javascript">
    window.onload = () => {
        console.log('Page loaded')
    }
</script>
```

## Citire și afișare date de pe server \(GET\)

Până acum am definit documentele HTML ca fiind o structură de text statică ce va fi afișată de către browser în funcție de modul în care sunt interpretate tag-urile folosite.

În acest pas vom folosi axios pentru a prelua date de server in format JSON, apoi parcurgând acele date vom construi dinamic codul HTML pentru a afșa tabelul. În final îl vom insera în pagină în div-ul a cărui id definit este `table` folosind proprietatea innerHTML

```javascript
async function showMessages() {
    try {
        let results = await fetch('/messages').then(response => response.json())
    
    
        let html = ` <table style="width:500px;">
                <tr>
                    <th>ID</th>
                    <th>Subject</th>
                    <th>Name</th> 
                    <th>Message</th>
                    <th>Actions</th>
                </tr>`
    
        results.forEach(function(element) {
            html += `<tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.subject}</td>
                        <td>${element.message}</td>
                        <td>
                            <button onClick="editMessage(${element.id})">Edit</button>
                            <button onClick="deleteMessage(${element.id})">Delete</button>
                        </td>
                    </tr>`
        })
    
        html += `</table>`
        document.getElementById('content').innerHTML = html
    } catch (error) {
        console.log(error)
    }
}
```

Pentru a testa funcția o vom apela pe eveninimentul `onload`

```markup
<script type="text/javascript">
    window.onload = () => {
        console.log('Page loaded')
        showMessages()
    }
</script>
```

Observăm în acest exemplu câteva elemente specifice de limbaj precum modul în care se definește o funcție, modul în care se definește o variabilă de tip string și operația de concatenare.

Am folosit funcția `fetch` pentru a iniția o cerere GET către backend. Imediat ce primim răspunsul de la server îl vom transforma în JSON. Apoi cu rezultatul obținut construim tabelul 

Pentru că folosim metodă asincronă rezultatul returnat de apel va fi un obiect de tip `Promise`. Pe acest obiect vom transmite două funcții către cele două metode `then()` și `catch()` care vor fi apelate atunci când cererea este îndeplinită cu succes, respectiv dacă a intervenit o eroare. Detaliile privind acest mecanism sunt descrise aici: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Prelucrare date din formular

Comportamentul standard al unui formular este să transmită datele prin GET către adresa curentă a documentului în care este inclus formularul transmis. Datele vor fi stransmise ca un șir de proprietăți cheie valoare.

Pentru a suprascrie acest comportament și a implementa un mecanism asincron de a transmite date către enpoint-urile create pe server vom implementa o funcție în JavaScript pe care o vom transmite pe evenimentul `onSubmit`. Fiind o funcție care gestionează un eveniment acesteia îi va fi pasat parametrul `event`, un obiect care conține detalii despre formularul ce a inițiat acel eveniment.

```markup
<form onSubmit="saveMessage(event)">
    ...
</form>
```

Înainte de a implementa această funcție să ne gândim la logica pe care trebuie să o aibă.

În primul rând mecanismul standard de transmitere a formularului ar trebui suprascris apelând metoda `event.preventDefault()`

Apoi vom avea nevoie de un mecanism prin care să accesăm valorile din câmpurile definite în formular. Fiind în contextul unui eveniment lansat pe metoda onsubmit am posibilitatea de a accesa aceste valori prin `event.target`.

Următorul pas ar fi să determin dacă este vorba de o operație de editare a unei înregistrări existente sau de adăugare a unei înregistrari noi. 

În primul caz vom transmite datele către server prin metoda PUT către endpoint-ul `/messages/:id` cu valoarea id preluată din formular. In al doilea caz vom transmite datele către server prin metoda POST către endpoint-ul `/messages`.

```javascript
async function saveMessage(event) {
    event.preventDefault()

    let id = event.target.id.value
    
    let data = {
        name: event.target.name.value,
        subject: event.target.subject.value,
        message: event.target.message.value
    }
    
    let url = ''
    let method = ''
    
    if(id) {
        //make a request to PUT /messages/:id
        url = '/messages/' + id
        method = 'PUT'
    } else {
        url = '/messages'
        method = 'POST'
    }
    
    try {
        let result = await fetch(url, {
            method: method, 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
        
        showMessages()
    } catch(err) {
        alert('unable to save message')
    }
    
}
```

## Implementare metodă ștergere \(DELTE\)

Ștergerea unui mesaj se va realiza implementând o funcție ce primește ca parametru id-ul resursei și realizează o cerere de tip DELETE către endpoint-ul `/messages/:id`

```javascript
async function deleteMessage(id) {
    try {
        let url = '/messages/' + id
        let result = await fetch(url, {method: 'DELETE'})
        showMessages()
     } catch(err) {
         alert('unable to delete message')
     }
     
}
```

