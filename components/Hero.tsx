import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Keyboard, Mousewheel, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Hero() {
  return (
    <section id="hero">
      <Swiper
        modules={[Keyboard, Pagination, A11y]}
        keyboard
        pagination={{ clickable: true }}
        loop
        slidesPerView={1}
        grabCursor={true}
        speed={1200}
        className="h-screen"
      >
        <SwiperSlide
          className="relative"
          style={{
            backgroundImage: `url('/bg.png')`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="container mx-auto flex pb-5 items-start justify-end flex-col h-full text-white gap-1">
            <h3 className="text-xl font-bold">Name project</h3>
            <span className="text-xs font-light">2023, Lisboa</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="relative"
          style={{
            backgroundImage: `url('/bg.png')`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="container mx-auto flex pb-5 items-start justify-end flex-col h-full text-white gap-1">
            <h3 className="text-xl font-bold">Name project</h3>
            <span className="text-xs font-light">2023, Lisboa</span>
          </div>
        </SwiperSlide>{' '}
        <SwiperSlide
          className="relative"
          style={{
            backgroundImage: `url('/bg.png')`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="container mx-auto flex pb-5 items-start justify-end flex-col h-full text-white gap-1">
            <h3 className="text-xl font-bold">Name project</h3>
            <span className="text-xs font-light">2023, Lisboa</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
