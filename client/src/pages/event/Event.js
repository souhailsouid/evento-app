import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FormDialog from 'components/dialogs/Dialogs';
import CardComponent from 'components/card/Card';

import CommentsList from 'components/comment/Comment.jsx';
import { Article, Section } from './Event.style.js';
function EventPage() {
  const params = useParams();

  const [refreshData, setRefreshData] = useState(0);

  return (
    <Article>
      <CardComponent id={params?.id} refreshData={refreshData} />
      <Section>
        <FormDialog
          buttonName="Ajouter un commentaire"
          contextForm="comment"
          setRefreshData={setRefreshData}
          id={params.id}
        />
        <CommentsList refreshData={refreshData} id={params.id} />
      </Section>
    </Article>
  );
}

export default EventPage;
