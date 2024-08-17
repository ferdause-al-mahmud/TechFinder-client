/* eslint-disable react/prop-types */
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

const CategorySelector = ({ setCat }) => {
    return (
        <div className="pl-3">
            <FormControl fullWidth margin='normal'>
                <RadioGroup col name="category" aria-labelledby="category-radio">
                    <FormControlLabel value="" control={<Radio />} label="All" onChange={(e) => setCat(e.target.value)} />
                    <FormControlLabel value="Smartphone" control={<Radio />} label="Smartphone" onChange={(e) => setCat(e.target.value)} />
                    <FormControlLabel value="Gaming Smartphone" control={<Radio />} label="Gaming Smartphone" onChange={(e) => setCat(e.target.value)} />
                    <FormControlLabel value="Foldable Smartphone" control={<Radio />} label="Foldable Smartphone" onChange={(e) => setCat(e.target.value)} />
                    <FormControlLabel value="Budget Smartphone" control={<Radio />} label="Budget Smartphone" onChange={(e) => setCat(e.target.value)} />
                    <FormControlLabel value="Mid-range Smartphone" control={<Radio />} label="Mid-range Smartphone" onChange={(e) => setCat(e.target.value)} />
                    <FormControlLabel value="Compact Smartphone" control={<Radio />} label="Compact Smartphone" onChange={(e) => setCat(e.target.value)} />
                    <FormControlLabel value="Entry-level Smartphone" control={<Radio />} label="Entry-level Smartphone" onChange={(e) => setCat(e.target.value)} />
                </RadioGroup>


            </FormControl>
        </div>
    );
};

export default CategorySelector;