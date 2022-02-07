import * as React from 'react';
import frLocale from 'date-fns/locale/fr';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import { Controller } from 'react-hook-form';

const localeMap = {
  fr: frLocale,
};

const maskMap = {
  fr: '__/__/____',
};

export default function InputDate({ name, control, errors, value, setValue }) {
  const [locale] = React.useState('fr');

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      locale={localeMap[locale]}
    >
      <Stack spacing={3}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <DesktopDatePicker
              {...field}
              mask={maskMap[locale]}
              label="Date de l'évènement"
              value={value}
              minDate={new Date('2010-01-01')}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} variant="standard" required />
              )}
            />
          )}
        />
        <p>{errors?.date?.message}</p>
      </Stack>
    </LocalizationProvider>
  );
}
