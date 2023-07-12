import React from "react";
import Header from "../Header/header";
import exchange from "../../img/exchange.svg";
import finding from "../../img/finding.svg";
import complete from "../../img/complete.svg";
import "./showPost.css";
import dummyImg from "../../img/dummyimg2.svg";

function ShowPost() {
    return (
        <>
            <Header></Header>
            <div className="back">
                <div className="border">
                    <div className="titleType">
                        <div className="pageTitle">레몬 하나에는 레몬 하나만큼의 비타민이 들어 있습니다.</div>
                        <img src={finding} className="postContents"></img>
                    </div>
                    <div className="postBox">
                        <img src={dummyImg}></img>
                        <div className="contents">
                            나는 모르고 있었다구! 여러분들, 다들 이 사실 알고 즐거운 레몬 하루 되기를 바래! <br></br> ヾ(≧▽≦*)o
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ShowPost;