import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BarChartIcon from '@mui/icons-material/BarChart';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

function Cards() {
  return (
    <div style={{display:'flex', justifyContent:"space-between"}}>
    <Card sx={{ display: 'flex', justifyContent:'space-around', width:"48%", height:"18vh", backgroundColor:"white" }}>
      <Box sx={{ display: 'flex'}}>
        <CardContent>
        <Typography component="div" variant="h5">
          Sales
        </Typography>
        <Typography variant="p" color="text.secondary" component="div">
          Today
        </Typography>
        <Typography variant="h4">
          PLN 0.00
        </Typography>
        </CardContent>
        <CardContent>
        <BarChartIcon style={{height:"6vw", width:"5vw", backgroundColor:"rgb(239, 239, 239)"}}/>

        </CardContent>
        
      </Box>
    </Card>
    <Card sx={{ display: 'flex', justifyContent:'space-around', width:"48%", height:"18vh", backgroundColor:"white" }}>
      <Box sx={{ display: 'flex'}}>
        <CardContent>
        <Typography component="div" variant="h5">
          Orders
        </Typography>
        <Typography variant="p" color="text.secondary" component="div">
          Today
        </Typography>
        <Typography variant="h4">
          PLN 0.00
        </Typography>
        </CardContent>
        <CardContent>
        <FormatListNumberedIcon style={{height:"6vw", width:"5vw", backgroundColor:"rgb(239, 239, 239)"}}/>

        </CardContent>
        
      </Box>
    </Card>
    </div>
  )
}

export default Cards