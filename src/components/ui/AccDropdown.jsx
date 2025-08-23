function AccDropdown() {
  return (
    <div className=' w-[180px] text-sm flex flex-col p-3 gap-3 bg-white/95'>
        <div className=' flex flex-col gap-1 items-center'>
            <p>Returning Costumer?</p>
            <button type="button" 
            className='
                border py-1 px-4 rounded-md bg-main text-white 
                font-bold hover:bg-indigo-900 transition-all duration-500 ease-in-out
            '>
                Sign in
            </button>
        </div>
        <div className=' border border-gray-200'></div>
        <div className=' flex flex-col gap-1 items-center'>
            <p>Don't have an account ?</p>
            <button type="button" 
            className='
                border-2 py-1 px-2.5 rounded-md border-main font-bold text-main
                hover:bg-main hover:text-white transition-all duration-500 ease-in-out
            '>
                Register
            </button>
        </div>
    </div>
  )
}

export default AccDropdown