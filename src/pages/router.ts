import Main from "@pages/main";
import Main2 from "@pages/main2";

type Router = {
  id: number;
  exact: boolean;
  path: string;
  element: () => JSX.Element;
};

const router: Router[] = [
  {
    id: 1,
    exact: true,
    path: "/",
    element: Main,
  },
  {
    id: 2,
    exact: true,
    path: "/main2",
    element: Main2,
  },
];

export default router;
