import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const valuetext = (value) => {
    return `${value}°C`;
}

const minDistance = 0;

const MinimumDistanceSlider = () => {
    const [value1, setValue1] = useState([500, 1000]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    // Handle input change for the first value
    const handleInputChangeMin = (event) => {
        const newValue = Math.min(Number(event.target.value), value1[1] - minDistance);
        setValue1([newValue, value1[1]]);
    };

    // Handle input change for the second value
    const handleInputChangeMax = (event) => {
        const newValue = Math.max(Number(event.target.value), value1[0] + minDistance);
        setValue1([value1[0], newValue]);
    };

    return (
        <>
            <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                    min={100}
                    max={3000}
                />
            </Box>
            <div className='flex justify-between p-4'>
                <input
                    placeholder='Minimum'
                    className='border w-1/2 font-medium'
                    type="text"
                    value={value1[0]}
                    onChange={handleInputChangeMin}
                    min={100}
                    max={value1[1] - minDistance}
                    style={{ marginRight: 10 }}
                />
                <input
                    placeholder='Maximum'
                    className='border w-1/2 font-medium'
                    type="text"
                    value={value1[1]}
                    onChange={handleInputChangeMax}
                    min={value1[0] + minDistance}
                    max={3000}
                />
            </div>
        </>
    );
}

export default MinimumDistanceSlider;
