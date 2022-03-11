import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// import { withStyles } from "@mui/styles";
// import styled from 'styled-components'

interface Column {
  id: 'nodes' | 'date' | 'reward';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'nodes', label: 'Standalone Nodes', minWidth: 220 },
  { id: 'date', label: 'Creation Date', minWidth: 100 },
  { id: 'reward', label: 'Rewards', minWidth: 100, align: 'right' },
];

interface Data {
  nodes: string;
  date: string;
  reward: string;
}

function createData(
  nodes: string,
  date: string,
  reward: string,
): Data {
  return { nodes, date, reward };
}

const NodesList = (account) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [nList, setnList] = useState([]);

  // useEffect(() => {
  // const handNList = () => {
  const rows = [];
  // for (let i = 0; i < 3; i++) {
  //   rowsTemp.push(createData('1', `${i}`, '1'));
  // }
  // setnList(rowsTemp);
  // }

  // handNList();
  // })

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // const classes = useStyles();
  return (
    <Paper style={{ width: '100%', overflow: 'hidden', background: '#2b2b2b' }} >
      <TableContainer style={{ height: 440 }} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow style={{ background: '#2b2b2b' }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, background: '#2b2b2b', color: '#faa21a', fontSize: '16px' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.date} style={{ color: 'white' }}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ color: 'white' }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ color: '#faa21a', display: rows.length > rowsPerPage ? 'block' : 'none' }}
      />
    </Paper >
  );
}

export default NodesList;