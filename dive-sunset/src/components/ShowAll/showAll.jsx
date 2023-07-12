import React from "react";
import './showAll.css';
import Header from "../Header/header";
import comment from "../../img/comment.svg";
import complete from "../../img/complete.svg";
import exchange from "../../img/exchange.svg";
import finding from "../../img/finding.svg";

function ShowAll() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return (
        <>
            <Header className="head"></Header>
            <div className="back">
                <div className="border">
                    <div className="pageTitle">전체 교환글</div>
                    <div className="writesbox">
                        <div className="writes">
                            <div className="infoTitle">제목</div>
                            <div className="state">상태</div>
                        </div>
                        <div className="box">
                            {a.map((a, i) => {
                                return (
                                    <WriteList></ WriteList>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pageButton">
                <div>1</div>
            </div>
        </>
    )
}
function WriteList() {
    return (
        <>
            <div className="list">
                <div className="listTitle">레몬 하나에는 레몬 하나만큼의 비타민이 들어 있습니다.</div>
                <div className="listInfo">
                    <div className="listComment">
                        <img src={comment}></img>
                        0
                    </div>
                    <img src={finding} className="listState"></img>
                </div>
            </div>
        </>
    )
}
export default ShowAll