import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import S_svg from './assets/icons8-schoology.svg'

function NavBar() {
  return (
    <div>
    <Box
    sx={{ width: 250, fontWeight:"bolder", paddingRight:"0"}}
    role="presentation"
    >
    <img src={S_svg} alt="svg" />
        <List>
        {[["Home", <DashboardOutlinedIcon />], ["Catalog", <InboxOutlinedIcon />], ["Orders", <ShoppingCartOutlinedIcon />], ["Customers", <PermIdentityRoundedIcon />], ["Discounts", <DiscountOutlinedIcon />],["Pages", <DescriptionOutlinedIcon />],["Apps", <WidgetsOutlinedIcon />],["Translations", <TranslateOutlinedIcon />],["Configurations", <SettingsOutlinedIcon />]].map((text, index) => (
        <ListItem key={text} disablePadding>
            <ListItemButton>
            <ListItemIcon>
            {text[1]}
                {/*{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
            </ListItemIcon>
            <ListItemText primary={text[0]}/>
            </ListItemButton>
        </ListItem>
        ))}
    </List>
    </Box>
    </div>
  )
}

export default NavBar