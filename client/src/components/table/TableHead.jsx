import * as React from 'react';

import TableCell from '@mui/material/TableCell';

import TableSortLabel from '@mui/material/TableSortLabel';

const headCells = [
  {
    id: 'date',
    numeric: false,
    disablePadding: true,
    label: 'date',
  },
  {
    id: 'title',
    numeric: false,
    disablePadding: false,
    label: 'Titre',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'description',
    numeric: false,
    disablePadding: false,
    label: 'Description',
  },
];

export default function TableHeadComponent({
  active,
  direction,
  setIdCell,
  onRequestSort,
}) {
  const handleClick = (id) => {
    setIdCell(id);
    onRequestSort();
  };
  const alignLabel = (id) => {
    if (id === 'date') return 'left';
    if (id === 'title') return 'center';
    return 'right';
  };
  return headCells.map((headCell) => (
    <TableCell
      key={headCell.id}
      align={alignLabel(headCell.id)}
      padding="normal"
    >
      <TableSortLabel
        disabled={headCell.label === 'Description'}
        active
        direction={direction}
        onClick={() => handleClick(headCell.id)}
      >
        {headCell.label}
      </TableSortLabel>
    </TableCell>
  ));
}
