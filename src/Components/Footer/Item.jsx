import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";




const Item = ({ Links, title }) => {
  return (
    <div className="flex gap-5">
      
      <a href="https://www.facebook.com/fcsfutminna?mibextid=ZbWKwL">   <FaFacebook className="w-10 h-10 text-gray-500 hover:text-white duration-300 ease-in-out" /></a>
      <a href="https://www.instagram.com/fcsfutminna?igsh=ZDQyZWZ5ejJ5aXRs"><AiFillInstagram className="w-10 h-10 text-gray-500 hover:text-white duration-300 ease-in-out" /></a>
      <a href=""><IoLogoWhatsapp className="w-10 h-10 text-gray-500 hover:text-white duration-300 ease-in-out" /></a>
      <a href="https://youtube.com/@fcsfutminna904?si=vEVb27zN1pkXaeMW"><FaYoutube className="w-10 h-10 text-gray-500 hover:text-white duration-300 ease-in-out" /></a>

     
    </div>
  );
};

export default Item;