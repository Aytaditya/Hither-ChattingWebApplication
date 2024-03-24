import React from 'react'

const SearchInput = () => {
  return (
    <>
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search....' className="input input-boarded rounded-full" />
        <button type='submit' className="btn btn-circle bg-sky-500 text-white"><i class="fa-solid fa-magnifying-glass "></i></button>
    </form>
      
    </>
  )
}

export default SearchInput
