import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import Layout from "../layout/Layout";
import HomePage from "../page/HomePage";
import FriendPage from "../page/FriendPage";
import ProfilePage from "../page/ProfilePage";
import { RouterProvider } from "react-router-dom";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "friend", element: <FriendPage /> },
      { path: "profile/:profileId", element: <ProfilePage /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
