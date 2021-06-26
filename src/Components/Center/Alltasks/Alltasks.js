import React,{useContext} from 'react';
import MainContent from '../../Provider/MainContent';
import { AllFrame,Task } from './AlltasksStyle';


const Tasks = (props) => {
    return(
        <Task>
            {!props.strike?<input type="checkbox" onClick={()=>props.donefn(props.category,props.id)}></input>
            :<input disabled type="checkbox" onClick={()=>props.donefn(props.category,props.id)}></input>}
            <p>{props.strike?<strike>{props.name}</strike>:props.name}</p>
        </Task>
    )
}

const Alltasks = ()=>{
    
    const db = useContext(MainContent);
    const donfn = db.getDone;
    const alltasks = db.alltasks;
    const activeDate = new Date().getDate();

    const todaynst = alltasks.filter((item)=>{
        if(parseInt(item.date)===activeDate && !item.done){
            return (
                <p>karan</p>
            )
        }else{
            return false;
        }
    })

    const todayst = alltasks.filter((item)=>{
        if(parseInt(item.date)===activeDate && item.done){
            return (
                <p>karan</p>
            )
        }else{
            return false;
        }
    })
    
    return (
        <AllFrame>
            {
                todaynst.map((item,i)=>{
                    return(
                        <Tasks key={i} name={item.task_name} strike={false} category={item.category} donefn = {donfn} id={item.key}></Tasks>
                    )
                })
            }

            {
                todayst.map((item,i)=>{
                    return(
                        <Tasks key={i} name={item.task_name} strike={true} donefn = {donfn} id={item.key}></Tasks>
                    )
                })
            }

        </AllFrame>
    )
}

export default Alltasks;