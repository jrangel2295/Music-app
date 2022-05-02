import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '../Buttons/Switch'
import './Card.css'

export default function BasicCard1(props) {
  function handleClick(){
    props.setIsOnline(!props.IsOnline)
  }
  return (
    <Card className='card-1' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h1>Online Mode</h1>
        </Typography>
        <Typography variant="body2">
          <p className='box-text'> is this application connected to the internet?</p>
        </Typography>
      </CardContent>
      <Switch onClick={handleClick}/>
    </Card>

  );
}