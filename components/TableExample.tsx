import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import React from "react";
import { useTable } from "react-table";
import makeData from "../makeData";

import zip from "just-zip-it";
const columns = [
  {
    Header: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
    ],
  },
  {
    Header: "Info",
    columns: [
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Visits",
        accessor: "visits",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Profile Progress",
        accessor: "progress",
      },
    ],
  },
];

export function TableExample() {
  const data = React.useMemo(() => makeData(3), []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  const headerGroupColumns = headerGroups.map((headerGroup) => {
    const props = headerGroup.getHeaderGroupProps();
    console.log("headergroup", props);

    const headers = headerGroup.headers;
    console.log(headers);
    return headers.flatMap((header) => {
      const props = header.getHeaderProps();

      const colSpan = (props as any)?.colSpan ?? 1;
      const elm = (
        <th
          {...header.getHeaderProps()}
          colSpan={1}
          rowSpan={colSpan}
          role="rowheader"
        >
          {header.render("Header")}
        </th>
      );
      return [...Array(colSpan).keys()].map((i) => (i === 0 ? elm : null));
    });
  });

  const dataColumns = rows.map((row) => {
    prepareRow(row);
    return row.cells.map((cell) => {
      //eslint-disable-next-line react/jsx-key
      return <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>;
    });
  });

  console.log(headerGroupColumns);
  console.log(dataColumns);

  const transposedRows = zip(...headerGroupColumns, ...dataColumns);
  console.log(transposedRows);
  //const headers =
  //const dataElements =
  return (
    <Table {...getTableProps()}>
      <Tbody {...getTableBodyProps()}>
        {transposedRows.map((row: React.ReactNode[]) => {
          //TODO: key
          return (
            //eslint-disable-next-line react/jsx-key
            <Tr>
              {row.map((cell) => {
                return cell;
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
