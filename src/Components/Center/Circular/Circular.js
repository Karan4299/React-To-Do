import React ,{useContext} from 'react';
import {CircularProgressbarWithChildren,
    buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MainContent from '../../Provider/MainContent';
import  {CircularFrame,Details} from './CircularStyle';

const Det = (props) => {
    return(
        <Details>
            <span className="dot" style={{width:"10px",height:"10px",backgroundColor:props.color,borderRadius:50}}></span>
            <span className="cat">{props.name}</span>
            <span className="per">{props.percent} %</span>
        </Details>
    )

}

const Circular = () => {

    const db =useContext(MainContent);
    const alltasks = db.alltasks;
    // console.log("circular");
    const Categories = ["General","Meeting","Trip"];
    const colors = ["#306CDE","#DD6230","#1FC0C0"];

    const getcount = (cat) => {
        let count =0;
        let total = 0;
        alltasks.forEach(element => {
            if(element.category===cat && !element.done){
                count+=1;
                total+=1;
            }else if(!element.done){
                total+=1;
            }
        });

        return (count/total)*100;
    }

    return(
        <CircularFrame>
            <div className="circle" >
                <CircularProgressbarWithChildren
                    value={getcount("General")}
                    strokeWidth={7}
                    styles={buildStyles({
                    pathColor: "#306CDE",
                    trailColor: "transparent"
                    })}>
                    
                    <div style={{ width: "75%" }}>
                        <CircularProgressbarWithChildren
                            value={getcount("Meeting")}
                            strokeWidth={8}
                            styles={buildStyles({
                            pathColor: "#DD6230",
                            trailColor: "transparent"
                            })}
                        >

                        <div style={{ width: "70%" }}>
                            <CircularProgressbarWithChildren
                                value={getcount("Trip")}
                                strokeWidth={10}
                                styles={buildStyles({
                                pathColor:"#1FC0C0",
                                trailColor: "transparent"
                                })}
                            />
                    </div>

                        </CircularProgressbarWithChildren>
                    </div>
                </CircularProgressbarWithChildren>
            </div>

            <div className="details">
                <div className="detmain">
                    {
                        Categories.map((item,i)=>{
                            return(
                                <Det key= {i} color={colors[i]} name={item} percent = {Math.floor(getcount(item))}></Det>
                            )
                        })
                    }
                </div>
            </div>
        </CircularFrame>
    )
}

export default Circular;