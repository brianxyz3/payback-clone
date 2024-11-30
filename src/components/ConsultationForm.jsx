import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const ConsultationForm = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <section className="bg-white lg:w-1/2 w-3/4 -mt-10 mx-auto p-8 mb-4 shadow-lg shadow-black">
            <div className="text-center mb-6">
                <h3 className="text-3xl text-[#112152] font-bold">Start here</h3>
                <p className="text-2xl text-gray-600">Secure a free consultation</p>
            </div>
            <form className="flex flex-col gap-4">
                <TextField label="Your Name" variant="outlined" required className="w-full bg-gray-100 border-none" />
                <TextField label="Last Name" variant="outlined" required className="w-full bg-gray-100 border-none" />
                <TextField label="Phone Number" variant="outlined" className="w-full bg-gray-100 border-none" />
                <TextField label="Enter your E-mail" variant="outlined" className="w-full bg-gray-100 border-none" />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">How much did you invest ($)</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="How much did you invest ($)"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <button className="bg-yellow-400 text-gray-900 text-xl py-3 font-bold">Get a free consultation</button>
            </form>
        </section>
    )
}

export default ConsultationForm;