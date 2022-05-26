import React from 'react';
import Paper from '@mui/material/Paper';


const PageDisplay = ({children}) => {
    return (
        <Paper children={children} sx={{marginTop: "1rem", width: "95vw", height: "95vh", marginLeft: "auto", marginRight: "auto"}}>
        </Paper>
    )
}

export default PageDisplay
