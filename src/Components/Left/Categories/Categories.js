import React, { useContext , useState, useRef} from 'react';
import MainContent from '../../Provider/MainContent';
import { CateBlock,ColorVBar,CategDetail,CreateTaskBtn,CreateForm,Form } from './CategoriesStyle';





const Cate_frames = (props) => {
    return(
        <CateBlock>
            <ColorVBar style={{borderLeft:'8px solid'+props.color}}></ColorVBar>
            <CategDetail>
                <p className="cate_name">{props.name}</p>
                <p className="task_count">{props.tasks_count} tasks</p>
            </CategDetail>
        </CateBlock>
    )
}


const Categories = () => {

    const current_time = new Date();
    let activeDate = current_time.getDate();
    let activeMonth = current_time.getMonth();
    let activeYear = current_time.getFullYear();
    const[errorMessagename,setErrorname] = useState("");
    const[errorMessagemain,setErrormain] = useState("");

    const daysInCurrentMonth = 40 - new Date(activeYear,activeMonth,40).getDate();

    // const name = useRef('');
    // const data = useRef(new Date());
    const [pop,setPop] = useState(false); 
    const [form,setForm] = useState({
        task_name:"",
        time:"",
        date:"",
        category:"",
        done:false
    });

    const db = useContext(MainContent);
    const categories = db.state;

    const colors = ["#306CDE","#DD6230","#1FC0C0"];
    const dates = [];
    
    for(let i=0;i<5;i++){
        dates.push((activeDate+i===daysInCurrentMonth?daysInCurrentMonth:(activeDate+i)%(daysInCurrentMonth)));
    }
    

    const validateField =(field)=>{
        
         switch (field){
            case "task_name":
                if(form.task_name.length<=3){
                    setErrorname("Min 3 Characters")
                }else{
                    setErrorname("");
                }
                break;
         }

    }

    const handleForm = (field) => (e) => {
        e.preventDefault();
        validateField(field);
        setForm((s)=>({
            ...s,
            [field]:e.target.value,
        }))

        if(field==="category"){
            console.log(categories[e.target.value].tasks_count)
            setForm((s)=>({
                ...s,
                key:categories[e.target.value].tasks_count
            }))
        }


        // console.log(form);
    }


    const handlePopup = (field) => {
        setPop(!pop);
        // console.log(pop);
    }
    const validateForm = () => {
        let temp = Object.values(form);
        for(let i=0;i<temp.length;i++){
            // console.log
            if(temp[i].length===0 || temp[i]==="--"){
                return false;
            }
        }

        return true;
    }


    const FormSubmit=(e)=>{
        e.preventDefault();

        if(validateForm()){
            setPop(!pop);
            db.addCategories(form.category,form);
        }else{
            setErrormain("Please fill up the form")
        }
        // validateForm();
        console.log(form)
    }

    return (
        <React.Fragment>
            {Object.values(categories).map((item,i)=>{
                return (
                    <Cate_frames key= {i} name={item.name} tasks_count={item.tasks_count} color={colors[i]}></Cate_frames>
             )
            })}

            {pop?<CreateForm>
                <Form>
                    <input type="text" name="Name" onChange={handleForm("task_name")}  placeholder="Task.."/>
                    <div className="error">{errorMessagename}</div>
                    <input type="time" onChange={handleForm("time")}></input>
                    <label htmlFor="cars">Choose Date:</label>
                    <select name="cars" id="cars" onChange={handleForm("date")}>
                        <option value="none">--</option>
                        {dates.map((item,i)=><option key={i} value={item}>{item}</option>)}  
                    </select>
                    <label htmlFor="cars">Choose Category:</label>
                    <select  onChange={handleForm("category")}>
                        <option value="none">--</option>
                        {Object.values(categories).map((item,i)=>{
                            return(
                                <option key={i} value={item.name}>{item.name}</option>
                            )
                        })}
                    </select>
                    <div className="error">{errorMessagemain}</div>
                    <input type="submit" onClick={FormSubmit}></input>
                </Form>
            </CreateForm>:""}

            <CreateTaskBtn onClick={handlePopup}>
                <p>{pop?`Cancel`:<i className="fas fa-plus"> <span> Create new Task</span></i> }</p>
            </CreateTaskBtn>

            
        </React.Fragment>
        
    )
}

export default Categories;