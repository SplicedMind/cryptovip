import LandingPage from "containers/LandingPage/LandingPage";
import LoginPage from "containers/LoginPage/index";
import ProfilePage from "containers/ProfilePage/index"; 
import AddFundsPage from "containers/AddFundsPage/index"; 
import SignupPage from 'containers/SignupPage/index';
import AdminPage from "containers/AdminPage/index";
import TermsConditions from "containers/TermsCondition/TermsCondition";
import PrivacyPolicy from "containers/PrivacyPolicy/PrivacyPolicy";
import WithdrawFundsPage from "containers/WithdrawFundsPage/index";
import TransactionsPage from "containers/TransactionsPage/index";
import TransactionNotificationPage from "containers/TransactionNotificationPage/index";
import EWalletPage from "containers/EWalletPage/index";

const routes = [    
    {
        path: "/dashboard/addfunds",
        component: AddFundsPage,
        title: "Add Funds",
        needsAuth:true,
        needsAdmin:false
    },
    {
        path: "/dashboard/withdrawfunds",
        component: WithdrawFundsPage,
        title: "Withdraw Funds",
        needsAuth:true,
        needsAdmin:false
    },
    {
        path: "/dashboard/paymentnotification",
        component: TransactionNotificationPage,
        title: "Payment Notification",
        needsAuth:true,
        needsAdmin:false
    },
    {
        path: "/dashboard/transactions",
        component: TransactionsPage,
        title: "Transaction",
        needsAuth:true,
        needsAdmin:false
    },
    {
        path: "/dashboard/admin",
        component: AdminPage,
        title: "Admin",
        needsAuth:true,
        needsAdmin:true
    },
    {
        path: "/dashboard/profile",
        component: ProfilePage,
        title: "Profile",
        needsAuth:true,
        needsAdmin:false
    },
    {
        path: "/dashboard",
        component: EWalletPage,
        title: "E-Wallet",
        needsAuth:true,
        needsAdmin:false
    },
    {
        path: "/login",
        component: LoginPage,
        title: "Login",
        needsAuth:false,
        needsAdmin:false
    },
    {
        path: "/signup",
        component: SignupPage,
        title: "Sign-up",
        needsAuth:false,
        needsAdmin:false
    },
    {
        path: "/termsconditions",
        component: TermsConditions,
        title: "Terms and Conditions",
        needsAuth:false,
        needsAdmin:false
    },
    {
        path: "/privacypolicy",
        component: PrivacyPolicy,
        title: "Privacy Policy",
        needsAuth:false,
        needsAdmin:false
    },
    {
        path: "/",
        component: LandingPage,
        title: "Crypto Vault Investment Platform Platform",
        needsAuth:false,
        needsAdmin:false
    }
];

export default routes;