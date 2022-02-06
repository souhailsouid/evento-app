import React, { useState } from 'react';

import FormDialog from 'components/dialogs/Dialogs';

import EventList from 'components/table/Table';

import styled from 'styled-components';
import './Home.css';

import { makeStyles } from '@mui/styles';
const Div = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  margin: 2rem;
`;

const useStyles = makeStyles(() => ({
  linkStyle: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: '600',
  },
}));
function HomePage() {
  const [refreshData, setRefreshData] = useState(0);

  return (
    <article className="article-app">
      <section className="section-app">
        <FormDialog
          buttonName="Ajouter un évènement"
          contextForm="basic"
          setRefreshData={setRefreshData}
        />
      </section>
      <Div>
        <EventList refreshData={refreshData} setRefreshData={setRefreshData} />
        {/* <section>
          <HistogramComponent />
        </section> */}
      </Div>
    </article>
  );
}

export default HomePage;
