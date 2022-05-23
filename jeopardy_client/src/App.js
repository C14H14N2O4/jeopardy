import { Link } from "react-router-dom"

export default function App() {
  return (
    <div className="App">
     <div>
       <nav>
          <Link to="/sign">Sign In</Link>
      </nav>
      <nav>
          <Link to="/about">About</Link>
      </nav>
     </div>
    </div>
  );
}

