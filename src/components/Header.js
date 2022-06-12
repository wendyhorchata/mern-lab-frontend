import { Link } from "react-router-dom"

export default function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>
          <img src="https://i.imgur.com/pC1MJsG.png?1" alt=""/>
        </div>
      </Link>
    </nav>
  )
}

