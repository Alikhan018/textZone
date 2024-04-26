import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DatePicker from "./DatePicker";
// import { useState } from "react";

export default function AddressForm() {
    // const [dailyRoutine, setDailyRoutine] = useState(0);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="PatientName"
            name="Patient Name"
            label="Patient's Name"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="PatientName"
            name="Patient Age"
            label="Patient's Age"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DatePicker label="Date of Birth" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="medicine"
            name="Medicine Name"
            label="Medicine Name"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DatePicker label="Starting Date" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numberofDays"
            name="numberDays"
            label="Number of Days"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dailyRoutine"
            name="dailyRoutine"
            label="Daily Routine"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dailyDosage"
            name="dailyDosage"
            label="Daily Dosage"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
