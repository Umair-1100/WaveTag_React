import React from "react";
import { useTable } from "react-table";

export const ContactTable = () => {
  const columns = React.useMemo(
    () => [
      { Header: "SL_NO", accessor: "SL_NO" },
      { Header: "Name", accessor: "name" },
      { Header: "Mobile", accessor: "Mobile" },
      { Header: "Email", accessor: "Email" },
      { Header: "Date", accessor: "Date" },
      { Header: "Message", accessor: "Message" },
      {
        Header: "View From",
        Cell: ({ row }) => (
          <button
            onClick={() => handleButtonClick(row.original)}
            className="py-1 hover:bg-[#1814f3] hover:text-white text-lg px-7 rounded-lg border-[1px] border-[#000] hover:border-[#1814f3]"
          >
            View
          </button>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        SL_NO: "01.",
        name: "John Doe",
        Mobile: "+92 502297033166",
        Email: "johndoe@example.com",
        Date: "8/14/2023",
        Message:
          "Regarded in terms of its content rather than its physical form...",
      },
      {
        SL_NO: "02.",
        name: "Jane Doe",
        Mobile: "+92 502297033166",
        Email: "janedoe@example.com",
        Date: "8/14/2023",
        Message:
          "Regarded in terms of its content rather than its physical form...",
      },
      {
        SL_NO: "03.",
        name: "Jack Doe",
        Mobile: "+92 502297033166",
        Email: "jackdoe@example.com",
        Date: "8/14/2023",
        Message:
          "Regarded in terms of its content rather than its physical form...",
      },
      {
        SL_NO: "04.",
        name: "Jack Doe",
        Mobile: "+92 502297033166",
        Email: "jackdoe@example.com",
        Date: "8/14/2023",
        Message:
          "Regarded in terms of its content rather than its physical form...",
      },
      {
        SL_NO: "05.",
        name: "Jack Doe",
        Mobile: "+92 502297033166",
        Email: "jackdoe@example.com",
        Date: "8/14/2023",
        Message:
          "Regarded in terms of its content rather than its physical form...",
      },
      {
        SL_NO: "06.",
        name: "Jack Doe",
        Mobile: "+92 502297033166",
        Email: "jackdoe@example.com",
        Date: "8/14/2023",
        Message:
          "Regarded in terms of its content rather than its physical form...",
      },
      {
        SL_NO: "07.",
        name: "Jack Doe",
        Mobile: "+92 502297033166",
        Email: "jackdoe@example.com",
        Date: "8/14/2023",
        Message:
          "Regarded in terms of its content rather than its physical form...",
      },
      {
        SL_NO: "08.",
        name: "Jack Doe",
        Mobile: "+92 502297033166",
        Email: "jackdoe@example.com",
        Date: "8/14/2023",
        Message:
          "Regarded in terms of its content rather than its physical form...",
      },
      {
        SL_NO: "09.",
        name: "Jack Doe",
        Mobile: "+92 502297033166",
        Email: "jackdoe@example.com",
        Date: "8/14/2023",
        Message:
          "Regarded in terms of its content rather than its physical form...",
      },
      {
        SL_NO: "10.",
        name: "Jack Doe",
        Mobile: "+92 502297033166",
        Email: "jackdoe@example.com",
        Date: "8/14/2023",
        Message:
          "Regarded in terms of its content rather than its physical form...",
      },
      {
        SL_NO: "11.",
        name: "Jack Doe",
        Mobile: "+92 502297033166",
        Email: "jackdoe@example.com",
        Date: "8/14/2023",
        Message:
          "Regarded in terms of its content rather than its physical form...",
      },
    ],
    []
  );

  const handleButtonClick = () => {
    alert(`View page is not found...`);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()} className="w-full text-left">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="border-b-2 border-[#f4f5fa] px-8 "
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="border-b-2 border-[#f4f5fa] py-4 font-medium text-[1.1rem] px-8"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className="border-b-2 border-[#f4f5fa] px-8"
            >
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="py-3 px-7">
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
