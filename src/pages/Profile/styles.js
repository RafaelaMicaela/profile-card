import styled, {css} from "styled-components";

export const  Container = styled.div`
    margin: 0 auto;
    text-align:center ;

`
export const Wrapper = styled.div`
    max-width:420px ;
    background-color: #FFF;
    border-radius: 15px;
    overflow: hidden;
    margin: 1rem ;

`
export const Content = styled.div`
    img{
        width: 100px ;
        height: 100px;
        border-radius: 50%;
        border: 4px solid #FFF;
        margin-top: -52px;
        margin-bottom: 20px;
    }
    P{
        color: var(darkgraysish);
        font-size: 13px;
    }
`
export const Name = styled.h2`
    color: var(verydark);
    font-size: 18px ;
    font-weight: 700;
    margin-bottom: 10px;
    span{
        color: var(darkgraysish);
        font-weight: 400;
    }
`
export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid  hsla(227, 10%, 46%, 0.2);
    padding: 30px 50px ;
    margin-top:30px ;
`
export const Num = styled.p`
    font-size: 18px;
    color: var(verydark);
    font-weight: 700;
    margin-bottom: 5px;
`