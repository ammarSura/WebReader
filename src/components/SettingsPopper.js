import React, {useState} from 'react';
import {Popper, IconButton, List, ListItem, ListItemText, Divider, ListItemButton} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ClickAwayListener from '@mui/base/ClickAwayListener';



const SettingsPopper = () => {

    const [ open, setOpen ] = useState(false)
    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div>
        <IconButton sx={{paddingLeft: "0"}} onClick={() => setOpen(true)}>
                    <SettingsIcon fontSize="medium" sx={{paddingBottom: "0.3rem"}}/>
                </IconButton>
        <Popper placement="bottom-end"anchorEl={document.getElementById("bar")} open={open} 
            sx={{boxShadow: 4, background: "#fff", width: "8rem", borderRadius: "0.25rem", marginRight: "1rem"}} modifiers={[
                {
                    name: 'offset',
                    options: {
                        offset: [-1, 1]
                    }
                }
            ]}>
            <List disablePadding>
                <ListItem dense>
                    <ListItemButton dense>
                        <ListItemText>Item 1</ListItemText>
                    </ListItemButton>
                    
                </ListItem>
                <Divider/>
                <ListItem dense>
                    <ListItemButton dense>
                    
                        <ListItemText>Item 1</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Popper>
        </div>
        </ClickAwayListener>
    )
}

export default SettingsPopper
