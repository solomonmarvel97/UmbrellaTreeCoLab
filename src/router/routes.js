// Error poges
import error404 from "@/pages/Errors/error404.vue";

//layouts
import Landing from "@/layout/Landing.vue";
import UserLayout from "@/layout/UserLayout.vue";
import AdminLayout from "@/layout/AdminLayout.vue";

// authentication pages
import SignIn from "@/pages/LoginPage.vue";
import SignUp from "@/pages/RegistrationPage.vue";

// user pages
import AllCourses from "@/pages/User/Program/Course/CoursesPage.vue";
import Certification from "@/pages/User/Program/Course/Certification.vue";
import Dashboard from "@/pages/User/Dashboard/DashboardPage.vue";
import JobMatch from "@/pages/User/Job/JobMatchPage.vue";
import Profile from "@/pages/User/Profile/ProfilePage.vue";
import Aptitude from "@/pages/User/Program/AptitudeTestPage.vue";
import Training from "@/pages/User/Program/Course/LecturePage.vue";

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
      { name: "login", path: "login", meta: { entryPoint: true, }, component: SignIn },
      { name: "register", path: "register", component: SignUp, }
    ],
  },


  // user routes
  {
    path: "/",
    props: true,
    meta: { requireAuth: true },
    component: UserLayout,
    children: [
      { name: "dashboard", path: "dashboard", component: Dashboard, },
      { name: "profile", path: "profile", component: Profile },
      { name: "courses", path: "courses", component: AllCourses, },
      { name: "training_area", path: "training_area", component: Training },
      { name: "certification", path: "certification", component: Certification },
      { name: "match_making", path: "match_making", component: JobMatch },
    ],
  },
];

export default routes;
