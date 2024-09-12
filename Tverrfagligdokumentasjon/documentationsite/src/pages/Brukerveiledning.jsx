import React from 'react'

const Brukerveiledning = () => {
    return (
        <div className='dokumenter'>
            <h1>Brukerveiledning</h1>
            <p>Når du setter opp FTP serveren må du konfigurere Firewall.

                For å gjøre dette må du åpne FTP serveren din og Windows Defender Firewall Programmet.

                Når du har åpnet «Windows Defender Firewall» kan du trykke på der det står «Advanced Settings» på venstre side.

                Når du trykker der vill du se at på venstre side står det Inbound rules. Denne skall du trykke på.

                Når du har trykket på denne kan du trykke på der det står «New rule» på høyre side av skjermen.

                Når du trykker å new rule ser du at det står Program, Port, Predefined og Custom. Du skall trykke på den det står Port, så kan du trykke på next.

                Øverst ser du at det står «Does this rule apply to TCP or UDP?» Her trykker du på der det står TCP.

                Lengre ned ser du at det står Spesific Local Ports. På denne vill du først skrive in den porten som kommer opp når du går på FTP serveren. Så trykker du der det står Server, deretter trykker du på configure. Det første du ser da er en side der det står Adress og port, Du vill skrive in den Porten som står der det står Port.

                Etter dette går du til samme sted du fant porten. Så går du til der det står FTP and FTP over TLS på venstre side av skjermen. Øverst på vinduet ser du en bar der det står Passive mode. Trykk på denne.

                Her du at det står From og To, med noen tall. Disse tallene er det andre du vill skrive in i Specified Port feltet.  Slik som dette: 49152-65534.
                Når dette er gjort vill det du har skrevet in se litt ut som dette: 21, 49152-65534

                Etter dette trykker du på «Next»

                Etter du har trykket på next vill du se at Allow the connection er valgt. Om dette ikke er tilfellet vill du velge den.  Så kan du trykke «Next»

                På neste side ser du at Domain, Private og Public er valgt. Om ikke alle er valgt velger du de som ikke er det så trykker du next.

                Her trenger du bare å gi den ett navn. Navnet er ikke så viktig men du burde kalle den noe du vill huske.

                Når du har gitt den ett navn kan du trykke Finish.

                Nå har du åpnet for en Connection til FTP serveren din.

                Om du vil lukke denne Koblingen kan du gå tilbake til der vi så «Inbound rules» helt i starten. Her vill du nå se en ny rule med samme navn som du ga den reglen du nettopp lagde.

                For å skru av koblingen kan du dobbeltrykke på denne regelen og trykke på boksen hvor det står enabled for å disable den.

                Etter dette kan du trykke Apply.

                Etter dette kan du trykke Ok.

                Om du vill skru den på igjen kan du gjøre det samme en gang til.
            </p>
        </div>
    )
}

export default Brukerveiledning