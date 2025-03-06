import React from "react";

const TableHeaderCell = ({children}) => {
  return (
      <th className="border border-collapse border-x-black">{children}</th>
  )
}

export default TableHeaderCell;