import * as React from 'react';
import Button from '@mui/material/Button';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Dialog from '@mui/material/Dialog';
import { makeStyles } from '@mui/styles';
import Formulaire from 'components/formulaires/Formulaire';
import PostEvent from 'services/PostEvent';
import { switchSchemaWithContext } from 'services/Yup.utils';
import { AddCommentToExistingEvent } from 'services/PutEvents';

const useStyles = makeStyles(() => ({
  marginAuto: {
    display: 'flex',
    margin: 'auto',
  },
}));

export default function FormDialog({
  buttonName,
  contextForm,
  setRefreshData,
  id,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(switchSchemaWithContext(contextForm)),
  });

  const switchServiceWithContext = (data) => {
    switch (contextForm) {
      case 'basic':
        return PostEvent(data);
      case 'comment':
        return AddCommentToExistingEvent(id, data);
      default:
        return PostEvent(data);
    }
  };

  const onSubmit = async (data) => {
    switchServiceWithContext(data);
    handleClose();
    setRefreshData((oldData) => oldData + 1);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={classes.marginAuto}
      >
        {buttonName}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Formulaire
          contextForm={contextForm}
          onSubmit={handleSubmit(onSubmit)}
          onClose={handleClose}
          control={control}
          errors={errors}
          setValue={setValue}
        />
      </Dialog>
    </div>
  );
}
