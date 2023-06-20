import styled from "styled-components";

export const Contanier = styled.header`
    width: 100%;
    background-color: #E7ECEA;
    
   
`
export const Area = styled.div`
    max-width: 980px;
    height:100px;
    margin:auto;
    display: flex;
    align-items: center;
    gap:15px;
    svg{
        font-size: 35px;
        color:#051E34;
    }
    h1{
        font-size: 35px;
        font-weight: bold;
        color:#051E34;
    }
    @media(max-width:1000px){
        padding:0 20px;
    }
    @media(max-width:500px){
        justify-content: center;
        svg{
            font-size: 28px;
        }
        h1{
            font-size: 28px;
        }
    }
    
`