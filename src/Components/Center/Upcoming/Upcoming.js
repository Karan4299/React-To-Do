import React, { useContext } from 'react'
import MainContent from '../../Provider/MainContent';
import { UpcomingFrame ,UpcomingBlock} from './UpcomingStyle';

const UpcomingCard = (props) => {
    const activeDate = new Date();
    const activeD = activeDate.getDate();
    const activeYear = activeDate.getFullYear();
    const activeMonth = activeDate.getMonth();

    const day = ["Sunday", "Monday", "Tuesday" ,"Wednesday", "Thursday", "Friday", "Saturday"];

    const getDay = (date) => {
        // console.log(date)
        // console.log()
        if(date===activeD){
            return "Today";
        }else{
            return (day[new Date(activeYear,activeMonth,27).getDay()]);
        }
    }

    console.log(props.color)

    return (
        <UpcomingBlock color={props.color} backcolor={props.backcolor}>
            <div className="icons">{props.icons}</div>
            <div className="category">{props.category}</div>
            <div className="task_name">{props.name}</div>
            <div className="duration">
                <span className="Day">{getDay(parseInt(props.date))}</span>
                <span className="time">{props.time}</span>
            </div>
        </UpcomingBlock>
    )
}


const Upcoming = () => {
    const db = useContext(MainContent);
    // 
    const alltasks = db.alltasks.filter((item)=>{
        if(!item.done){
            return true;
        }else{
            return false;
        }
    });
    // const colors = ["#DD6230","#1FC0C0"];
    const icons = [<i className="fab fa-gg-circle"></i>,<i className="fab fa-stumbleupon-circle"></i>];
    const backc = {General:"rgba(212, 227, 255)",Meeting:"rgb(248,231,236)",Trip:"rgb(228,245,246)"};

    
    


    return (
        <UpcomingFrame>
            {
                alltasks.map((item,i)=>{
                    if(i<2 && !item.done){
                    return (
                        <UpcomingCard key = {i}
                            name={item.task_name} time={item.time} category={item.category} date={item.date} color={db.state[item.category].color} 
                            icons= {icons[i]} backcolor={backc[item.category]}>  
                        </UpcomingCard>
                        
                    )}else{
                        return "";
                    }
                })
            }
        </UpcomingFrame>
    )
}

export default Upcoming;
