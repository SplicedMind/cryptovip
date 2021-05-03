import LandingPage from "containers/LandingPage/LandingPage";
import LoginPage from "containers/LoginPage/index";
import ProfilePage from "containers/ProfilePage/index"; 
import AddFundsPage from "containers/AddFundsPage/index"; 
import SignupPage from 'containers/SignupPage/index';
import TermsConditions from "containers/TermsCondition/TermsCondition";
import PrivacyPolicy from "containers/PrivacyPolicy/PrivacyPolicy";
import WithdrawFundsPage from "containers/WithdrawFundsPage/index";
import TransactionsPage from "containers/TransactionsPage/index";
import EWalletPage from "containers/EWalletPage/index";

const routes = [    
    {
        path: "/dashboard/addfunds",
        component: AddFundsPage,
        title: "Add Funds",
        needsAuth:true
    },
    {
        path: "/dashboard/withdrawfunds",
        component: WithdrawFundsPage,
        title: "Withdraw Funds",
        needsAuth:true
    },
    {
        path: "/dashboard/transactions",
        component: TransactionsPage,
        title: "Transaction",
        needsAuth:true
    },
    {
        path: "/dashboard/profile",
        component: ProfilePage,
        title: "Profile",
        needsAuth:true
    },
    {
        path: "/dashboard",
        component: EWalletPage,
        title: "E-Wallet",
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