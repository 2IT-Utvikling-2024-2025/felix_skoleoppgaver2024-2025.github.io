import React from 'react'

const Ping = () => {
    return (
        <div className='dokumenter'>
            <h1>Åpne for ping requests</h1>
            <p>Da vi fikk koblet PC’ene opp mot nettverket måtte vi konfigurere firewallen slik at vi kunne Pinge hverandre, for å gjøre dette trykket vi på windows knappen så søkte vi på Windows Defender Firewall Settings. Herfra trykket vi på «Advanced Settings». Etter dette trykket vi på Inbound Rules. På inbound rules så vi etter de Regelene som heter «File and Printer Sharing (Echo Request - ICMPv4-In)».  Når vi fant disse så satte vi begge to til Enabled. Når vi da prøvde å pinge gikk det gjennom. </p>
        </div>
    )
}

export default Ping