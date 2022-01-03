import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/"  element={<DashboardPage/>} />
          <Route path="/posts" element={<PostsPage/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
