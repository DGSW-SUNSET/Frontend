import React, { useEffect, useState } from 'react';
import './write.css';
import Header from "../Header/header";
import imgButton from "../../img/imgButton.svg";
import writeButton from "../../img/writeButton.svg";
import cancelButton from "../../img/cancelButton.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Write() {
    const navigate = useNavigate();
    const [board, setBoard] = useState({
        title: '',
        password: '',
        content: '',
        condition: '0',
    });

    const { title, password, content, condition } = board;

    const onChange = (event) => {
        const { value, name } = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const saveBoard = async () => {
        alert('등록되었습니다');
        navigate('/showAll');
    };

    return (
        <>
            <Header></Header>
            <div className="back">
                <div className="border">
                    <div className="pageTitle">글 작성</div>
                    <div className="writesbox">
                        <div className="writes"></div>
                        <div className="box">
                            <div className="writeType">
                                <div className="writeTitle">
                                    제목
                                    <input type='text' name="title" value={title} onChange={onChange}></input>
                                </div>
                                <div className="writeTitle">
                                    비밀번호
                                    <input type='password' name="password" value={password} onChange={onChange}></input>
                                </div>
                            </div>
                            <div className="writeType">
                                <div className="writeTitle">
                                    상태
                                    <RadioGroup>
                                        <Radio name="condition" value="0" defaultChecked onChange={onChange}>
                                            찾는중
                                        </Radio>
                                        <Radio name="condition" value="1" onChange={onChange}>
                                            교환중
                                        </Radio>
                                        <Radio name="condition" value="2" onChange={onChange}>
                                            완료
                                        </Radio>
                                    </RadioGroup>
                                </div>
                            </div>
                            <div className="wirteType">
                                <div className="writeTitle">
                                    내용
                                    <textarea name="content" cols="30" rows="10" value={content} onChange={onChange} />
                                </div>
                            </div>
                            <div className="writeButton">
                                <button type="submit" onClick={saveBoard}>
                                    <img src={writeButton} className="buttons"></img>
                                </button>
                                <Link to="/ShowAll">
                                    <img src={cancelButton} className="buttons"></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function Radio({ children, value, name, defaultChecked, disabled }) {
    return (
        <label>
            <input
                type="radio"
                value={value}
                name={name}
                defaultChecked={defaultChecked}
                disabled={disabled}
            />
            {children}
        </label>
    );
}
function RadioGroup({ label, children }) {
    return (
        <fieldset>
            <legend>{label}</legend>
            {children}
        </fieldset>
    );
}
export default Write;