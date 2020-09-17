import * as React from "react";
import { withSytles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";

const TableView = ({ rows, columns }) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {columns
              ? columns.map((col, i) => (
                  <TableCell key={i}>{col.label}</TableCell>
                ))
              : null}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {rows
              ? rows.map((row, i) =>
                  columns.map((col, idx) => (
                    <TableCell key={idx}>{row[col.name]}</TableCell>
                  ))
                )
              : null}
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TableView;
