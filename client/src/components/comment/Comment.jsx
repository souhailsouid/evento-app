import React, { useEffect, useState } from 'react';

import { Card, Description, Auteur, Span } from './Comment.style.js';

import { getEventById } from 'services/GetEvents';
import { convertIntoFrenchDate } from 'services/Date';
const CommentCard = ({ comment: { author, date, comment } }) => {
  return (
    <Card>
      <header>
        <Auteur>{author}</Auteur>
        <Span>{convertIntoFrenchDate(date)}</Span>
      </header>
      <Description>{comment}</Description>
    </Card>
  );
};

export default function CommentsList({ refreshData, id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function showList() {
      const result = await getEventById(id);
      return setData(result);
    }
    showList();
  }, [refreshData, id]);

  const showComments = data?.map((event) => {
    const { comments } = event;
    return comments?.map((comment) => <CommentCard comment={comment} />);
  });

  return showComments;
}
