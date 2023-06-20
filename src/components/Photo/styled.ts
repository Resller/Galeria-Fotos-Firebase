import styled from "styled-components";

export const Contanier = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:10px;
    padding:20px;
    border-radius: 10px;
    background-color: #FFF;
    border: solid 1px #ccc;
    
`
export const AreaImg = styled.div`
    max-width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Img = styled.img`
    max-width: 100%;
    height: 150px;
    border-radius: 10px;
    object-fit: cover;
`
export const AreaInfo = styled.div`
    flex:1;
    padding:10px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:10px;
`
export const NamePhoto = styled.div`
    flex:1;
    padding:10px 0;
  
`
export const AreaButton = styled.div`
    width:100%;
    display: flex;
    justify-content: end;
    align-items: end;
    gap:10px;
   

`

export const Button = styled.button`
    background-color:#AD252E;
    color: #FFF;
    padding:5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 4px 4px 6px #666;
    transition: all ease .3s;
   
    &:hover{
        opacity:0.9;
    }
    
`