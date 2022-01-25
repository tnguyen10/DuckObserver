import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { withStyles } from "@material-ui/core/styles";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const TextTypography = withStyles({
  root: {
    color: "#4f4f4f",
  },
})(Typography);

export class ViewSubmissions extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch("http://localhost:3000/", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.status === "500") {
          alert("Cannot connect to server, please refresh the page");
        } else if (res.status === "200") {
          console.log("here");
          this.setState({ data: res.data });
        }
      });
  }

  showSubmissionGrid() {
    return (
      <Grid container direction="row" spacing={3} style={{ color: "red" }}>
        {this.state.data.map((d) => (
          <Grid item xs={4}>
            <Card>
              <CardContent>
                {Object.entries(d)
                  .filter(([key, value]) => key !== "_id")
                  .map(([key, value]) => (
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <TextTypography>
                        {key.charAt(0).toUpperCase() + key.slice(1)} fed:
                      </TextTypography>
                      <TextTypography> {value} </TextTypography>
                    </Stack>
                  ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  render() {
    return (
      <div className="viewSubmissions">
        <h1>View Submissions Page</h1>
        <i>Here are the data of ducks being fed around the world</i>
        <Divider style={{ marginBottom: "2%", marginTop: "2%" }} />
        {!this.state.data && <TextTypography>Loading...</TextTypography>}
        {this.state.data && this.showSubmissionGrid()}
      </div>
    );
  }
}

export default ViewSubmissions;
