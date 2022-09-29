import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from '@mui/material/Typography';

function Products() {
  return (
    <div style={{backgroundColor:"white", borderRadius:"5px"}}>
    <Box
    sx={{ width: "100%", fontWeight:"bolder"}}
    role="presentation"
    >
        <List>
        <Typography component="div" variant="h6" style={{paddingLeft:"1vw", fontWeight:"bold"}}>
        Top Products
        </Typography>
        {[["No products found", ""]].map((text, index) => (
        <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemText primary={text[0]}/>
            </ListItemButton>
        </ListItem>
        ))}
    </List>
    </Box>
    </div>
  )
}

export default Products