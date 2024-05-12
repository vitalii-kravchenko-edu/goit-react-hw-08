import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import { refreshUser } from "../../redux/auth/operations";

const HomePage = lazy(() => import("/src/pages/HomePage/HomePage.jsx"));
const RegistrationPage = lazy(() =>
  import("/src/pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("/src/pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() =>
  import("/src/pages/ContactsPage/ContactsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("/src/pages/NotFoundPage/NotFoundPage.jsx")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute>
                <HomePage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="*"
            element={
              <RestrictedRoute>
                <NotFoundPage />
              </RestrictedRoute>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
