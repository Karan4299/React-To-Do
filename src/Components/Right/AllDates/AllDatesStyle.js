import styled from "styled-components";

export const AllDateFrame = styled.div`
    width:100%;
    height:100%;
    background-color:rgba(245,245,248,.8);
    border-radius:15px; 
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding:20px 10px;
    

    div.dates{
        width:100%;
        height:65px;
        border-radius:10px;
        
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }

    div.cal_frame{
        width:100%;
        height:100%;
        // background-color:red;
        overflow:scroll !important;
        margin-top:8%;
    }
`;

export const DateFrame = styled.div`
    width:18%;
    height:100%;
    background-color:${props=>props.backco};
    padding:0px  7px;
    border-radius:18px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:${props=>props.color};
    
    p{
        padding:3px;
    }

    p.date{
        font-weight:bold;
        font-size:14px;
    }

    p.day{
        color:${props=>props.colorday};
        letter-spacing:.8px;
    }

`;

export const CallFrameBlock =styled.div`
    width:100%;
    height:30%;
    // background-color:red;
    
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-bottom:3%;

    div.time{
        width:15%;
        height:100%;
        // background-color:pink
        color:grey;
        font-size:15px;
        
    }

    div.task_frame{
        // position:realtive;
        width:80%;
        height:100%;
        // background-color:red;
        padding-top:15px;
        

        div.task{
            width:210px;
            height:115px;
            background-color:rgb(254,254,254);
            border-top-left-radius: 5px;
            border-top-right-radius: 15px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 15px;
            border-left:8px solid ${props=>props.color};
            transition: all .2s ease-in-out;
            padding:20px 10px;
            box-shadow: 5px 5px 20px 5px rgb(206,212,227);

            :hover{
                // transform:scale(1.1);
                box-shadow: 5px 5px 20px 5px rgb(165, 175, 199);
                transform:scale(1.04) translateX(10px);
            }

            .cat{
                text-transform:uppercase;
                font-size:13px;
                font-weight:bold;
                color: ${props=>props.color};
                margin-bottom:3%;
            }

            .name{
                letter-spacing:.8px;
                font-weight:400;
            }
        }
    }
`;