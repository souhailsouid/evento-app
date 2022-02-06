import * as React from 'react';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import clsx from 'clsx';

import { useStyles } from 'components/formulaires/Formulaire.style';
import { selectContentFormWithContext } from 'components/formulaires/Content';

export default function Formulaire({
  contextForm,
  onClose,
  onSubmit,
  control,
  errors,
  setValue,
}) {
  const classes = useStyles();

  const [dateValue, setDateValue] = React.useState(new Date());

  const props = { control, errors, dateValue, setDateValue };

  const titleForm =
    contextForm === 'comment' ? 'Nouveau commentaire' : 'Nouvel évènement';

  const handleDate = () => {
    setValue('date', dateValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <DialogTitle>{titleForm}</DialogTitle>
      <DialogContent className={classes.fullWidth}>
        {selectContentFormWithContext(contextForm, props)}
      </DialogContent>
      <DialogActions>
        <Button className={classes.cancelButton} onClick={onClose}>
          Annuler
        </Button>
        <Button
          className={clsx(classes.primaryColor, classes.text)}
          type="submit"
          onClick={contextForm === 'basic' && handleDate}
        >
          Soumettre
        </Button>
      </DialogActions>
    </form>
  );
}
