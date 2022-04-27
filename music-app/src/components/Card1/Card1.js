import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '../Buttons/Switch'
import './Card.css'

export default function BasicCard1() {
  return (
    <Card className='card-1' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Master Volume
        </Typography>
        <Typography variant="body2">
          Overrides all other sounds <br /> 
          settings in this app
        </Typography>
      </CardContent>
      <Switch />
    </Card>

  );
}