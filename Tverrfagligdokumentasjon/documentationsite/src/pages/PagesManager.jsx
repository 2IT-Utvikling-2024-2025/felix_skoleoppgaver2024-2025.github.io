import React, { useState } from 'react'
import Introduction from './Introduction'
import Planlegging from './Planlegging'
import Install from './Install'
import Booting from './Booting'
import Kablet from './Kablet'
import KonfigIp from './KonfigIp'
import Ping from './Ping'
import Ftp from './Ftp'
import Fwkonfig from './Fwkonfig'
import Refleksjon from './Refleksjon'
import Brukerveiledning from './Brukerveiledning'
const PagesManager = ({ page }) => {

    console.log(page)

    switch (page) {
        case "introduction": return <Introduction />
        case "planlegging": return <Planlegging />
        case "install": return <Install />
        case "booting": return <Booting />
        case "kablet": return <Kablet />
        case "ip": return <KonfigIp />
        case "ping": return <Ping />
        case "ftp": return <Ftp />
        case "fwkonfig": return <Fwkonfig />
        case "refleksjon": return <Refleksjon />
        case "guide": return <Brukerveiledning />
        default: return <Introduction />
    }
}

export default PagesManager