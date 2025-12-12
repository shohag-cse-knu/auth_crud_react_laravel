import { useState } from "react";
import axios from "axios";
import { data, useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await axios.post("http://localhost:8000/api/register", { name, email, password });
            navigate("/login");
        } catch (error) {
            let message = "Registration failed";
            if (error && error.response && error.response.data) {
                const resp = error.response.data;
                if (resp.errors && typeof resp.errors === 'object') {
                    try {
                        message = Object.values(resp.errors).flat().join(' ');
                    } catch (e) {
                        message = JSON.stringify(resp.errors);
                    }
                } else if (resp.message) {
                    message = resp.message;
                } else if (resp.error) {
                    message = resp.error;
                }
            } else if (error && error.message) {
                message = error.message;
            }
            alert(message);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: "25rem" }} className="p-4">
                <h2 className="text-center">Register</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" onClick={handleRegister} className="w-100">Register</Button>
                </Form>
                <p className="mt-3 text-center">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </Card>
        </Container>
    );
}

export default Register;
