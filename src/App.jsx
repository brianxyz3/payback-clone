// import { app, database, storage } from "../firebaseConfig";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { setDoc, doc, addDoc, deleteDoc, updateDoc, collection, getDoc, getDocs } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useState } from "react";

// function App() {
// const auth = getAuth();
// auth.languageCode = auth.useDeviceLanguage();
// const googleProvider = new GoogleAuthProvider()
//   const [data, setData] = useState({});
//   const lwRef = ref(storage, data.name)

// const collectionRef = collection(database, "users");

// const handleInput = (evt) => {
//   let newInput = { [evt.target.name]: evt.target.value };
//   setData({ ...data, ...newInput });
//   console.log(data);
// }

// const handleSubmit = () => {
// signInWithPopup(auth, googleProvider)
//   .then((res) => {
//     const credential = GoogleAuthProvider.credentialFromResult(res);
//     const token = credential.accessToken;
//     console.log(res.user)
//   })
//   .catch((err) => {
//     alert(err.message)
//   })
// addDoc(collectionRef, {
//   email: data.email,
//   password: data.password,
// })
//   .then(() => {
//     alert("data added");
//   })
//   .catch((err) => {
//     alert(err.message)
//   })

//   setDoc(doc(collectionRef, "user1"), {
//     email: data.email,
//     password: data.password,
//   })
//     .then(() => {
//       alert("data added");
//     })
//     .catch((err) => {
//       alert(err.message)
//     })
// }

// const getData = () => {
// get one document from a collection.
// getDoc(doc(database, "users", "user1"))
//   .then((res) => {
//     console.log(res.data())
//   })
//   .catch(err => {
//     console.log(err.message)
//   })
// get all document in a collection.

//   getDocs(collectionRef)
//     .then((res) => {
//       console.log(
//         res.docs.map(doc => {
//           return { ...doc.data(), id: doc.id };
//         })
//       )
//     })
//     .catch(err => {
//       console.log(err.message)
//     })
// }

// const updateData = (id) => {
// const docToUpdate = doc(database, "users", "user1")
// updateDoc(docToUpdate, {
//   email: data.email,
//   password: data.password,
// })
//   .then(() => {
//     alert("Updated");
//   })
//   .catch(err => {
//     alert("failed")
//   })

//   deleteDoc(doc(database, "users", "xZRCx4mFmGz61yvZxAia"))
//     .then(() => {
//       alert("deleted");
//     })
//     .catch(err => {
//       alert("failed")
//     })
// }

//   const handleSubmit = () => {
//     const uploadTask = uploadBytesResumable(lwRef, data);
//     uploadTask.on("state_changed", (snapshot) => {
//       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log(`Upload is ${progress}% done`);
//     },
//       (err) => {
//         console.log(err.message);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref)
//           .then((downloadURL) => {
//             console.log(`Files available at, ${downloadURL}`);
//           });
//       })  
//   }

//   return (
//     <>
//       <div>
//         <input type="file" onChange={(event => (setData(event.target.files[0])))} />

//         <button type="submit" onClick={handleSubmit}>Submit</button>
//       </div>
//     </>
//   )
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Faq from "./pages/Faq";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

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
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
