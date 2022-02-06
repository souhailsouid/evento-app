import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { getEventById } from 'services/GetEvents';
import { convertIntoFrenchDate } from 'services/Date';

const CardComponent = ({ data: { id, title, email, date, description } }) => {
  return (
    <Card variant="outlined" key={id}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {email}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {convertIntoFrenchDate(date)}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default function CardList({ id, refreshData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function showList() {
      const result = await getEventById(id);
      return setData(result);
    }
    showList();
  }, [id, refreshData]);

  const showEvent = data?.map((event) => <CardComponent data={event} />);
  return showEvent;
}
