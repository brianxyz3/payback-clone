import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Faq from "./pages/Faq";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AuthPageLayout from "./layout/AuthPageLayout";

function App() {
  const registerUser = async (newUser) => {
    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser),
      });
    } catch (err) {
      return console.log(`An error occurred, ${err}`);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage registerUser={registerUser} />} />
            <Route path="/about" element={<AboutPage registerUser={registerUser} />} />
            <Route path="/faq" element={<Faq />} />
          </Route>
          <Route element={<AuthPageLayout />}>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
