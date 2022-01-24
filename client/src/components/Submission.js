import React, { Component } from "react";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export class Submission extends Component {
  constructor(props) {
    super(props);
    this.state = { time: "", foods: {}, location: "", numberOfDucks: 0 };
  }

  showRow(label, component) {
    return (
      <Grid item>
        <Grid container direction="row" style={{ marginLeft: "30%" }}>
          <Grid item xs={3} style={{ textAlign: "left" }}>
            <p>{label}</p>
          </Grid>
          <Grid item>{component}</Grid>
        </Grid>
      </Grid>
    );
  }

  render() {
    return (
      <div>
        <h1>Submission Page</h1>
        <i>Help us observe how ducks are fed throughout the world</i>
        <Divider style={{ marginBottom: "2%", marginTop: "2%" }} />

        <Grid container direction="column">
          {this.showRow(
            "Time fed",
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                value={this.state.time}
                onChange={(value) => {
                  this.setState({ time: value });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          )}
          {this.showRow(
            "Location fed",
            <TextField id="outlined-basic" variant="outlined" />
          )}
          {this.showRow(
            "Number of ducks fed",
            <TextField id="outlined-basic" variant="outlined" />
          )}
          {this.showRow(
            "Foods and amount fed",
            <TextField id="outlined-basic" variant="outlined" />
          )}
        </Grid>
        <Button variant="contained">Submit</Button>
      </div>
    );
  }
}

export default Submission;
