import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
// import logo from "../assets/images/logo.png";

const SignUpPage = ({ registerUser }) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const errorStyle = { color: "red" }

    const validateForm = {
        firstName: {
            required: "First Name is Required"
        },
        lastName: {
            required: "Last Name is Required"
        },
        email: {
            required: "Email is Required"
        },
        password: {
            required: "Password is Required"
        },
        confirmPassword: {
            required: "Confirm Password is Required"
        },
        matchPassword: {
            required: "Password Must Match Confirm Password"
        },
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleEvtDefault = (evt) => {
        evt.preventDefault();
    };

    const handleRegister = async (data) => {
        try {
            if (data.password === data.confirmPassword) {
                const user = { ...data, username: data.email };
                // const newUser = await registerUser(user);
                if (newUser.token) {
                    localStorage.setItem("token", newUser.token);
                    localStorage.setItem("userId", newUser.id);
                    navigate("/jobs");
                    toast.success("User Successfully Registered");
                }
            } else {
                toast.error("Password does not match");
                return navigate("/register");
            }
        } catch (err) {
            toast.error("Something Went Wrong. Try Again");
        }


    }

    return (
        <>
            <Navbar />
            <main>
                <div className="flex justify-center md:justify-end border rounded-lg m-7">
                    <div className="w-10/12 md:w-5/12 p-12">
                        <div className="mb-9">
                            <h3 className="font-bold text-2xl text-slate-900 mb-2">Sign up to join us</h3>
                            <p className="text-slate-6s00">Already a member? <Link className="md:mt-2 text-blue-400 hover:text-blue-500" to="/login">Login</Link></p>
                        </div>
                        <form onSubmit={handleSubmit(handleRegister)} >
                            <div className="flex flex-col gap-4">
                                <TextField error={Boolean(errors.firstName)} fullWidth size="small" label="First Name" variant="outlined" autoComplete="current-firstName" {...register("firstName", validateForm.firstName)} />
                                {errors.firstName && <span style={errorStyle}>{validateForm.firstName.required}</span>}


                                <TextField error={Boolean(errors.lastName)} fullWidth size="small" label="Last Name" variant="outlined" autoComplete="current-lastName" {...register("lastName", validateForm.lastName)} />
                                {errors.lastName && <span style={errorStyle}>{validateForm.lastName.required}</span>}


                                <TextField error={Boolean(errors.email)} fullWidth size="small" label="Email" type="email" variant="outlined" autoComplete="current-email" {...register("email", validateForm.email)} />
                                {errors.email && <span style={errorStyle}>{validateForm.email.required}</span>}


                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                        error={Boolean(errors.password)}
                                        autoComplete="current-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPassword ? 'hide the password' : 'display the password'
                                                    }
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleEvtDefault}
                                                    onMouseUp={handleEvtDefault}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                        {...register("password", validateForm.password)}
                                    />
                                </FormControl>
                                {errors.password && <span style={errorStyle}>{validateForm.password.required}</span>}


                                <TextField
                                    error={Boolean(errors.confirmPassword)}
                                    fullWidth
                                    size="small"
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    autoComplete="current-password"
                                    type={showPassword ? 'text' : 'password'}
                                    {...register("confirmPassword", validateForm.confirmPassword)}
                                />
                                <div className="mb-5">
                                    <FormControlLabel required control={<Checkbox />} label="Terms and Conditions" />
                                </div>
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className="bg-loginImg bg-bottom bg-cover rounded-r-lg md:w-6/12"></div>
                </div>
            </main>
            <footer><Copyright /></footer>
        </>
    )
}

export default SignUpPage;