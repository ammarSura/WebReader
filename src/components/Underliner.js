import React, { useState } from 'react';
import { Modal, CardContent, Card, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import ClickAwayListener from '@mui/base';



const Underliner = ({width}) => {
    const props = useSpring({ to: { width: width }, from: { width: 0 }});
    const [ on, setOn ] = useState(false);
    const [ x, setX ] = useState(0);
    const [ y, setY ] = useState(0);
    
    document.onmouseup = () => {
        const xt = document.getSelection();
        if (xt.toString().length > 0 ) {
            setX(xt.anchorOffset);
            setY(xt.extentOffset);
            setOn(true);
        
            console.dir(x)
        }

        
    };
    console.log(on)
    return (
        
            
        
            < Card sx={{width: "40vw", height: "40vw"}}>
                <CardContent>
                
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Dictionary
                </Typography>
                <Typography variant="h5" component="div">
                    nice
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
                </CardContent>
            </Card>
       
        
        
    )
}

        {/* <animated.div style={{width: props.width, height: "0.125rem", background: "red"}}/> */}

export default Underliner
