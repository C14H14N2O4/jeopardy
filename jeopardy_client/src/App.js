import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import './styles/App.css'



export default function App() {
  return (
    <div className="App">
     <div>
      <Stack spacing={2}>
       <nav>
          <Link to="/player">
            <Button variant="contained" color="secondary">Play</Button>
            </Link>
      </nav>
      <nav>
          <Link to="/moderator">
          <Button variant="contained">Moderate</Button>
            </Link>
      </nav>
      <nav>
          <Link to="/about">
          <Button variant="contained">About</Button>
            </Link>
      </nav>
      </Stack>
     </div>
    </div>
  );
}

