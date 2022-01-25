import "./App.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Submit } from "./components/Submit.js";
import { ViewSubmissions } from "./components/ViewSubmissions";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" style={{ marginRight: "60%" }}>
              Duck Observer
            </Typography>
            <Button component={Link} to={"/"} color="inherit">
              Submit
            </Button>
            <Button component={Link} to={"/submissions"} color="inherit">
              View Submissions
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Submit />} />
          <Route path="/submissions" element={<ViewSubmissions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
