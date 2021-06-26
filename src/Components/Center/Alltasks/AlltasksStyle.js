import styled from "styled-components"

export const AllFrame = styled.div`
    width:100%;
    height:40%;
    background-color:rgba(247,246,248,.8);
    border-radius:15px; 
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding:10px; 
    overflow:scroll;
`;

export const Task = styled.div`
    width:100%;
    // background-color:red;
    margin-bottom:5px;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    padding:5px 0px; 

    input{
        width:15%;
        height:40%;
        // border:1px solid grey;
    }

    p{
        width:100%;
        padding:10px;
        border-bottom:1px solid rgb(143, 143, 143);;
        letter-spacing:1px;
        color:black;
    }

`;