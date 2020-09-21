import React from 'react'

function BMI() {


    const getbmivalue = () => {
          
        var height = document.getElementById('height').value;
        var weight = document.getElementById('weight').value;           
        
       height=height * 12; 
       height=height * 0.025;

       var newbmivalue =weight / (height*height);

       document.getElementById('bmivalue').value= newbmivalue
       
       
       }; 
        

    return (
        <>
        
         
            
            <div class="card">
        
             <div class="card-body">
            <h5 class="card-title">BMI CALCULATOR</h5> 

            <form onSubmit="return false">
            <div class="form-group">
            <label for="exampleInput">Height</label>
            <input  class="form-control" id ="height" placeholder="Enter your height in ft"></input>
            </div>

            
            <div class="form-group">
            <label for="exampleInput">WEIGHT</label>
            <input  class="form-control" id ="weight" placeholder="Enter your weight in kg"></input>
            </div>
           
            <div class="form-group">
            <label for="exampleInput">BMI  </label>
            <input  class="form-control" id ="bmivalue" ></input>
            </div> 

        
            <button type="submit" class="btn btn-primary" onClick={getbmivalue}>CALCULATE</button>
            </form>
           </div>
          </div>
        </> 
    )
}

export default BMI;
