import React from 'react'
import SizingPopper from './SizingPopper';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const BrightnessSlider = ({initValue}) => {
    return (
        <SizingPopper 
            initValue={initValue}
            mainIcon={
                <Brightness4Icon fontSize="medium" sx={{paddingBottom: "0.3rem"}}/>
            } 
            id1="brightnessSlider"
            type="Brightness Settings"
            mainIcon2={
                <Brightness4Icon fontSize="medium" color="primary" sx={{marginLeft: "auto", marginRight: "auto"}}/>
            }
            />
    )
}

export default BrightnessSlider;
