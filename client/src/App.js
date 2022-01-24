import "./App.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Submission } from "./components/Submission.js";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" style={{marginRight:"60%"}}>
            Duck Observer
          </Typography>
            <Button color="inherit">Submit</Button>
            <Button color="inherit">View Submissions</Button>
        </Toolbar>
      </AppBar>
      <Submission />
    </div>
  );
}

export default App;
