import { useNavigate, Link } from "react-router-dom";
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function AuthLayout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
            <div className="App wrapper">
                <Navbar bg="primary">
                    <Container>
                        <Link to={"/dashboard"} className="navbar-brand text-white">
                            Basic Crud App
                        </Link>
                        <Nav>
                            <Nav.Link onClick={() => navigate("/employees")} className="text-white">Employees</Nav.Link>
                            <Button variant="danger" onClick={handleLogout}>Logout</Button>
                        </Nav>
                    </Container>
                </Navbar>
                <Outlet />
            </div>
    );
}

export default AuthLayout;
