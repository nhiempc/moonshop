import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className='container-fluid'>
            <div className='row'>
                <ul className='right_list_fix'>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default React.memo(Header);