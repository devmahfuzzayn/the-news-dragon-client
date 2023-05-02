import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);
    const from = location.state?.from?.pathname || "/category/0";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setSuccess("");
        setError("");

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess("Logged in successfully.");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    };

    return (
        <Container className="w-25 mx-auto">
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't have an account? <Link to="/register">Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-success">{success}</Form.Text>
                <Form.Text className="text-danger">{error}</Form.Text>
            </Form>
        </Container>
    );
};

export default Login;
