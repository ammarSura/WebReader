import React, {useState} from 'react';
import useContext from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Input, Typography, List, ListItem, ListItemIcon, ListItemButton, ListItemText, Menu, MenuItem, Accordion, Popper, Slider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import useTheme  from '@mui/material/styles/useTheme';
import SearchBar from './SearchBar';
import Drawer from '@mui/material/Drawer';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ContentDrawer from './ContentDrawer';
import SizingPopper from './SizingPopper';
import FontSlider from './FontSlider';
import BrightnessSlider from './BrightnessSlider';
import SettingsPopper from './SettingsPopper';


const NavBar = () => {

    const theme = useTheme();
    
    return (
    
        <AppBar sx={{}}>
            <Toolbar sx={{paddingBottom: "0"}} id="bar">
                <ContentDrawer/>
            
                <SearchBar/>
                
                
                <FontSlider initValue={50}/>
                <BrightnessSlider initValue={50}/>
                
                {/* <SizingPopper initValue={12}/> */}
                <SettingsPopper/>
                
                
                
                
                
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;
