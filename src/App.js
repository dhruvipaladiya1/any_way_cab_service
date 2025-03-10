import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./Components/UserLayout";
import ROUTES from "./Configs/Routes";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
