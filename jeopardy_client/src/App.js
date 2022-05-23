import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom"

export default function App() {
  return (
    <div className="App">
     <div>
       <nav 
          style = {{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/signIn">Sign In</Link>
      </nav>
      <nav 
          style = {{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/about">About</Link>
      </nav>
     </div>
    </div>
  );
}

