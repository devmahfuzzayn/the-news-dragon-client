import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
    FaBeer,
    FaGithub,
    FaGoogle,
    FaFacebook,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";
import "./RightNav.css";

const RightNav = () => {
    return (
        <div>
            <h4 className="mt-4">Login With</h4>
            <Button className="mb-2" variant="outline-primary">
                <FaGoogle /> Login with Google
            </Button>
            <Button variant="outline-secondary">
                <FaGithub /> Login with Github
            </Button>
            <div>
                <h4 className="mt-4">Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item>
                        <FaFacebook />
                        Facebook
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaTwitter /> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaInstagram /> Instagram
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className="right-nav-bg">
                <img src={bg} alt="" />
                <div className="content text-center">
                    <h2>Create an Amazing Newspaper</h2>
                    <p>
                        Discover thousands of options, easy to customize
                        layouts, one-click to import demo and much more.
                    </p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;
