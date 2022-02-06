import React, { useState } from 'react';

import FormDialog from 'components/dialogs/Dialogs';

import EventList from 'components/table/Table';
import HistogramComponent from 'components/histogram/Histogram';
import styled from 'styled-components';
import './Home.css';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  margin: 2rem;
`;

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
        <HistogramComponent />
      </Div>
    </article>
  );
}

export default HomePage;
