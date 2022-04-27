import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from "../Buttons/Slider";
import './Card.css'

export default function BasicCard() {
  return (
    <Card className='card-2' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Master Volume
        </Typography>
        <Typography variant="body2">
          Overrides all other sounds <br /> 
          settings in this app
        </Typography>
      </CardContent>
      <Slider />
    </Card>
  );
}