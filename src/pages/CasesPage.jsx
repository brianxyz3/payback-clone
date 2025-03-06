import React from "react";
import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import TableBodyCell from "../components/TableBodyCell";

const CasesPage = () => {
  return (
      <section className="h-dvh overflow-auto">
        <Table>
            <thead>
                <TableHeader/>
            </thead>

            <tbody>
                <TableRow>
                    <TableBodyCell>person</TableBodyCell>
                    <TableBodyCell>person</TableBodyCell>
                    <TableBodyCell>person</TableBodyCell>
                    <TableBodyCell>person</TableBodyCell>
                    <TableBodyCell>person</TableBodyCell>
                    <TableBodyCell>person</TableBodyCell>
                </TableRow>
            </tbody>
        </Table>
    </section>
  )
}

export default CasesPage;