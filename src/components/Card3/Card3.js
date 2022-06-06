import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Dropdown from '../Buttons/Dropdown'
import './Card.css'

export default function BasicCard3() {
  return (
    <Card className='card-3' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h1>Sound Quality</h1>
        </Typography>
        <Typography variant="body2">
          <p className='box-text'>Manually control the music<br></br>
          quality in even of poor<br></br>
          connection</p>
        </Typography>
      </CardContent>
      <Dropdown />
    </Card>
    )
}