import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Card from "./card";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ItemSwiper = ({ items }) => {
  return (
    <Swiper spaceBetween={30} slidesPerView={3} navigation>
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <Link href={`/${item?.category}/` + item?.id} passHref>
            <a>
              <Card data={item} />
            </a>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ItemSwiper;
