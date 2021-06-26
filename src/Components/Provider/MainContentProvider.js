import React, { useState } from 'react';
import MainContent from './MainContent';

const ContentProvider = ({children}) =>{

    // const colors = ["#306CDE","#DD6230","#1FC0C0"];
    const current_time  =new Date();
    const activeHour = current_time.getHours();
    const activeMinute = current_time.getMinutes();

    let s = (activeHour<10 ? "0"+(activeHour):activeHour)+
                    ":"+(activeMinute<10?"0"+(activeMinute):activeMinute);

                    console.log(s)
    
    const [state,setState] = useState({
        General:{
            name:'General',
            tasks_count:3,
            color:"#306CDE",
            tasks:{
                0:{
                    task_name:"Water the plants",
                    time:(activeHour<10+1 ? "0"+(activeHour+1):activeHour+1)+
                    ":"+(activeMinute<10?"0"+(activeMinute):activeMinute),
                    date:new Date().getDate(),
                    category:"General",
                    done:false,
                    key:0
                },
                1:{
                    task_name:"Dinner with Marie",
                    time:(activeHour<10 ? "0"+(activeHour):activeHour)+
                    ":"+(activeMinute<10?"0"+(activeMinute):activeMinute),
                    date:new Date().getDate()+1,
                    category:"General",
                    done:false,
                    key:1
                },
                2:{
                    task_name:"Dog Food",
                    time:(activeHour<10? "0"+(activeHour+2):activeHour)+
                    ":"+(activeMinute<10+2?"0"+(activeMinute+2):activeMinute+2),
                    date:new Date().getDate()+2,
                    category:"General",
                    done:false,
                    key:2
                }
            }
        },
        Meeting:{
            name:'Meeting',
            tasks_count:4,
            color:"#DD6230",
            tasks:{
                0:{
                    task_name:"Deploy project",
                    time:(activeHour<10 ? "0"+(activeHour):activeHour)+
                    ":"+(activeMinute<10?"0"+(activeMinute):activeMinute),
                    date:new Date().getDate(),
                    category:"Meeting",
                    done:false,
                    key:0
                },
                1:{
                    task_name:"Office Meeting",
                    time:(activeHour<10 ? "0"+(activeHour):activeHour)+
                    ":"+(activeMinute<10?"0"+(activeMinute):activeMinute),
                    date:new Date().getDate()+1,
                    category:"Meeting",
                    done:false,
                    key:1
                },
                2:{
                    task_name:"Project discussion",
                    time:(activeHour<10 ? "0"+(activeHour):activeHour)+
                    ":"+(activeMinute<10?"0"+(activeMinute):activeMinute),
                    date:new Date().getDate()+2,
                    category:"Meeting",
                    done:false,
                    key:2
                },
                3:{
                    task_name:"Meeting with Harry",
                    time:(activeHour-2<10 ? "0"+(activeHour-2):activeHour-2)+
                    ":"+(activeMinute<10?"0"+(activeMinute):activeMinute),
                    date:new Date().getDate()+3,
                    category:"Meeting",
                    done:false,
                    key:3
                }
            }
        },
        Trip:{
            name:'Trip',
            tasks_count:3,
            color:"#1FC0C0",
            tasks:{
                0:{
                    task_name:"Ride with Friends",
                    time:(activeHour<10 ? "0"+(activeHour):activeHour)+
                    ":"+(activeMinute<10?"0"+(activeMinute):activeMinute),
                    date:new Date().getDate()+4,
                    category:"Trip",
                    done:false,
                    key:0
                },
                1:{
                    task_name:"Visit Uncle",
                    time:(activeHour<10 ? "0"+(activeHour):activeHour)+
                    ":"+(activeMinute<10?"0"+(activeMinute):activeMinute),
                    date:new Date().getDate(),
                    category:"Trip",
                    done:false,
                    key:1
                },
                2:{
                    task_name:"Visit Henry",
                    time:(activeHour-1<10 ? "0"+(activeHour-1):activeHour-1)+
                    ":"+(activeMinute<10?"0"+(activeMinute):activeMinute),
                    date:new Date().getDate(),
                    category:"Trip",
                    done:true,
                    key:2
                }
            }
        }
    });

    let alltasks = [];
    Object.values(state).forEach((item,i)=>{
        Object.values(item.tasks).forEach((item,j)=>{
            // if(!item.done){
            alltasks.push(item);
            // }
        })

    });

    alltasks = alltasks.sort(function(a,b){
        if(parseInt(a.date)>parseInt(b.date)){
            return 1;
        }

        if(parseInt(a.date)<parseInt(b.date)){
            return -1;
        }

        if(parseInt(a.date)===parseInt(b.date)){
            if(a.time>b.time){
                return 1;
            }
            if(a.time<b.time){
                return -1;
            }
        }
        // return parseInt(a.date)-parseInt(b.date);
        return 0;
        
    });

    // console.log(alltasks);


    const addCategories =(key,data) => {
        // data["done"] = false;
        // data["key"] = state[key].tasks_count;
        // console.log(data)
        setState(db=>{
            return ({
            ...db,
            [key]:{
                ...db[key],
                tasks_count:db[key].tasks_count+1,
                tasks:{
                    ...db[key].tasks,
                    [db[key].tasks_count]:data,
                    // [db[key].tasks["key"]]:db[key].tasks_count
                    
                },
                
            }
        })});
    }

    

    const getDone = (cat,key) => {
        console.log(key);
        setState(db=>{
            return({
                ...db,
                [cat]:{
                    ...db[cat],
                    tasks_count:db[cat].tasks_count-1,
                    tasks:{
                        ...db[cat].tasks,
                        [key]:{
                            ...db[cat].tasks[key],
                            done:true,
                        }
                    }
                }

            })
        })
    }

    console.log(state);

    return (
        <MainContent.Provider value={{state,addCategories,alltasks,getDone}}>
            {children}
        </MainContent.Provider>
    )
}

export default ContentProvider;