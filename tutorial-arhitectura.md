# Arhitectura aplicației web

Aplicația pe care o implementăm pentru a demostra modelul Single Page Application este una simplă ce permite gestionarea de mesaje pe o pagină personală.

![application interface](./docs/01101-html.png)

Utilizatorul are posibilitatea să realizeze operațiile CRUD (create, read, update, delete) pe datele stocate în baza de date.

Înainte de a trece la implementare să ne luăm câteva momente pentru a reflecta la modul în care un utilizator va interacționa cu această pagină web și care este parcursul pe care în vor avea datele în arhitectura aplicației noastre.

În primul rând când utilizatorul va deschide o pagină web tastând adresa URL, browserul va translata această adresă text prin intermediul unui serviciu DNS într-o adresă IP care identifăcă serverul pe care site-ul este găzduit. Apoi va lansa o cerere HTTP către serverul web specificând adresa resursei accesată.

![browser requests](.gitbook/assets/01103-browser-server-request.png)

Serverul web va prelucra această cerere și va returna continutul text în cazul nostru în format HTML pe care browserul îl va interpreta și îl va afișa utilizatorului nostru.

Într-o arhitectură de tip Single Page Application cererea inițială va întoarce doar un schelet al paginii web, urmând ca date să fie accesate prin cereri ulterioare de tip GET, POST, PUT sau DELETE.

În acest context vom avea un flux asincron de date între pagina web client și server pentru fiecare eveniment declanșat de o acțiune pe care utilizatorul o va realiza în pagină.

![single page application](.gitbook/assets/01104-spa-architecture.png)

