import React, {useState} from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import TextFieldsIcon from '@mui/icons-material/TextFields';

import {Popper, Slider, Typography, Stack} from '@mui/material';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const SizingPopper = ({initValue, mainIcon, mainIcon2, decreaseIcon, increaseIcon, id1, type}) => {
    const [ open, setOpen ] = useState(false);
    const [ value, setValue ] = useState(initValue);

    const changeButton = (sign) => {
        if (sign === 0) {           
            setValue(value - 1);
        } else {
            setValue(value + 1)
        }
    }
    
    return (
        

        <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div style={{borderWidth: "thin", marginBottom: "0"}} >
        <IconButton sx={{marginRight: "1rem"}} onClick={() => setOpen(true)}>
            {/* <TextFieldsIcon fontSize="medium" sx={{paddingBottom: "0.3rem"}}/> */}
            {mainIcon}
        </IconButton>

        <Popper disablePortal anchorEl={document.getElementById("bar")} open={open} sx={{ boxShadow: 4, background: "#fff", width: "12rem", paddingLeft: "0.25rem", paddingRight: "0.25rem", borderRadius: "0.25rem", paddingBottom: "0.5rem"}} modifiers={
            [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 30],
                    },
                },
                
            ]
            }>
            <Stack>
                
                <Stack direction="row">
                    <IconButton onClick={() => changeButton(0)}>
                        <RemoveIcon color="primary" sx={{marginTop: "auto", marginBottom: "auto", marginRight: "0rem", border: "solid", borderWidth: "thin", fontSize: "large", borderRadius: "1rem"}}/>
                    </IconButton>
                    
                    <Slider size="small"value={value} onChange={(e, newValue) => setValue(newValue)} valueLabelDisplay="on"/>
                    <IconButton onClick={() => changeButton(1)}>
                        <AddIcon color="primary" sx={{marginTop: "auto", marginBottom: "auto", marginLeft: "0rem", border: "solid", borderWidth: "thin", fontSize: "large", borderRadius: "1rem"}} />
                    </IconButton>
                
                </Stack>
                {mainIcon2}
            
            </Stack>
            
        
        
        </Popper>

        </div>
        </ClickAwayListener>

    )
}

export default SizingPopper
