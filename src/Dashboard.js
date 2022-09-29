import React from 'react'
import Typography from '@mui/material/Typography';
import Cards from './Cards';
import Accordian from './Accordian';
import Products from './Products';
function Dashboard() {

  return (
    <div style={{width:"50vw"}}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
            Hello there, admin@example.com
        </Typography>
        <Typography variant="p" fontWeight={500} gutterBottom>
            Here is some information we gathered about your store
        </Typography><br/><br/><br/>
    <Cards /><br/><br/>
    <Accordian /><br/>
    <Products />
    </div>
  )
}

export default Dashboard