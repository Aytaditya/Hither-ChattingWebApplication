import React from 'react'

function GenderCheckBox() {
  return (
    <div className='flex'>

        <div className="form-control">
            <label htmlFor="" className="label gap-2 cursor-pointer">
                <span className="label-text text-gray-300">Male</span>
                <input type="checkbox" className="checkbox border-slate-950" />
            </label>
        </div>
        <div className="form-control">
            <label htmlFor="" className="label gap-2 cursor-pointer">
                <span className="label-text text-gray-300">Female</span>
                <input type="checkbox" className="checkbox border-slate-950" />
            </label>
        </div>
      
    </div>
  )
}

export default GenderCheckBox;
