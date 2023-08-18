import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";



export const AppRouter = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Routes>
        {/* <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} /> */}
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<HeroesRoutes />} />
        {/* <Route path="/" element={<Navigate to={"marvel"} />} /> */}
    </Routes>
    </>
  )
}
