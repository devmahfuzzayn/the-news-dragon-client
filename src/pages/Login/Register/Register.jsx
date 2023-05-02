import React, { useContext, useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [accepted, setAccepted] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        setSuccess("");
        setError("");

        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                console.log(createdUser);
                setSuccess("Logged in successfully.");
                updateUserProfile(createdUser, name, photo).then((result) => {
                    console.log("Profile information added successfully.");
                    setSuccess("Profile information added successfully.");
                });
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    };

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    };

    return (
        <Container className="w-25 mx-auto">
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="photo"
                        placeholder="Photo URL"
                        required
                    />
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name="accept"
                        label={
                            <>
                                Accept{" "}
                                <Link to="/terms">Terms &and Conditions</Link>
                            </>
                        }
                    />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-success">{success}</Form.Text>
                <Form.Text className="text-danger">{error}</Form.Text>
            </Form>
        </Container>
    );
};

export default Register;
