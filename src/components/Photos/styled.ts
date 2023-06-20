import styled from "styled-components";

export const Contanier = styled.div`
    max-width: 980px;
    margin:auto;
    padding:25px 0;
`
export const HeaderPhotos = styled.div`
    width:100%;
    padding-bottom:25px;
`
export const Title = styled.h2`
    color:#051E34;
`
export const BodyPhotos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 30px; 

    @media(max-width:800px){
        grid-template-columns: repeat(2, 1fr);   
    }
    @media(max-width:500px){
        grid-template-columns: repeat(1, 1fr); 
    }
`
