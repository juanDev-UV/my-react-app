import { Link } from "react-router"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <ul>
            <li>
                <Link to="/corazon/presion-alta">Presion alta</Link>
            </li>
            <li>
                <Link to="/corazon/presion-baja">Presion baja</Link>
            </li>
        </ul>
    </footer>
  )
}

export default Footer