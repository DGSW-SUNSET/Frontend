import React from "react";
import './main.css';
import Header from "../Header/header";
import banner from "../../img/banner.svg";

function Main() {
    return (
        <>
            <Header></Header>
            <img src={banner} className="bannerimg"></img>
            <div className="trade">
                <div className="recent">
                    최근 교환글
                </div>
                <div className="looking">
                    찾는 중인 교환글
                </div>
                <div className="complete">
                    완료된 교환글
                </div>
            </div>
        </>
    )
}
export default Main