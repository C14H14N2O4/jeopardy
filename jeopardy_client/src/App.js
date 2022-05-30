import { Link } from "react-router-dom"
import './styles/App.css'

export default function App() {
  return (
    <div className="App">
     <div>
       <nav>
          <Link to="/player">Player Sign In</Link>
      </nav>
      <nav>
          <Link to="/moderator">Moderator Sign In</Link>
      </nav>
      <nav>
          <Link to="/about">About</Link>
      </nav>
     </div>
    </div>
  );
}

