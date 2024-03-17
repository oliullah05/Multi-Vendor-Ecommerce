import { lazy, Suspense } from "react"; // Import Suspense

const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));

const PublicRoutes = [
    {
        path: "/login",
        element: (
            <Suspense fallback={<div>Loading...</div>}> {/* Wrap with Suspense */}
                <Login />
            </Suspense>
        )
    },
    {
        path: "/register",
        element: (
            <Suspense fallback={<div>Loading...</div>}> {/* Wrap with Suspense */}
                <Register />
            </Suspense>
        )
    }
];

export default PublicRoutes;