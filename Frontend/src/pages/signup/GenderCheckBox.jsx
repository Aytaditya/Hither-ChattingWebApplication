import React from 'react'

const  GenderCheckBox=({onCheckBoxChange,selectedGender})=> {

  return (
    <div className='flex'>

        <div className="form-control">
            <label htmlFor="" className="label gap-2 cursor-pointer">
                <span className="label-text text-gray-300">Male</span>
                <input type="checkbox" className="checkbox border-slate-950" checked={selectedGender==="male"} onChange={()=>onCheckBoxChange("male")}/>
                
               {/* The checked attribute is set dynamically based on the condition selectedGender==="male". This means the checkbox will be checked if the selectedGender variable is equal to "male".  */}
                {/* onChange onCheckBoxChange is called with the argument male */}
            </label>
        </div>
        <div className="form-control">
            <label htmlFor="" className="label gap-2 cursor-pointer">
                <span className="label-text text-gray-300">Female</span>
                <input type="checkbox" className="checkbox border-slate-950" checked={selectedGender==="female"} onChange={()=>onCheckBoxChange("female")} />
            </label>
        </div>
      
    </div>
  )
}

export default GenderCheckBox;
