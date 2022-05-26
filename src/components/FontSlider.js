import React from 'react';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import SizingPopper from './SizingPopper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRup } from '@fortawesome/free-solid-svg-icons';


const FontSlider = ({initValue}) => {
    return (
        <SizingPopper 
            initValue={initValue}
            mainIcon={
                <TextFieldsIcon fontSize="medium" sx={{paddingBottom: "0.3rem"}}/>
            }
            id1="fontSlider"
            type="Font Settings"
            mainIcon2={
                <TextFieldsIcon color="primary" sx={{marginLeft: "auto", marginRight: "auto"}}/>
            }
            // decreaseIcon={
            //     <FontAwesomeIcon icon={faSolidFaText} />
            // }
        />
    )
}

export default FontSlider
