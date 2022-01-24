import React, { Component } from "react";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      food: "",
      amount: "",
      location: "",
      numberOfDucks: "",
    };
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

  handleSubmit() {
    const inputNotFilled = Object.values(this.state).some((x) => x === "");
    inputNotFilled && alert("Please fill out all inputs");
    !inputNotFilled &&
      fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (data.status == "500") {
            alert("Submission to server failed, please submit again");
          } else if ((data.status = "200")) {
            alert("Submission success. Thank you for your time");
            window.location.reload();
          }
        });
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
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => {
                this.setState({ location: e.target.value });
              }}
            />
          )}
          {this.showRow(
            "Number of ducks fed",
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => {
                this.setState({ numberOfDucks: e.target.value });
              }}
            />
          )}
          {this.showRow(
            "Food fed",
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => {
                this.setState({ food: e.target.value });
              }}
            />
          )}
          {this.showRow(
            `Amount of ${this.state.food} fed`,
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => {
                this.setState({ amount: e.target.value });
              }}
            />
          )}
        </Grid>
        <Button variant="contained" onClick={() => this.handleSubmit()}>
          Submit
        </Button>
      </div>
    );
  }
}

export default Submit;
