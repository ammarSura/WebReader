import React, {useState} from 'react';
import {Input, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useTheme  from '@mui/material/styles/useTheme';



const SearchBar = () => {
    const theme = useTheme();
    const [ selected, setSelector ] = useState(true);
    const [ color, setColor ] = useState(theme.palette.primary.light);

    const handleSelect = (truth) => {
        if (truth) {
            setSelector("solid");
            setColor("#fff");
        } else {
            setSelector("none");
            setColor("");
        }
        
    }



    return (
        <Input onFocus={() => handleSelect(true)} onBlur={() => handleSelect(false)} label="Keyword Search" variant="outlined" fullWidth sx={{marginLeft: "1rem", borderRadius: "0.5rem", background: theme.palette.primary.dark, marginRight: "1rem", color: "#fff", border: selected, borderWidth: "thin" }} disableUnderline={true} color="secondary" startAdornment={
            <InputAdornment position="start" sx={{marginLeft: "0.25rem"}}>
                <SearchIcon htmlColor={color}/>
            </InputAdornment>}
        />
    )
}

export default SearchBar
