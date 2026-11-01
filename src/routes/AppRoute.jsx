import { Route, Routes } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import Explore from "../pages/Explore";

export default function AppRoute() {
  return (
      <Routes>
          <Route index element={<Explore/>}/>
    </Routes>
  )
}
