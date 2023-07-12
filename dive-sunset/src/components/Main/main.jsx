import React from "react";
import './main.css';
import Header from "../Header/header";
import banner from "../../img/banner.svg";
import dummyimg from "../../img/dummyimg.svg";
import showAllButton from "../../img/showAllButton.svg";
import { Link } from "react-router-dom";
import comment from "../../img/comment.svg";
import complete from "../../img/complete.svg";
import exchange from "../../img/exchange.svg";
import finding from "../../img/finding.svg";

function Main() {
    return (
        <>
            <Header></Header>
            <img src={banner} className="bannerimg"></img>
            <div className="trade">
                <div className="recent">
                    최근 교환글
                    <div className = "writebox">
                        <div className="textbox">
                            <div className="title">인형 교환하실 분!</div>
                            <img src = {dummyimg} className = "writeboxImg"></img>
                            저 : 사진 속 강아지 인형 <br></br>
                            님 : 고양이 인형이면 OK
                        </div>
                        <div className="info">
                            <img src = {exchange}></img>
                            <div className="comment">
                                <img src = {comment}></img>
                                0
                            </div>
                        </div>
                    </div>
                </div>
                <div className="looking">
                    찾는 중인 교환글
                    <div className = "writebox">
                        <div className="textbox">
                            <div className="title">인형 교환하실 분!</div>
                            <img src = {dummyimg} className = "writeboxImg"></img>
                            저 : 사진 속 강아지 인형 <br></br>
                            님 : 고양이 인형이면 OK
                        </div>
                        <div className="info">
                            <img src = {finding}></img>
                            <div className="comment">
                                <img src = {comment}></img>
                                0
                            </div>
                        </div>
                    </div>
                </div>
                <div className="complete">
                    완료된 교환글
                    <div className = "writebox">
                        <div className="textbox">
                            <div className="title">인형 교환하실 분!</div>
                            <img src = {dummyimg} className = "writeboxImg"></img>
                            저 : 사진 속 강아지 인형 <br></br>
                            님 : 고양이 인형이면 OK
                        </div>
                        <div className="info">
                            <img src = {complete}></img>
                            <div className="comment">
                                <img src = {comment}></img>
                                0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to = "/ShowAll">
                <img src = {showAllButton} className="showAllButton"></img>
            </Link>
            
        </>
    )
}
export default Main