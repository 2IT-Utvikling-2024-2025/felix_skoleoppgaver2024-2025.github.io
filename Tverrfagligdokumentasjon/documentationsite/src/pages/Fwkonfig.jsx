import React from 'react'

const Fwkonfig = () => {
    return (
        <div className='dokumenter'>
            <h1>Konfigurere Firewall for FTP server</h1>
            <p>Når vi hadde satt opp FTP serveren brukte vi Clienten for å koble opp mot serveren. Dette virket ikke fra de andre PC’ene fordi vi måtte konfigurere Firewallen slik at de kunne koble opp mot serveren. For å gjøre dette gikk vi på Windows Defender Firewall With Advanced Security.  Her trykket vi på Inbound rules, så new rule. Etter dette trykket vi på Port, så next. På Spesific local ports skrev vi in: 21, 49152-65534.  Etter dette tryket vi next. Så trykket vi Allow the connection. Etter dette selectet både Domain, Private og Public. Så trykket vi next som navn kalte jeg den FTPRules. Så trykket jeg Finish. Når dette var gjort fikk de andre på gruppen min koblet opp mot Serveren. </p>
        </div>
    )
}

export default Fwkonfig