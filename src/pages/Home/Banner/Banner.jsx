import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Scrollbar } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "./style.css"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { Fade, Zoom } from "react-awesome-reveal";

const Banner = () => {

    const { data: yogas = [] } = useQuery({
        queryKey: ["yoga"], queryFn: async () => {
            const res = await axios.get("https://tasnia-yoga-and-meditation-school-server.vercel.app/yoga");
            console.log()
            return res.data;
        }
    });

    console.log(yogas)


    return (
        <div className="">
            
           

        </div>
    )
}

export default Banner
