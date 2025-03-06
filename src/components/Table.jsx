import React from "react";

const Table = ({ children }) => {
  return (
    <table className="w-dvw overflow-scroll">
        {children}
    </table>
  )
}

export default Table;