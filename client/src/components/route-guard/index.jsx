import { Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react";

function RouteGuard({ authenticated, user, element }) {
  const location = useLocation();

  console.log(authenticated, user, "useruser");

  if (!authenticated && !location.pathname.includes("/auth")) {
    return <Navigate to="/auth" />;
  }

  // Redirect non-instructors from instructor pages or auth page
  if (
    authenticated &&
    user?.role !== "instructor" &&
    (location.pathname.includes("instructor") ||
      location.pathname.includes("/auth"))
  ) {
    return <Navigate to="/home" />;
  }

  // Redirect instructor to instructor dashboard if accessing other routes
  if (
    authenticated &&
    user?.role === "instructor" &&
    !location.pathname.includes("instructor")
  ) {
    return <Navigate to="/instructor" />;
  }

  // Redirect non-admin users from admin pages
  if (
    authenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/home" />;
  }

  // Redirect admin users to admin dashboard if accessing non-admin routes
  if (
    authenticated &&
    user?.role === "admin" &&
    !location.pathname.includes("admin")
  ) {
    return <Navigate to="/admin" />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteGuard;
