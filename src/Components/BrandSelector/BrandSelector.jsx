/* eslint-disable react/prop-types */
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

const BrandSelector = ({ setBrand }) => {
    return (
        <div className="pl-3">
            <FormControl fullWidth margin='normal'>
                <RadioGroup col name="brand" aria-labelledby="brand-radio">
                    <FormControlLabel value="" control={<Radio />} label="All" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Samsung" control={<Radio />} label="Samsung" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Apple" control={<Radio />} label="Apple" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Google" control={<Radio />} label="Google" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="OnePlus" control={<Radio />} label="OnePlus" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Xiaomi" control={<Radio />} label="Xiaomi" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Oppo" control={<Radio />} label="Oppo" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Vivo" control={<Radio />} label="Vivo" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Sony" control={<Radio />} label="Sony" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Realme" control={<Radio />} label="Realme" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Motorola" control={<Radio />} label="Motorola" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Asus" control={<Radio />} label="Asus" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Huawei" control={<Radio />} label="Huawei" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Nokia" control={<Radio />} label="Nokia" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Poco" control={<Radio />} label="Poco" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Lenovo" control={<Radio />} label="Lenovo" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Tecno" control={<Radio />} label="Tecno" onChange={(e) => setBrand(e.target.value)} />
                    <FormControlLabel value="Infinix" control={<Radio />} label="Infinix" onChange={(e) => setBrand(e.target.value)} />
                </RadioGroup>

            </FormControl>
        </div>
    );
};

export default BrandSelector;