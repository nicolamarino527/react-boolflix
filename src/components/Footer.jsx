
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faLanguage } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <>

            <div className="footer">
                <h2 className="pt-3 pb-5">Se hai bisogno di informazioni</h2>
                <div className="info-container">
                    <ul className="info">
                        <li><a href="">Domande frequenti</a></li>
                        <li><a href="">Rapporti con gli investitori</a></li>
                        <li><a href="">Come guardare Booflix</a></li>
                        <li><a href="">Informazioni sull'azienda</a></li>
                        <li><a href="">Note legali</a></li>
                    </ul>
                    <ul className="info">
                        <li><a href="">Centro assistenza</a></li>
                        <li><a href="">Rapporti con gli investitori</a></li>
                        <li><a href="">Opportunità di lavoro</a></li>
                        <li><a href="">Condizioni di utilizzo</a></li>
                        <li><a href="">contattaci</a></li>
                    </ul>
                    <ul className="info">
                        <li><a href="">Condizioni di utilizzo</a></li>
                        <li><a href="">Rapporti con gli investitori</a></li>
                        <li><a href="">Opportunità di lavoro</a></li>
                        <li><a href="">Centro assistenza</a></li>
                    </ul>
                    <ul className="info">
                        <li><a href="">Rapporti con gli investitori</a></li>
                        <li><a href="">Centro assistenza</a></li>
                        <li><a href="">Info</a></li>
                    </ul>
                </div>
                <select class="form-select" aria-label="Default select example">
                    <option selected value="it"><FontAwesomeIcon icon={faGlobe} />Italiano</option>
                    <option value="1">Inglese</option>
                    <option value="2">Francese</option>
                    <option value="3">Spagnolo</option>
                    <option value="4">Tedesco</option>
                    <option value="5">Giapponese</option>
                </select>
            </div>
        </>
    )
}