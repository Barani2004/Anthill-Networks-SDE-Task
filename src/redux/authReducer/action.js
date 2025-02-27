import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // ✅ Ensure Firebase is correctly imported
import { login, logout } from "./authSlice"; // ✅ Ensure authSlice is correctly imported

// ✅ **Signup Function**
export const signupUser = (userData) => async (dispatch) => {
  try {
    const { email, password } = userData;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("Signup Successful:", user);

    return Promise.resolve(); // ✅ Ensures .then() in Signup.jsx works
  } catch (error) {
    console.error("Signup Error:", error.message);
    return Promise.reject(error);
  }
};

// ✅ **Login Function**
export const loginUser = (userData) => async (dispatch) => {
  try {
    const { email, password } = userData;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    dispatch(login({ email: user.email }));

    localStorage.setItem("user", JSON.stringify({ email: user.email }));
    return Promise.resolve();
  } catch (error) {
    console.error("Login Error:", error.message);
    return Promise.reject(error);
  }
};

// ✅ **Logout Function**
export const logoutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(logout());

    localStorage.removeItem("user");
    return Promise.resolve();
  } catch (error) {
    console.error("Logout Error:", error.message);
    return Promise.reject(error);
  }
};
