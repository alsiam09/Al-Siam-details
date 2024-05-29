import React from 'react'
import { FaYoutube ,FaInstagram  } from "react-icons/fa6";
import { FaFacebook , FaLinkedinIn } from "react-icons/fa";

const ManDetailes = () => {
  return (
    <section className='py-[40px] bg-[#1f1f1f]'>
        <div className="container mx-auto">
            <div className="MainBox md:flex flex-wrap justify-between px-[10px] lg:px-[0px] lg:w-[90%] mx-auto">
                <div className="ItemBox md:w-[33.33333%] md:h-[200px] " >
                    <div className="LinkBoxMain  flex justify-around">
                    <div className="flex justify-center items-center  w-[40px] h-[40px] bg-[#dfdfdf] rounded-[50%]">
                    <a href="" className='text-[25px] text-[red]' ><FaYoutube/></a>
                    </div>
                    <div className="flex justify-center items-center  w-[40px] h-[40px] bg-[#dfdfdf] rounded-[50%]">
                    <a href="" className='text-[25px] text-[#3d91ff]' ><FaFacebook/></a>
                    </div>
                    <div className="flex justify-center items-center  w-[40px] h-[40px] bg-[#dfdfdf] rounded-[50%]">
                    <a href="" className='text-[25px] text-[#ff4800]' ><FaInstagram /></a>
                    </div>
                    <div className="flex justify-center items-center  w-[40px] h-[40px] bg-[#dfdfdf] rounded-[50%]">
                    <a href="" className='text-[25px] text-[#3d91ff]' ><FaLinkedinIn/></a>
                    </div>
                    </div>
                    <div className="Details px-[5px] mt-[20px]">
                        <h2 className='text-[15px] font-[600] pt-[10px] text-[#fff]' >Email : <a href="mailto: gmalsiam4200@gmail.com">gmalsiam4200@gmail.com</a></h2>
                        <h2 className='text-[15px] font-[600] pt-[10px] text-[#fff]' >DOB : 06/10/2006</h2>
                        <h2 className='text-[15px] font-[600] pt-[10px] text-[#fff]' >Status : Student</h2>
                    </div>
                </div>
                <div className="ItemBox px-[5px] md:w-[33.33333%]  md:border-x-[1px] border-[#fff] pb-[10px]" >
                    <h2 className='text-[20px] font-[600] text-[#fff]'>My self : <p className='text-[15px] font-[600] text-[#fff]'>In today’s busy world, life moves pretty quickly, and we often take little time to actually sit back and consider how things have changed. Before long, we feel overwhelmed because we didn’t take the time to process as things moved. However, journaling forces you to slow down and truly reflect on life—what happened the last few days that you want to think about? How are things going? This time spent working through your thoughts can significantly strengthen your emotional and mental health.</p> </h2>
                </div>
                <div className="ItemBox md:w-[33.33333%] md:h-[200px] px-[5px]" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.3172971958275!2d89.19186311744384!3d22.8647344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff6f45dabacc0f%3A0xa8030a8113dddfb!2sSiam%20House!5e0!3m2!1sen!2sbd!4v1716963617086!5m2!1sen!2sbd" className='w-[100%] h-[100%]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ManDetailes