import React, { useEffect, useState } from 'react';
import Histogram from 'react-chart-histogram';
import styled from 'styled-components';
import { getEventsSortByDate } from 'services/GetEvents';
import { labelsDiagram, numberOfEventsPerDays } from 'services/Histogram';

const Div = styled.div`
  border: 1px solid lightGrey;
  margin: 2rem auto;
`;

const HistogramComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      await getEventsSortByDate(setData, 'asc');
    }
    loadEvents();
  }, []);

  const dates = labelsDiagram();

  const adapteFormatDate = data.map((event) => {
    return {
      ...event,
      date: new Date(event.date).toLocaleDateString('fr-FR'),
    };
  });

  const datesToCompare = adapteFormatDate?.map((event) => event.date);

  const labels = dates?.map((date) =>
    new Date(date).toLocaleDateString('fr-FR')
  );

  const eventsPerDays = numberOfEventsPerDays(datesToCompare);

  const datas = labels.map((label) => eventsPerDays[label] || 0);

  const options = {
    fillColor: 'rgb(255, 227, 192)',
    strokeColor: 'rgb(255, 227, 192)',
  };

  return (
    <Div>
      <Histogram
        xLabels={labels}
        yValues={datas}
        width="1600"
        height="600"
        options={options}
      />
    </Div>
  );
};

export default HistogramComponent;
