import LandingPage from "containers/LandingPage/LandingPage";
import LoginPage from "containers/LoginPage/index";
import ProfilePage from "containers/ProfilePage/index"; 
import AddFundsPage from "containers/AddFundsPage/index"; 
import SignupPage from 'containers/SignupPage/index';
import TermsConditions from "containers/TermsCondition/TermsCondition";
import PrivacyPolicy from "containers/PrivacyPolicy/PrivacyPolicy";

const routes = [
    {
        path: "/profile/dashboard",
        component: ProfilePage,
        title: "Profile",
        needsAuth:true
    },
    {
        path: "/profile/addfunds",
        component: AddFundsPage,
        title: "Profile",
        needsAuth:true
    },
    {
        path: "/profile/withdrawfunds",
        component: ProfilePage,
        title: "Profile",
        needsAuth:true
    },
    {
        path: "/profile/transactions",
        component: ProfilePage,
        title: "Profile",
        needsAuth:true
    },
    {
        path: "/login",
        component: LoginPage,
        title: "Login",
        needsAuth:false
    },
    {
        path: "/signup",
        component: SignupPage,
        title: "Sign-up",
        needsAuth:false
    },
    {
        path: "/termsconditions",
        component: TermsConditions,
        title: "Terms and Conditions",
        needsAuth:false
    },
    {
        path: "/privacypolicy",
        component: PrivacyPolicy,
        title: "Privacy Policy",
        needsAuth:false
    },
    {
        path: "/",
        component: LandingPage,
        title: "Crypto VIP",
        needsAuth:false
    }
];

export default routes;