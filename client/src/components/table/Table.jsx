import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

import TableHeadComponent from 'components/table/TableHead';
import TableBodyComponent from 'components/table/TableBody';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getEventsSortByDate, filterArrayByProperty } from 'services/GetEvents';

const useStyles = makeStyles(() => ({
  defaultWidth: {
    '&.css-11xur9t-MuiPaper-root-MuiTableContainer-root': {
      width: '50%',
      margin: 'auto',
    },
  },
  largeWidth: {
    '&.css-11xur9t-MuiPaper-root-MuiTableContainer-root': {
      width: '100%',
    },
  },
}));

export default function EventList({ refreshData, setRefreshData }) {
  const matches = useMediaQuery('(max-width:960px)');

  const [data, setData] = useState([]);
  const [idCell, setIdCell] = useState('');

  const [order, setOrder] = useState('asc');

  const handleRequestSort = (event) => {
    const isAsc = order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setData([]);
    setRefreshData((oldData) => oldData + 1);
  };

  useEffect(() => {
    async function showEventsWithContext() {
      switch (idCell) {
        case 'date':
          await getEventsSortByDate(setData, order);
          break;
        case 'email':
          return filterArrayByProperty('email', setData, order);

        case 'title':
          return filterArrayByProperty('title', setData, order);
        default:
          await getEventsSortByDate(setData, order);
      }
    }
    showEventsWithContext();
  }, [refreshData, order, idCell]);

  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      className={matches ? classes.largeWidth : classes.defaultWidth}
    >
      <Table
        aria-label="simple table"
        className={matches ? classes.largeWidth : classes.defaultWidth}
      >
        <TableHeadComponent
          direction={order}
          onRequestSort={handleRequestSort}
          setIdCell={setIdCell}
        />
        <TableBodyComponent data={data} />
      </Table>
    </TableContainer>
  );
}
