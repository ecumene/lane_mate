import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

function createData(
  carrierName,
  phoneNumber,
  dispatchEmail,
  contactName,
  rate,
  notes
) {
  return { carrierName, phoneNumber, dispatchEmail, contactName, rate, notes };
}

const rows = [];

export default function CarrierTable() {
  const [carrierName, setCarrierName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dispatchEmail, setDispatchEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [rate, setRate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    const newEntry = createData(
      carrierName,
      phoneNumber,
      dispatchEmail,
      contactName,
      rate,
      notes
    );
    rows.push(newEntry);
    setCarrierName("");
    setPhoneNumber("");
    setDispatchEmail("");
    setContactName("");
    setRate("");
    setNotes("");
  };

  return (
    <div>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={carrierName}
          onChange={(e) => setCarrierName(e.target.value)}
          label="Carrier Name"
          variant="outlined"
          margin="normal"
          color="secondary"
          required
        />
        <TextField
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          label="Phone Number"
          variant="outlined"
          margin="normal"
          color="secondary"
          required
        />
        <TextField
          value={dispatchEmail}
          onChange={(e) => setDispatchEmail(e.target.value)}
          label="Dispatch Email"
          variant="outlined"
          margin="normal"
          color="secondary"
          required
        />
        <TextField
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          label="Contact Name"
          variant="outlined"
          margin="normal"
          color="secondary"
        />
        <TextField
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          label="Rate"
          variant="outlined"
          margin="normal"
          color="secondary"
          required
        />
        <TextField
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          label="Notes"
          variant="outlined"
          margin="normal"
          color="secondary"
          multilinerows="4"
        />

        <Button variant="contained" color="primary" type="submit" size="large">
          Add Carrier
        </Button>
      </Box>
      <p></p>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Carrier Name</TableCell>
                <TableCell align="right">Phone Number</TableCell>
                <TableCell align="right">Dispatch Email</TableCell>
                <TableCell align="right">Contact Name</TableCell>
                <TableCell align="right">Rate</TableCell>
                <TableCell align="right">Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.carrierName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.carrierName}
                  </TableCell>
                  <TableCell align="right">{row.phoneNumber}</TableCell>
                  <TableCell align="right">{row.dispatchEmail}</TableCell>
                  <TableCell align="right">{row.contactName}</TableCell>
                  <TableCell align="right">{row.rate}</TableCell>
                  <TableCell align="right">{row.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
