//layouts
import _layout from "@/layouts/_layout";

// others
import index from "@/pages/index";

  const routes = [ 

  // web routes
  {
    path: "",
    redirect: { name: "index"},
    component: _layout,
    props: true,
    children: [
      { name: "index", path: "", component: index },
    ],
  },
];

export default routes;
