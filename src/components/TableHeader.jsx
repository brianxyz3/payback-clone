import React from "react";
import TableRow from "./TableRow";
import TableHeaderCell from "./TableHeaderCell";

const TableHeader = () => {
  return (
    <TableRow>
        <TableHeaderCell>FirstName</TableHeaderCell>
        <TableHeaderCell>LastName</TableHeaderCell>
        <TableHeaderCell>Contact Phone</TableHeaderCell>
        <TableHeaderCell>Contact Email</TableHeaderCell>
        <TableHeaderCell>Amount Lost</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
    </TableRow>
  )
}

export default TableHeader;