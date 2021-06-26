import React,{useContext,useState,useEffect} from 'react';
import MainContent from '../../Provider/MainContent';
import { AllDateFrame, DateFrame,CallFrameBlock } from './AllDatesStyle';
import './AllDates.css';


const CalFrame = (props) => {

    console.log(props.backcolor)
    return(
        <CallFrameBlock color={props.color} backcolor={props.backcolor}>
            <div className="time">{props.time}</div>
            <div className="task_frame">
                <div className="task">
                    <p className="cat">{props.cate}</p>
                    <p className="name">{props.done?<strike>{props.name}</strike>:props.name}</p>
                </div>
            </div>
        </CallFrameBlock>
    )
}

const Dates = (props) => {
    const day = ["Sun", "Mon", "Tue" ,"Wed", "Thu", "Fri", "Sat"];

    
    return (
        <DateFrame  onClick={props.actfn(props.id,props.date)} backco={`${props.act===props.id?"#306CDE":"#F0F4F0"}`} 
        color={props.act===props.id?"white":"black"} colorday={props.act===props.id?"white":"grey"}>
            <p className="date">{props.date}</p>
            <p className="day">{day[(props.date)%7]}</p>
        </DateFrame>
    )
}

const AllDates = () => {
    const db = useContext(MainContent);
    const alltasks = db.alltasks;
    const current_time = new Date();
    let activeDate = current_time.getDate();
    let activeMonth = current_time.getMonth();
    let activeYear = current_time.getFullYear();
    const daysInCurrentMonth = 40 - new Date(activeYear,activeMonth,40).getDate();

    const backc = {General:"#D4E3FF",Meeting:"#F8E7EC",Trip:"#e4f5f6"};

    const[active,setActive] = useState(0);
    // const day
    
    let datetasks = [];

    const setAct = (id,date) =>() => {
        setActive(id);
    }

    


    return(
        <AllDateFrame>
            <div className="dates">
                {
                    alltasks.map((item,i)=>{
                        if(i<5){
                            return <Dates key={i} id={i} act={active} tasks={datetasks} actfn={setAct} date={(activeDate+i===daysInCurrentMonth?daysInCurrentMonth:(activeDate+i)%(daysInCurrentMonth))}></Dates>
                        }else{
                            return "";
                        }
                    })
                }
            </div>
            <div className="cal_frame">
                {
                    alltasks.filter((item)=>{
                        if(parseInt(item.date) === parseInt(activeDate+active) && !item.done){
                            console.log(item)
                            return true
                        }else{
                            return false;
                        }
                    }).map((item,i)=>{
                        return(
                            <CalFrame key={i} time={item.time} name={item.task_name} cate={item.category} done={false} color={db.state[item.category].color} backcolor={backc[item.category]} ></CalFrame>
                        )
                    })
                }
                {
                    alltasks.filter((item)=>{
                        if(parseInt(item.date) === parseInt(activeDate+active) && item.done){
                            console.log(item)
                            return true
                        }else{
                            return false;
                        }
                    }).map((item,i)=>{
                        return(
                            <CalFrame key={i} time={item.time} name={item.task_name} cate={item.category} done={true} color={"grey"} backcolor={backc[item.category]} ></CalFrame>
                        )
                    })
                }
            </div>
        </AllDateFrame>
    )
}

export default AllDates;