import styled from "styled-components";

export const CateBlock = styled.div`
    width:100%;
    display:flex;
    height:75px;
    flex-direction:row;
    justify-content:flex-start;
    background-color:rgb(247,246,248);
    padding:10px;
    border-radius:10px;
    margin-bottom:5%;

    transform:scale(1);
    transition: all .2s ease-in-out;

    :hover{
        transform:scale(1.05);
        box-shadow: 0px 5px 10px 10px rgb(196,205,221);
    }
`;

export const ColorVBar = styled.div`
    height:100%;
    // border-left:8px solid red;
    border-radius:30px;
`;

export const CategDetail = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    padding:0px 7px;

    p.cate_name{
        font-weight:bold;
        font-size:23px;
    }

    p.task_count{
        padding:7px 0px;
        color:grey;
    }

`;

export const CreateTaskBtn = styled.button`
    width:100%;
    background-color:#306CDE;
    border:none;
    color:white;
    padding:15px 3px;
    border-radius:10px;
    font-weight:bold;
    font-size:15px;

    p i span{
        font-family:Arial;
    }
`;

export const CreateForm = styled.div`
    width:100%;
    background-color:rgb(247,246,248);
    // height:300px;
    padding:20px 10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    margin-bottom:2%;


    // form{
    //     display:flex;
    //     flex-direction:column;
    //     width:90%;

    //     input{
    //         line-height:35px;
            
    //         border:none;
    //         border-radius:5px;
    //         padding:5px; 
    //     }

    //     input:not(:last-child){
    //         margin-bottom:5%;
    //     }

    //     input[type="submit"]{
    //         background-color:yellowgreen;
    //     }

    //     label{
    //         font-size:15px;
    //         color:grey;
    //         margin-bottom:5px; 

    //     }

    //     select{
    //         border:none;
    //         height:45px;
    //         margin-bottom:5%;
    //     }
    // }
    

`;

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    width:90%;

    input{
        line-height:35px;
        
        border:none;
        border-radius:5px;
        padding:5px; 
    }

    div:not(:last-child){
        margin-bottom:5%;
    }

    input[type="submit"]{
        background-color:yellowgreen;
    }

    label{
        font-size:15px;
        color:grey;
        margin-bottom:5px; 

    }

    select{
        border:none;
        height:45px;
        margin-bottom:5%;
    }

    .invalid{
        border:1px solid red;
    }

    .error{
        color:red;
    }
`;