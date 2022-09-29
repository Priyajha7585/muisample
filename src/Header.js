import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { lightBlue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

function Header() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <>
    <div style={{display:"flex", justifyContent: "flex-end", width: "100vw"}}>
    <ElectricBoltRoundedIcon style={{padding:"1%"}}/>
    <FormControl sx={{ m: 1, minWidth: 150,  backgroundColor:"white"}} size="small">
      <InputLabel id="demo-select-small">Channel-PLN</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>Option1</MenuItem>
        <MenuItem value={2}>Option2</MenuItem>
        <MenuItem value={3}>Option3</MenuItem>
      </Select>
    </FormControl>
    <Stack direction="row" spacing={2} style={{padding:"0.5%"}}>
      <Avatar sx={{ bgcolor: lightBlue[500] }}>AD</Avatar>
      <Typography variant="h6" fontWeight={500} style={{padding:"1%"}} gutterBottom>
            admin@example.com
        </Typography>
    </Stack>
    </div><br/><br/><br/>
    </>
  )
}

export default Header