import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios'
// import { withStyles } from "@mui/styles";
// import styled from 'styled-components'

interface Column {
  id: 'tx' | 'fromto' | 'amount';
  label: string;
  minWidth?: number;
  align?: 'left';
  font?: 'Osiris !important';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'tx', label: 'TX', minWidth: 150 },
  { id: 'fromto', label: 'FromTo', minWidth: 180 },
  { id: 'amount', label: 'smn', minWidth: 100 },
];

interface Data {
  date: string;
  nodes: string;
  reward: string;
}

function createData(
  date: string,
  nodes: string,
  reward: string,
): Data {
  return { date, nodes, reward };
}

const TxList = (account) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  const getTransactionList = () => {
    axios.get(`https://explorerapi.avax.network/v2/ctransactions`)
      .then(res => {
        setRows(res.data);
      })
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    getTransactionList();
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    getTransactionList();
  };
  // const classes = useStyles();
  return (
    <Paper style={{ width: '100%', overflow: 'hidden', background: '#2b2b2b', boxShadow: 'none' }} >
      <TableContainer style={{ height: 440 }} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow style={{ background: '#2b2b2b' }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth, background: '#2b2b2b', color: '#faa21a',
                    fontSize: '14px', paddingBottom: '0px', fontFamily: 'Osiris'
                  }}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.tx} style={{ color: 'white' }}>
                    {columns.map((column) => {
                      return (
                        <TableCell key={column.id} align={column.align} style={{ color: 'white' }}>
                          {column.id === 'tx' ? <div>{row.tx}</div> :
                            column.id === 'fromto' ?
                              <div className='d-flex flex-column'>
                                <div className='d-flex'>
                                  <div style={{ color: '#FAA21A' }}>From:</div>
                                  <div style={{ position: 'relative', left: '10px' }}>{row.fr}</div>
                                </div>
                                <div className='d-flex'>
                                  <div style={{ color: '#FAA21A' }}>To:</div>
                                  <div style={{ position: 'relative', left: '34px' }}>{row.to}</div>
                                </div>
                              </div>
                              :
                              <div>{row.val}smn</div>
                          }
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
        style={{ color: '#faa21a' }}
      />
    </Paper >
  );
}

export default TxList;