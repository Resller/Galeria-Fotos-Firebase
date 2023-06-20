import styled from "styled-components";

export const Contanier = styled.form`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap:30px;
    padding:25px 0;
    border-bottom: solid 1px #666;

        
    input[type="submit"] {
        background-color:#1A73E8;
        color: #FFF;
        padding:8px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size:16px;
        box-shadow: 4px 4px 4px #666;
        transition: all ease .3s;
    
        &:hover{
            opacity: .8;
        }  
    }
`

export const FileUpload = styled.div`
    position: relative;
    overflow: hidden;
    background-color:#1A73E8;
    color: #FFF;
    padding:8px;
    border: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:12px;
    cursor: pointer;
    width:190px;
    font-size:16px;
    box-shadow: 4px 4px 6px #666;
    transition: all ease .3s;
    
    &:hover{
        opacity: .8;
    }
    
    svg{
        font-size:20px;
    }
    
    label {
        display: block;
        border-left: solid 1px #CCC;
        padding: 0 5px;
    }
      
    input[type="file"] {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        cursor: pointer;
    }
   
`
export const Info = styled.div `
    flex:1;
    text-align: right;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const Send = styled.div `
    color: #1b4125;
    font-size: 16px;
    font-weight: bold;
`
export const Error = styled.div `
    color: #F00;
    font-size: 16px;
    font-weight: bold;
`