import { lazy } from "react";
import SignIn from "./SignIn";

const Employes = lazy(() => import("./Employe"));
const Home = lazy(() => import("./Home"));
const Profile = lazy(() => import("./Profile"));
const SignUp = lazy(() => import("./SignUp"));
const Work = lazy(() => import("./Work"));


export { Employes, Home, Profile, SignIn, SignUp, Work };
