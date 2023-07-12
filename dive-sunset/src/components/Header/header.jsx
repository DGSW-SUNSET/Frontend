import React from "react";
import TraderLogo from '../../img/TraderLogo.svg';
import './header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="headerback">
                <img src={TraderLogo} className="logo"></img>
                <div className="linkTo">
                    <div className="home">
                        <Link to='/' className="text-link">
                            홈
                        </Link>
                    </div>
                    <div className="showAll">
                        <Link to='/ShowAll' className="text-link">
                            물건 교환
                        </Link>
                    </div>
                    <div className="write">
                        <Link to='/Write' className="text-link">
                            글 작성
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;