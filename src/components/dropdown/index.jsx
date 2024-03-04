import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({label,options,onSubmit}) {
  const [value, setvalue] = React.useState('');

  const handleChange = (event) => {
    onSubmit(event.target.value)
    setvalue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {
            options?.map(option=><MenuItem value={option?.label}>{option?.label}</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
}
