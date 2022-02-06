import React from 'react';

import InputDate from 'components/datePicker/DatePicker';
import Input from 'components/inputs/Input';

const BasicForm = ({ props: { control, errors, dateValue, setDateValue } }) => (
  <React.Fragment>
    <Input
      autoFocus
      label="Nom de l'évènement"
      type="text"
      control={control}
      errors={errors}
      name="title"
      required
      inputProps={{ maxLength: 60, type: 'string' }}
    />

    <InputDate
      control={control}
      errors={errors}
      name="date"
      value={dateValue}
      setValue={setDateValue}
    />
    <Input
      autoFocus
      label="Description"
      type="text"
      multiline
      rows={4}
      control={control}
      errors={errors}
      inputProps={{ maxLength: 300, type: 'string' }}
      name="description"
    />
    <Input
      autoFocus
      label="E-mail"
      type="email"
      control={control}
      errors={errors}
      name="email"
      required
    />
  </React.Fragment>
);

const CommentForm = ({ props: { control, errors } }) => {
  return (
    <React.Fragment>
      <Input
        autoFocus
        label="Votre nom"
        type="text"
        control={control}
        errors={errors}
        name="author"
        required
      />

      <Input
        autoFocus
        label="Votre commentaire"
        type="text"
        multiline
        rows={4}
        control={control}
        errors={errors}
        inputProps={{ maxLength: 140, type: 'string' }}
        required
        name="comment"
      />
    </React.Fragment>
  );
};
export const selectContentFormWithContext = (context, props) => {
  switch (context) {
    case 'basic':
      return <BasicForm props={props} />;
    case 'comment':
      return <CommentForm props={props} />;
    default:
      return <BasicForm props={props} />;
  }
};
