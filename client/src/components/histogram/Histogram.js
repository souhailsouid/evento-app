import React, { useEffect, useState } from 'react';
import Histogram from 'react-chart-histogram';
import styled from 'styled-components';
import { getEventsSortByDate } from 'services/GetEvents';
import {
  labelsDiagram,
  valuesDiagram,
  numberOfEventsPerDays,
} from 'services/Histogram';

const Div = styled.div`
  border: 1px solid lightGrey;
  margin: 2rem auto;
`;

const HistogramComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function loadEvents() {
      const results = await getEventsSortByDate(setData, 'asc');
      return results;
    }
    loadEvents();
  }, []);

  const adapteFormatDate = data.map((event) => {
    return {
      ...event,
      date: new Date(event.date).toLocaleDateString('fr-FR'),
    };
  });
  const datesToCompare = adapteFormatDate.map((event) => event.date);

  const dates = labelsDiagram();

  const labels = dates?.map((date) =>
    new Date(date).toLocaleDateString('fr-FR')
  );
  var first = [1, 2, 3, 4, 5];
  var second = [4, 5, 6];
  console.log('datesToCompare', datesToCompare);
  var difference = labels.filter(
    (date) =>
      datesToCompare.indexOf(date) === -1 &&
      numberOfEventsPerDays(datesToCompare)
  );
  console.log('diffren', difference);
  const findindex = labels.findIndex((index) => index === datesToCompare);
  console.log('findindex', findindex);
  const values = valuesDiagram();

  const newEvents = numberOfEventsPerDays(datesToCompare);

  console.log('lbael', labels, 'valuesssssvaluesssss', values);
  console.log('datatocompare', datesToCompare);
  //   const obj2Index = [newEvents].findIndex((event) => event.label);
  //   const objIndex = values.findIndex((event) => event.label === '08/02/2022');
  //   const datesEvent = Object.keys(newEvents);
  //   const obj2 = datesEvent.map((event) => Object.assign({ label: event }));
  const datas = Object.values(newEvents);
  //   const obj1 = datas.map((event) => Object.assign({ value: event }));
  //   console.log('datas', datas, obj2.concat(obj1));
  const options = {
    fillColor: 'rgb(255, 227, 192)',
    strokeColor: 'rgb(255, 227, 192)',
  };
  //   const storedArray = [
  //     { name: 'John', age: 25, courses: 5 },
  //     { name: 'Jane', age: 21, courses: 3 },
  //     { name: 'Joanna', age: 19, courses: 2 },
  //     { name: 'Jim', age: 20, courses: 4 },
  //   ];
  //   const inputArray = [
  //     { name: 'Jane', age: 23, courses: 0 },
  //     { name: 'John', age: 25, courses: 0 },
  //     { name: 'Morris', age: 18, courses: 0 },
  //   ];
  //   const res = values.reduce((acc, curr) => {
  //     const stored = [eventToPush].find(({ label }) => label === curr.label);
  //     if (stored) {
  //       stored.age = curr.age;
  //       acc.push(stored);
  //     } else {
  //       acc.push(curr);
  //     }
  //     return acc;
  //   }, []);
  //   console.log('final', res);

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
