import { Box, Stack, Typography, Button, Container } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import styles from "./Offers.module.css";

export default function Offers() {
    return (
        <>
            <Box py={6} > 
                <Container maxWidth={false} sx={{ width: "90vw", minHeight: "30vh" }}>
                    <Swiper
                        className={styles.swiperWrapper}
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={3}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            600: { slidesPerView: 2 },
                            960: { slidesPerView: 3 },
                        }}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide ><Box component={'img'} src={slider1} className={styles.slideImage} /></SwiperSlide>
                        <SwiperSlide><Box component={'img'} src={slider2} className={styles.slideImage} /></SwiperSlide>
                        <SwiperSlide><Box component={'img'} src={slider1} className={styles.slideImage} /></SwiperSlide>
                        <SwiperSlide><Box component={'img'} src={slider2} className={styles.slideImage} /></SwiperSlide>
                        <SwiperSlide ><Box component={'img'} src={slider1} className={styles.slideImage} /></SwiperSlide>
                        <SwiperSlide><Box component={'img'} src={slider2} className={styles.slideImage} /></SwiperSlide>                        
                    </Swiper>

                </Container>
            </Box>

        </>
    );
}
//sx={{paddingTop:"3rem"}}