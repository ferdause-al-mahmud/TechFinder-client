/* eslint-disable react/prop-types */
import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const valuetext = (value) => {
    return `${value}°C`;
}

const minDistance = 0;

const MinimumDistanceSlider = ({ setMax, setMin }) => {
    const [value1, setValue1] = useState([0, 3000]);
    // console.log(value1[0], value1[1])
    setMin(value1[0])
    setMax(value1[1])
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
        console.log(value1[0])
    };

    // Handle input change for the second value
    const handleInputChangeMax = (event) => {
        const newValue = Math.max(Number(event.target.value), value1[0] + minDistance);
        setValue1([value1[0], newValue]);
        console.log(value1[1])

    };

    return (
        <>
            <div className='flex justify-center'>
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
            </div>
            <div className='flex justify-between gap-4 p-4'>
                <div className='flex flex-col w-1/2 '>
                    <label htmlFor="">Minimum</label>
                    <input
                        className='border p-2 w-full font-medium'
                        type="text"
                        value={value1[0]}
                        onChange={handleInputChangeMin}
                        min={100}
                        max={value1[1] - minDistance}
                        style={{ marginRight: 10 }}
                    />
                </div>
                <div className='flex flex-col w-1/2'>
                    <label htmlFor="">Maximum</label>
                    <input
                        className='border p-2 w-full font-medium'
                        type="text"
                        value={value1[1]}
                        onChange={handleInputChangeMax}
                        min={value1[0] + minDistance}
                        max={3000}
                    />
                </div>
            </div>
        </>
    );
}

export default MinimumDistanceSlider;
