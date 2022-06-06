import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
   
  return (
      <div>
        <Switch className='switch-btn' {...label} defaultChecked />
    </div>
  );
}