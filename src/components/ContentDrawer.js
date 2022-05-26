import React, {useState} from 'react'
import Drawer from '@mui/material/Drawer';
import { Input, Typography, List, ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useTheme  from '@mui/material/styles/useTheme';
import IconButton from '@mui/material/IconButton';
import ListIcon from '@mui/icons-material/List';
import Divider from '@mui/material/Divider';
import ClickAwayListener from '@mui/base/ClickAwayListener';


const ContentDrawer = () => {

    const theme = useTheme();
    const [ open, setOpen ] = useState(false);

    return (
        <>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div>
        <Drawer variant="persistent" open={open} PaperProps={{sx: {background: "#EDECEE", width: "40%"}}} onClose={() => setOpen(false)}>
            <List sx={{paddingBottom: "0"}}>
                <ListItem alignItems="flex-start" sx={{paddingTop: "0", paddingBottom: "0"}}>
                    <ListItemButton onClick={() => setOpen(false)} disableGutters>
                        <ArrowBackIosIcon sx={{}}/>
                            
                        
                        <ListItemText sx={{leftMargin: "auto"}}children={<Typography children="Content" variant="button"/>}></ListItemText>
                        
                    </ListItemButton> 


                </ListItem> 
                <ListItem>
                    <ListItemText children="Introduction"></ListItemText>
                </ListItem>
                <Divider/>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
                    return (
                        <div key={num}>
                        <ListItem>
                            <ListItemButton disableGutters sx={{padding: "0"}}>
                                <ListItemText children={"Chapter " + (num + 1)}></ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <Divider/>
                        </div>
                    );
                })}
                
            </List>
        </Drawer>
        {/* </ClickAwayListener> */}
        <IconButton children="hi" onClick={() => setOpen(!open)}>
            <ListIcon/> 
        </IconButton> 
        </div>
        </ClickAwayListener>
        </>
       
                
    )
}

export default ContentDrawer;