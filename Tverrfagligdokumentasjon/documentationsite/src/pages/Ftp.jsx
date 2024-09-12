import React from 'react'

const Ftp = () => {
    return (
        <div className='dokumenter'>
            <h1>Sette opp en FTP server</h1>
            <p>Da dette var gjort begynte vi og sette opp en FTP server, her prøvde jeg og bruke Windows sin IIS men jeg bytet senere til Filezilla fordi jeg fikk det ikke til å virke. I filezilla lastet vi ned både Client og Server. Etter at vi hadde lastet det ned kjørte jeg serveren først. Her konfigurerte jeg serveren til å ha samme IP som PC’en min, port 21 og en pasive mode PORT range mellom 49152 og 65534.  Dette er fordi dette er default innstillingene for Serveren og IP adresen. </p>
        </div>
    )
}

export default Ftp