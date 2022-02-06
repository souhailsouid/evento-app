import React from 'react';

import { Controller } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const ErrorDescription = styled.p`
  color: #d32f2f;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin-top: 3px;
  margin-bottom: 14px;
  margin-left: 4px;
}
`;

export default function Input({
  control,
  errors,
  value,
  name,
  label,
  placeholder,
  type,
  multiline,
  rows,
  required,
  inputProps,
}) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            error={errors[name]?.message}
            {...field}
            margin="dense"
            fullWidth
            variant="standard"
            label={label}
            placeholder={placeholder}
            type={type}
            value={value}
            multiline={multiline}
            rows={rows}
            required={required}
            inputProps={inputProps}
          />
        )}
      />

      <ErrorDescription>{errors[name]?.message}.</ErrorDescription>
    </>
  );
}
