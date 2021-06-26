import styled from "styled-components";

export const CircularFrame = styled.div`
    height:30%;
    width:100%;
    background-color:rgb(247,246,248);
    margin:25px 0px;
    border-radius:20px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    transform:scale(1);
    transition: all .2s ease-in-out;

    :hover{
        transform:scale(1.1);
        box-shadow: 5px 5px 20px 5px rgb(196,205,221);
    }

    


    div.circle{
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:45%;
        padding:5px;
    }

    div.details{
        height:100%;
        // background-color:red;
        width:55%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        .detmain{
            height:55%;
            width:80%;
            // background-color:pink;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
        }
    }

`;

export const Details = styled.div`
    width:100%;
    height:30%;
    // background-color:yellow;
    display:grid;
    grid-template-columns: 15% auto 25%;
    grid-template-rows: 100%;

    span{
        align-self:center;
    }

    span.dot{
        justify-self:center;
    }

    span.cat{
        letter-spacing:1.3px;
        font-weight:600;
        font-size:14px;
        // color:grey;
    }

    span.per{
        align-self:center;
        font-size:12px;
        font-weight:bold;
        color:grey;
    }
`;