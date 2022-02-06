import * as yup from 'yup';

const SchemaEventForm = yup
  .object({
    title: yup.string().required('Veuillez saisir un titre'),
    description: yup.string(),
    email: yup
      .string()
      .email('Merci de renseigner un e-mail valide')
      .required('Veuillez saisir une adresse e-mail'),
    date: yup.string().required('Veuillez selectionner une date'),
  })
  .required();

const SchemaCommentForm = yup
  .object({
    author: yup.string().required('Veuillez saisir votre prénom'),
    comment: yup.string().required('Veuillez saisir un commentaire'),
  })
  .required();

export const switchSchemaWithContext = (contextForm) => {
  switch (contextForm) {
    case 'basic':
      return SchemaEventForm;
    case 'comment':
      return SchemaCommentForm;
    default:
      return SchemaEventForm;
  }
};
