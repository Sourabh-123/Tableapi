import React,{useState} from 'react'

const TODO=()=> {

   const [inputlist, setInputList] = useState("")
   const [items, setItems] = useState([])


   const itemevent=(e)=>{
    setInputList(e.target.value);
   }

   const listofitem=()=>{
        setItems((olditems)=>{
        return [...olditems,inputlist];
   });
};
    return (
        <div className="main_div">
           <div className="center_div">
               <br/>
               <h1>TOdo list</h1>
               <br/>
               <input type="text" placeholder="Add a list" onChange={itemevent}/>
               <button onClick={listofitem}>+</button>
               <ol>
                
                  
                 {items.map((store)=>{
                      return <li>{store}</li>
                  })}
               </ol>
           </div>
        </div>
    )
}

export default TODO
