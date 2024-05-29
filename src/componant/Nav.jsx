import React from 'react'

const Nav = () => {
  return (
    <section className=' fixed w-[100%] top-0 left-0 z-[999] bg-[#1f1f1f] border-b-[3px] border-b-[red]'>
        <div className="container px-[10px] lg:px-0 mx-auto h-[80px]">
            <div className="NavItem flex items-center h-[100%] w-[100%]">
                <h1 className=' font-alsiam mx-auto md:mx-0 text-[#fff] text-[30px]'>Al-Siam</h1>
            </div>
        </div>
    </section>
  )
}

export default Nav