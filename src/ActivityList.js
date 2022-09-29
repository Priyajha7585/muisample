import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from '@mui/material/Typography';

function ActivityList() {
  return (
    <div>
    <Box
    sx={{ width: 250, fontWeight:"bolder", paddingTop:"10vh", paddingBottom:"10vh", backgroundColor:"white", borderRadius:"5px"}}
    role="presentation"
    >
        <List>
        <Typography component="div" variant="h6" style={{paddingLeft:"2vw", fontWeight:"bold"}}>
        Activity
        </Typography>
        {[["Order #11639 was placed", "a day ago"], ["Order #11638 was placed", "2 days ago"], ["Order #11637 was placed", "2 days ago"], ["Order #11636 was placed", "2 days ago"], ["Order #11635 was placed", "2 days ago"]].map((text, index) => (
        <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemText primary={text[0]} secondary={text[1]}/>
            </ListItemButton>
        </ListItem>
        ))}
    </List>
    </Box>
    </div>
  )
}

export default ActivityList