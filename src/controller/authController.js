import { registerUser } from "../controller/apiController";

const aDay = 24 * 60 * 60 * 1000;

const signUpWithEmailAndPassword = async (details) => {
  const newUser = await registerUser(details);
  return initializeUser(newUser);
};


const initializeUser = async (user) => {
  if (user) {
    await cookieStore.set({
      name: "token",
      value: user.token,
      secure: true,
      httpOnly: true,
      expires: Date.now() + aDay,
    });

    await cookieStore.set({
      name: "userId",
      value: user.id,
      expires: Date.now() + aDay,
    });

    await cookieStore.set({
      name: "userEmail",
      value: user.email,
      secure: true,
      httpOnly: true,
      expires: Date.now() + aDay,
    });
  } else {
    await cookies.remove({ name: "token" });
  }
};

export {signUpWithEmailAndPassword};