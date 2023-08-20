import { getAuth } from "firebase/auth";
import app from "./firebase.config";
const auth = getAuth(app);
//use firebase hooks


export default auth