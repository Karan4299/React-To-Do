import styled from "styled-components";

export const UpcomingFrame = styled.div`
// background-color:red;
    width:100%;
    height:30%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    // position:relative;
`;


export const UpcomingBlock = styled.div`
    background-color:rgb(247,246,248);
    width:48%;
    height:100%;
    border-radius:15px;
    display:grid;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 30% 15% auto 15%;
    padding:10px;




    div{
        margin-bottom:8px;
        
    }

    div.icons{
        color:${props=>props.color};
        font-size:30px;
    }

    div.category{
        color:grey;
    }

    div.task_name{
        margin-top:5px;
        font-weight:bold;
        width:95%;
        // height:25%;
    }

    div.duration{
        font-size:13px;
        // font-weight:600;
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items:center;
        // background-color:${props=>props.backcolor};

        span{
            margin-right:5px;
            // border:1px solid ${props=>props.color};
            // line-height:23px;
            font-weight:bold;
            border-radius:20px;
            padding:7px 5px;
            color:${props=>props.color};
            background-color:${props=>props.backcolor};
        }

        span.Day{

        }
    }
`;