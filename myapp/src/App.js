
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/auth/login.component";
import Register from "./components/auth/register.component";
import Dashboard from "./components/dashboard.component";
import Employees from "./components/employees.component";
import AuthLayout from "./components/layout/authlayout.component";

function PrivateRoute({ children }) {
    return localStorage.getItem("token") ? children : <Navigate to="/login" />;
}

function PublicRoute({ children }) {
    return !localStorage.getItem("token") ? children : <Navigate to="/dashboard" />;
}

function App() {
    return (
        <Router>
            <Routes>
                {/* Default route redirects to login */}
                <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />

                {/* Authentication Routes */}
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

                <Route path="/" element={<PrivateRoute><AuthLayout /></PrivateRoute>}>
                    <Route index element={<PrivateRoute><Dashboard/></PrivateRoute>} />
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="/employees" element={<PrivateRoute><Employees /></PrivateRoute>} />
                </Route>

            </Routes>
        </Router>
    );
}

export default App;
