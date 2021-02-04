import styled, { createGlobalStyle } from "styled-components";
import BGImgae from "./images/quizBg.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
        height:100%;
    }

    body{
        background-image: url(${BGImgae});
        background-size: cover;
        margin:0;
        padding: 0px 20px;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
        font-family:'Catamaran', san-serif
    }


`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p{
        color: #fff;
    }

    .score{
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1{
        font-family: 'Comfortaa', cursive;
        font-size: 70px;
        font-weight: 500;
        text-align: center;
        margin: 40px;
        filter: drop-shadow(2px 2px #0085a3);
    }

    .start, .next{
        cursor: pointer;
        border: none;
        box-shadow: 0px 10px 20px rgba(0,0,0,0.25);
        border-radius: 15px;
        height: 50px;
        margin: 20px;
        padding: 0 40px;

    }

    .next{
        font-size: 20px;
        font-family: 'Comfortaa', cursive;
        txt-align: center;
    }

    .start{
        width: 170px;
        font-size: 30px;
        font-family: 'Comfortaa', cursive;
        txt-align: center;
    }



`