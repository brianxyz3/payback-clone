import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const lostAmount = [
    "Less than $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000 - $40,000",
    "$40,000 - $80,000",
    "$80,000 - $100,000",
    "$100,000 - $150,000",
    "Over $150,000",
];

const ConsultationForm = ({ registerUser }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await registerUser(data);
            navigate(0);
            toast.success("Case File Successfully Submitted");
        } catch (err) {
            toast.error("File Submit Unsuccessful, Try Again")
        }

    }

    return (
        <section id="contact">
            <div className="bg-white lg:w-1/2 w-3/4 mx-auto p-8 mb-4 shadow-lg shadow-black">
            <div className="text-center mb-6">
                <h3 className="text-3xl text-[#112152] font-bold">Start here</h3>
                <p className="text-2xl text-gray-600">Secure a free consultation</p>
            </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="md:flex gap-2 -mb-5">
                        <TextField {...register("firstName")} label="Your Name" variant="outlined" required className="w-full bg-gray-100 border-none mt-4 md:mt-0" />
                        <TextField {...register("lastName")} label="Last Name" variant="outlined" required className="w-full bg-gray-100 border-none mt-4 md:mt-0" />
                    </div>

                    <div className="md:flex gap-2">
                        <TextField {...register("contactPhone")} label="Phone Number" variant="outlined" className="w-full bg-gray-100 border-none mt-4 md:mt-0" />
                        <TextField {...register("contactEmail")} label="Enter your E-mail" variant="outlined" className="w-full bg-gray-100 border-none mt-4 md:mt-0" />
                    </div>

                    <FormControl fullWidth>
                        <InputLabel id="type">How much did you invest ($)</InputLabel>
                        <Select
                            {...register("lostAmount")}
                            labelId="Amount"
                            input={<OutlinedInput label="How much did you invest ($)" />}
                            defaultValue=""
                            MenuProps={MenuProps}
                        >
                            {lostAmount.map((amount) => (
                                <MenuItem
                                    key={amount}
                                    value={amount}
                                >
                                    {amount}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <div className="mb-4">
                        <TextField
                            {...register("description")}
                            fullWidth
                            id="outlined-multiline-static"
                            label="Outline your case"
                            multiline
                            rows={4}
                            defaultValue=""
                        />
                    </div>
                <button className="bg-yellow-400 text-gray-900 text-xl py-3 font-bold">Get a free consultation</button>
            </form>
            </div>
        </section>
    )
}

export default ConsultationForm;