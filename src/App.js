import { Route, BrowserRouter as Router, Routes } from "react-router";
import UserLayout from "./Components/UserLayout";
import ROUTES from "./Configs/Routes";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
