import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";



export const AppRouter = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} /> */}

        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>}
        />
        {/* <Route path="login" element={<LoginPage />} /> */}



        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>}
        />
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
        {/* <Route path="/" element={<Navigate to={"marvel"} />} /> */}
      </Routes>
    </>
  )
}
