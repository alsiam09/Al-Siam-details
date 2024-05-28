import React from 'react'
import cover from '../assets/cover.jpg'
import Logo from '../assets/img.jpg'
import Card from '../assets/Card.png'
const Profile = () => {
    return (
        <section className='py-[10px] bg-[#1f1f1f]'>
            <div className="container px-[10px] lg:px-[0px] mx-auto">
                <div className=" w-[100%] relative profileImg">
                    <div className=" flex justify-center coverImg">
                        <img src={cover} className='w-[100%] rounded-b-[10px] lg:h-[250px] lg:w-[90%]' alt="" />
                    </div>
                    <div className="ProImg w-[160px] absolute lg:left-[100px] bottom-[-40%] h-[160px] flex justify-center items-center rounded-[50%] bg-[#000000]">
                        <img src={Logo} className='w-[150px] h-[150px] rounded-[50%]' alt="" />
                    <div className="active w-[14px] absolute bottom-[18px] right-[18px] h-[14px] bg-[green] rounded-[50%]"></div>
                    </div>
                </div>
                <div className="Download flex justify-end mx-auto my-[20px] lg:w-[90%]">
                    <a download='alsiamCard.jpg' href={Card}>
                        <h2 className='w-[100px] h-[40px] flex justify-center items-center font-alsiam text-[#fff] text-[15px] rounded-[10px] bg-[red]'>Save Details</h2>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Profile