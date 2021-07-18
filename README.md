#Installatiehandleiding
‘Lord Of The Rings’ Trivia Applicatie
Door Jasper de Korte

Inleiding
In deze handleiding leg ik de stappen uit hoe je zonder problemen mijn app kan importeren en runnen.


#Installatie benodigde software
#Node.JS
Voordat u kunt beginnen met het openen van het project, heeft u (indien u het nog niet hebt) een software nodig genaamd Node.JS. Gelukkig is installatie geen hogere wiskunde en met een paar klikken kunt u al verder.
via deze link: Node.js (nodejs.org) , komt u op de downloadpagina van Node.JS waar u de software kan downloaden. Kies degene die voor u geschikt is, maar met “Recommended for most users “ zit u altijd goed.
Open de installer en volg de stappen in het installatie proces. Zodra dit succesvol is afgerond, kunt u verdergaan met een van de onderstaande opties om mijn project te openen!

#API Key
Misschien niet echt een installatie, maar in het geval dat de api niet werkt doordat mijn key niet meegegeven is, vind u deze hier nogmaals:
key: PQhSLtNXHWFFaBqgDe0y
Locatie van de api key is als volgt in het project folder:
lord-of-the-rings-trivia > src > pages > quiz > quiz.js > ‘regel 18’ .

#Installatie ZIP bestand
#Stap 1, ZIP bestand uitpakken
Indien nog niet gedaan, download het zip bestand, en rechtermuisknop op het zip bestand om vervolgens op “Hier uitpakken” te klikken, (tenzij een andere folder gewenst is kunt u een andere optie gebruiken).
#Stap 2, bestanden importeren in de code editor
In uw code editor vind u linksboven een kopje genaamd met File (NL = bestand). Hier gaat u naartoe om vervolgens de optie “open” (NL = Openen)  te selecteren.

Vervolgens zoekt u in de file selector naar de locatie van de folder die u zojuist net heeft uitgepakt. U selecteert dan de gehele folder en klikt vervolgens op OK. In het voorbeeld is de de folder te vinden op pad Desktop > Test-LOTR.


#Stap 3, het installeren van de benodigden ‘packages’
Het installeren van de benodigdheden is gelukkig eenvoudig en zo gebeurd.
In de meeste editors is dit bijna hetzelfde, maar voor webstorm gebruikers vind u linksonder een klein kopje genaamd Terminal, klik hier op, en er opent onderin de editor een nieuw raam, dit is de terminal.

Vervolgens kunt u indien nog niet gedaan, in de terminal klikken waarna u kunt typen. In deze terminal typt u: npm install
Wat dit doet is het installeert alle benodigdheden automatisch en in één keer om de app goed te laten draaien. Wacht tot het process klaar is voordat u verder gaat met de volgende stap.

#Stap 4, het starten van de App
Wanneer de editor het process succesvol heeft afgerond, kunt u de volgende stap ondernemen. In de terminal typt u: npm start . Dit command start de app, en opent deze in uw standaard geselecteerde browser.
Indien uw browser niet opent of als er geen nieuw venster opent, moet u zelf handmatig een nieuw venster aanmaken, en de volgende link in de adresbalk plakken: http://localhost:3000 . Als alles op de juiste manier is uitgevoerd en verlopen, heeft u nu de App voor zich en kunt u deze gaan gebruiken, gefeliciteerd!

#EXTRA stap 5, eventueel voorkomend probleem.
In het geval dat de app niet start, check de adresbalk en kijk of er meer staat dan alleen https://Localhost:3000  .
Indien ja, ga dan in de code editor links naar het project-venster, open lord-of-the-rings-trivia folder, en dubbelklik dan op package.json.
In package.json, scrol helemaal naar onder tot u homepage vind. Rechts van homepage, verplaatst alles tussen de aanhalingstekens voor een slash: / .
sluit de server in de terminal met ctrl + c,  druk dan op y en dan op  Enter .
Herstart de dev. server weer met: npm start


#Installatie door GIT-clone
#Stap 1, Het kopiëren van de Git repository
Om deze app te clonen vanaf github, gaat het als volgt.
Om te beginnen, indien u nog geen link heeft, klikt u op de volgende link:
https://github.com/SnelleJaapie/Lord-Of-The-Rings-Trivia-Eindopdracht
Eenmaal aangekomen, ongeveer rechts van het midden ziet u een groene knop staan met “Code” erop. Wanneer u hierop klikt opent zich een klein uitklapvenster, die een link bevat. Kopieer deze link.



#Stap 2, Het klonen van de Git repository.
Vervolgens gaat u naar de Code Editor en zoekt u bovenin het programma naar het kopje VCS . Onder dit kopje vindt u de optie “Get from version control” en klikt deze aan.
Eenmaal in het venster wat zich zojuist heeft geopend, neem de link die u eerder heeft gekopieerd, en plak die in de balk waar URL voor staat, en klik vervolgens rechts onderin het venster op Clone.
In de situatie dat u geen kopje VCS heeft, is het omdat er al een project geopend is, en staat er waarschijnlijk wel een kopje met Git. Indien dit het geval is klik dan op GIT en zoek naar de optie Clone. Vanaf hier gelden dezelfde stappen als bij VCS.
Nadat u in een van de 2 situaties op clone heeft geklikt, opent zich eventueel de melding of u in het huidige venster, of een nieuw venster de app wilt openen, dit mag u zelf kiezen :).
* U kunt nu verder gaan bij de stap 3 van “Installatie ZIP bestand” *
