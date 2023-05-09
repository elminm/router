import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Users from "./pages/Users";
import UserPosts from "./pages/UserPosts";
import CreatePost from "./components/CreatePost";
import { Nav, NavItem } from "reactstrap";
import UserErrorPage from "./components/UserErrorPage";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({
    data: undefined,
    loader: true,
    error: undefined,
  });
  const getUserData = () => {
    setData((prev) => ({
      ...prev,
      data: undefined,
      loader: true,
      error: undefined,
    }));
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) =>
        setData((prev) => ({
          ...prev,
          data,
          loader: false,
          error: undefined,
        }))
      )
      .catch(({ message }) =>
        setData({
          data: undefined,
          loader: false,
          error: message,
        })
      );
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div style={{ padding: "4%" }}>
      <Nav fill pills>
        <NavItem>
          <NavLink to="/" active>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/users">Users</NavLink>
        </NavItem>
        <NavItem>
          <CreatePost users={data.data} getUserData={getUserData} />
        </NavItem>
      </Nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/users"
          element={<Users data={data} setData={setData} />}
        ></Route>
        <Route path="/userposts/:id" element={<UserPosts />}></Route>
        <Route path="*" element={<UserErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
