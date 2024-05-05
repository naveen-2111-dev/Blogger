import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/BlogPage/Blog";
import ResearchPaper from "./pages/PaperPage/ResearchPaper";
import Navbar from "./components/navbar";
import AddBlog from "./pages/AddBlog/AddBlog";
import CreateBlog from "./pages/AddBlog/CreateBlog";
import CreatePaper from "./pages/AddBlog/CreatePaper";
import AdminCheck from "./pages/Auth/AdminCheck";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/paper" element={<ResearchPaper />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/createpaper" element={<CreatePaper />} />
        <Route path="/admin" element={<AdminCheck />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
