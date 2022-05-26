import React from 'react';
import Fab from '@mui/material/Fab';
import AddCommentIcon from '@mui/icons-material/AddComment';
import useTheme  from '@mui/material/styles/useTheme';



const Annotate = () => {
    // sx={{position: "fixed", color: theme.palette.primary.dark, bottom: "5%", left: "82%"}}
    const theme = useTheme();

    return (
        <Fab >
            <AddCommentIcon/>
        </Fab>
    
    )
}

export default Annotate;
