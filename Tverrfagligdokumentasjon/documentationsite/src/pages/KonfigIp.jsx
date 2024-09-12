import React from 'react'

const KonfigIp = () => {
    return (
        <div className='dokumenter'>
            <h1>Konfigurere IP Adresser for PCene</h1>
            <p>Da PC’ene  var koblet til switchen måtte vi konfigurere IP adresser, for å gjøre dette gikk vi til Controll pannel, herfra trykket vi på «Network and internet» så på «Network Sharing Center» herfra trykket vi på «Change adapter settings». Når dette var gjort trykket vi på «Ethernet», på Ethernet trykket vi på properties. Så scrollet vi til vi fant ett felt for IPV4. Når vi fant dette feltet dbbelt trykket vi på feltet. Da fikk vi opp et vindu for IP adresse konfigurasjonen for pc’en. Her trykket vi på Use the following IP adress. Her fylte vi ut en IP og subnet mask. Hvor jeg hadde IP’en 192.168.1.5 og subnet mask på 255.255.255.0.</p>
        </div>
    )
}

export default KonfigIp