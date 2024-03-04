import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export default function DatePicker({setDepartureDate,setReturnDate}) {
  const onChangeHandler = (value,context) => {
    setDepartureDate({day:value?.[0]?.get("D"),month:value?.[0]?.get("M")+1,year:value?.[0]?.get("y")})
    setReturnDate({day:value?.[1]?.get("D"),month:value?.[1]?.get("M")+1,year:value?.[1]?.get("y")})
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker onChange={onChangeHandler} localeText={{ start: 'Departure', end: 'Return' }} />
      </DemoContainer>
    </LocalizationProvider>
  );
}