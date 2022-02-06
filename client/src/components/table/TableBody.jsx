import React from 'react';
import { useNavigate } from 'react-router-dom';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';

import { makeStyles } from '@mui/styles';

import { convertIntoFrenchDate, isEventSoon, isEventPast } from 'services/Date';

import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  row: {
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'rgb(255, 227, 192)',
      opacity: '0.63',
    },
  },
  link: {
    '&.css-177gid-MuiTableCell-root': {
      '&:hover': {
        color: '#000',
        textDecoration: ' underline',
        opacity: '1',
        fontWeight: '900',
      },
    },
  },
  warning: {
    '&.css-177gid-MuiTableCell-root': {
      color: '#cc4949',
      fontWeight: '700',
      '&:hover': {
        color: '#cc4949',
        textDecoration: ' underline',
        opacity: '1',
        fontWeight: '900',
      },
    },
  },

  grey: {
    '&.css-177gid-MuiTableCell-root': {
      color: 'grey',
      fontWeight: '700',
      '&:hover': {
        color: 'grey',
        textDecoration: ' underline',
        opacity: '1',
        fontWeight: '900',
      },
    },
  },
}));

export default function TableBodyComponent({ data }) {
  const navigate = useNavigate();

  const classes = useStyles();

  return (
    <TableBody>
      {data.map((row) => {
        const { date } = row;

        const eventWithinTenDays =
          isEventSoon(date) === true ? classes.warning : classes.link;

        const eventPast =
          isEventPast(date) === true ? classes.grey : classes.link;

        return (
          <TableRow
            onClick={() => navigate(`/event/${row.id}`)}
            className={classes.row}
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>{convertIntoFrenchDate(date)}</TableCell>
            <TableCell
              align="right"
              className={clsx(eventWithinTenDays, eventPast)}
            >
              {row.title}
            </TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">
              {row.description?.substr(0, 40) + '...'}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
