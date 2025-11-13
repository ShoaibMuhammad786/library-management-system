import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Global/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Users from "../pages/users/Users";
import Books from "../pages/books/Books";
import BorrowRequest from "../pages/borrowRequests/BorrowRequest";
import AccountRequests from "../pages/accountRequests/AccountRequests";
import BookDetails from "../components/Books/BookDetails";
import AddBookForm from "../components/Books/AddBookForm";
import LoginPage from "../pages/auth/login/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Layout page={<Dashboard />} />} />
      <Route path="/users" element={<Layout page={<Users />} />} />
      <Route path="/books" element={<Layout page={<Books />} />} />
      <Route path="/books/add-book" element={<Layout page={<AddBookForm />} />} />
      <Route
        path="/books/owihoiwrh98r39ry3"
        element={<Layout page={<BookDetails />} />}
      />
      <Route
        path="/borrow-requests"
        element={<Layout page={<BorrowRequest />} />}
      />
      <Route
        path="/account-requests"
        element={<Layout page={<AccountRequests />} />}
      />
    </Routes>
  );
};

export default AppRoutes;
