import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import { IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";

const LoginPage = ({ loginUser }) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ mode: "onChange" });
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleEvtDefault = (evt) => {
        evt.preventDefault();
    };

    const handleLogin = async (data) => {
        // const user = await loginUser(data);
        if (user.token) {
            localStorage.setItem("token", user.token);
            localStorage.setItem("userId", user.id);
            console.log(user);
            navigate("/jobs");
            toast.success("Welcome Back");
        } else {
            toast.error("Incorrect Login Details");
        }
    }


    return (<>
        <Navbar />
        <main>
            <div className="flex justify-center md:justify-end border rounded-lg m-7">
                <div className="w-10/12 md:w-5/12 p-12  my-12">
                    <div className="mb-9">
                        <h3 className="font-bold text-2xl text-slate-900 mb-2">Sign in to your account</h3>
                        <p className="text-slate-600">Not a member? <Link className="md:mt-2 text-blue-400 hover:text-blue-500" to="/signup">Sign Up</Link></p>
                    </div>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="flex flex-col gap-8">
                            <TextField fullWidth error={Boolean(errors.email)} size="small" label="Email" variant="outlined" autoComplete="email" {...register("username", { required: true })} />

                            <FormControl fullWidth variant="outlined" size='small'>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput
                                    error={Boolean(errors.password)}
                                    {...register("password", { required: true })}
                                    id="password"
                                    autoComplete="current-password"
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={
                                                    showPassword ? "hide the password" : "display the password"
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
                                />
                            </FormControl>



                            <div className="flex justify-between mb-5">
                                <div>
                                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                                </div>
                                <a className="md:mt-2 text-blue-400 hover:text-blue-500 text-right" href="">Forgot Password?</a>
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
        <footer><Copyright /></footer >
    </>
    )
}

export default LoginPage;