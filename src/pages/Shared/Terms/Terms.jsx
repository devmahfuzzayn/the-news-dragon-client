import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                similique ipsum eum voluptatem, doloribus necessitatibus
                dolorem, perferendis sunt sed doloremque modi optio, tempore qui
                non veritatis quibusdam laudantium recusandae beatae?
            </p>
            <p>
                Go back to <Link to="/register">Register</Link>
            </p>
        </div>
    );
};

export default Terms;
