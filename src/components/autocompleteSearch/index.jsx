import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutocompleteSearch({options=[],label,onSubmit,value}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      value={value}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
      onChange={(event,newValue)=>{onSubmit(newValue?.label)}}
    />
  );
}