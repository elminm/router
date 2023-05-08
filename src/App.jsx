import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Users from "./pages/Users";
import UserPosts from "./pages/UserPosts";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/userposts/:id" element={<UserPosts />} />
      </Routes>
    </div>
  );
};

export default App;
