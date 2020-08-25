import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(CO2_Level, city_origin, product_type, category, traceability) {
    return {CO2_Level, city_origin, product_type, category, traceability};
  }

const rows = [
  createData('5', 'Israel', 'Prigat Orange Juice', 'Beverage', 'Tel Aviv'),
  createData('6', 'USA', 'Tropicana Orange Juice', 'Beverage', 'Brooklyn'),
];

const useStyles = makeStyles({
  table: {
    // width: 400,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <div className ="tableinfo">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >CO2 Level (g) </StyledTableCell>
            <StyledTableCell align="center">City of Origin</StyledTableCell>
            <StyledTableCell align="center">Product Type&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Category&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Traceability&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.CO2_Level}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.CO2_Level}
              </StyledTableCell>
              <StyledTableCell align="center">{row.city_origin}</StyledTableCell>
              <StyledTableCell align="center">{row.product_type}</StyledTableCell>
              <StyledTableCell align="center">{row.category}</StyledTableCell>
              <StyledTableCell align="center">{row.traceability}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}