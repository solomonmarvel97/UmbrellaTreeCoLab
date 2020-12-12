// Error poges
import error404 from "@/pages/Errors/error404";

//layouts
import Landing from "@/layout/Landing";
import UserLayout from "@/layout/UserLayout";
import AdminLayout from "@/layout/AdminLayout";

// authentication pages
import Login from "@/pages/Login";
import Register from "@/pages/Register";

// user pages
import AllCourses from "@/pages/User/AllCourses";
import Certification from "@/pages/User/Certification";
import Dashboard from "@/pages/User/Dashboard";
import EmailVerification from "@/pages/User/EmailVerification";
import MatchMaking from "@/pages/User/MatchMaking";
import Profile from "@/pages/User/Profile";
import Test from "@/pages/User/Test";
import Training from "@/pages/User/TrainingArea";

const routes = [

  // authentication routes
  {
    path: "/",
    redirect: {
      name: "login",
    },
    props: true,
    meta: {
      authPages: true,
    },
    component: Landing,
    children: [
      {
        name: "login",
        path: "login",
        meta: {
          entryPoint: true,
        },
        component: Login,
      },
      {
        name: "register",
        path: "register",
        component: Register,
      },
    ],
  },

  // user routes
  {
    path: "/",
    props: true,
    meta: { requireAuth: true },
    component: UserLayout,
    children: [
      {
        name: "dashboard",
        path: "dashboard",
        component: Dashboard,
      },
      {
        name: "profile",
        path: "profile",
        component: Profile,
      },
      {
        name: "courses",
        path: "courses",
        component: AllCourses,
      },
      {
        name: "training_area",
        path: "training_area",
        component: Training,
      },
      {
        name: "certification",
        path: "certification",
        component: Certification,
      },
      {
        name: "match_making",
        path: "match_making",
        component: MatchMaking,
      },
    ],
  },
];

export default routes;
