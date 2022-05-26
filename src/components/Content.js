import React, {useState} from 'react';
import { Popper, Typography, Fade, Paper, Card, CardContent, IconButton } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import Underliner from './Underliner';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import useTheme  from '@mui/material/styles/useTheme';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Annotate from './Annotate';



const Content = () => {

    const theme = useTheme();

    const txt1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat quam tristique nunc facilisis, in laoreet dui dignissim. Nunc quis augue scelerisque leo euismod hendrerit eu in purus. Nam interdum quis urna rutrum congue. `
    
    const txt2 = `Donec et elementum mi. Vestibulum aliquet urna ac libero bibendum, vel pellentesque odio volutpat. Donec eleifend auctor quam, id interdum dui vestibulum vel. Nulla molestie ex in est varius vehicula. Proin non feugiat neque. Pellentesque non leo ut quam posuere fermentum sed eget augue. `;

    const txt3 = `Vivamus quam sapien, tempus vitae pulvinar sit amet, rhoncus dapibus mi. Nullam malesuada ex laoreet magna egestas porta. Morbi aliquet efficitur ligula nec porttitor. Mauris interdum venenatis porta. Curabitur hendrerit sit amet est eu congue. Vestibulum a tempus nibh, non aliquet dolor.`;

    const [ open, setOpen ] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [ text, setText ] = useState("");
    const [ annotate, setAnnotate ] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setAnnotate(false);
      };

    const handleMouseUp = () => {
        const selection = window.getSelection();
    
        // Resets when the selection has a length of 0
        if (!selection || selection.anchorOffset === selection.focusOffset) {
            console.log('hi');
          handleClose();
          return;
        }
        if (selection.toString().split(' ').length > 1) {
            console.log('you wanna annotate?');
            setAnnotate(true);
        } else {

            const getBoundingClientRect = () => selection.getRangeAt(0).getBoundingClientRect();
        
        
            console.dir(selection.toString());
    
            setOpen(true);
            setText(selection.toString())
            setAnchorEl(
                {getBoundingClientRect }
            );

        }
    
        
    };
      
    return (
        <div style={{color: "black"}}>
        <Typography children={txt1} variant="h4" align="center" sx={{paddingTop: "10rem"}} gutterBottom onMouseUp={handleMouseUp}/>
        
        <Popper
        open={open}
        anchorEl={anchorEl}
        transition
        placement="bottom-start"
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            {/* <Card>
              <Typography sx={{ p: 2 }}>Definition</Typography>
            </Card> */}
            {/* <Underliner/> */}
           
            < Card sx={{width: "40vw", height: "40vw", boxShadow: 8, border: "solid", borderColor: theme.palette.primary.light}}>
                <IconButton children={ <CloseIcon/>} onClick={handleClose}/>

                
               
                <CardContent sx={{background: "#fff"}} >
                
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Dictionary
                </Typography>
                <Typography variant="h5" component="div">
                    {text}
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
            {/* </ClickAwayListener> */}

          </Fade>
        )}
      </Popper>
      {/* <animated.div style={props}>I will fade in</animated.div> */}

        {/* <Typography children={txt1} variant="paragraph" align="left" paragraph sx={{marginLeft: "2rem", marginRight: "2rem"}}/> */}
        {/* <Typography children={txt2} variant="paragraph" align="left" paragraph sx={{marginLeft: "2rem", marginRight: "2rem"}}/> */}
        {/* <Typography children={txt3} variant="paragraph" align="left" paragraph sx={{marginLeft: "2rem", marginRight: "2rem"}}/>
        <Typography children={txt1} variant="paragraph" align="left" paragraph sx={{marginLeft: "2rem", marginRight: "2rem"}}/> */}
        <Slide direction="up" in={annotate} mountOnEnter unmountOnExit sx={{}}>
        <div style={{position: "fixed", bottom: "5vh", right: "5vw"}}>
            <Annotate/>      
        </div>
        </Slide>
        </div>
    )
}

export default Content;
