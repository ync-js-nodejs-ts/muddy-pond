import Head from 'next/head'
import { useRef } from 'react'
// import Image from 'next/image'
import { HeaderHome } from 'components/pages/home/HeaderHome'
// import { CategoriesSection } from 'components/pages/home/CategoriesSection'
import { PrayRequest } from 'components/pages/home/PrayRequest'

import { IconArrowLeft, IconArrowRight } from 'components/common/Icons'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const responsive = {
  0: { items: 1 },
}

const items = [
  <img key={0} src='/img/gallery/aniversario/1.jpeg' width='100%' height='100%' />,
  <img key={1} src='/img/gallery/aniversario/1.jpeg' width='100%' height='100%' />,
  <img key={2} src='/img/gallery/aniversario/1.jpeg' width='100%' height='100%' />,
  <img key={3} src='/img/gallery/aniversario/1.jpeg' width='100%' height='100%' />,
]

const CarouselGallery = () => {
  const carouselRef = useRef(null)
  return (
    <div className='w-full tabletmin:w-8/12 h-full lgmin:-ml-20 lgmin:mr-14'>
      <div className='w-full lgmin:w-full bg-white shadow px-3 pt-3 pb-20 mt-5 lgmin:mt-24 relative'>
        <AliceCarousel responsive={responsive} mouseTracking disableDotsControls disableButtonsControls items={items} ref={carouselRef} />

        <div className='w-full flex justify-between items-center px-4 mt-4 absolute top-24 tabletmin:top-56 left-0 right-0'>
          <button onClick={() => carouselRef.current.slidePrev()}>
            <IconArrowLeft fill='#FFBD00' />
          </button>

          <button onClick={() => carouselRef.current.slideNext()}>
            <IconArrowRight fill='#FFBD00' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Donde todos tienen un lugar</title>
      </Head>

      <main className='w-full min-h-screen'>
        <HeaderHome />
        <section className='h-full w-full relative bg-lcpBlue-300 overflow-hidden pb-24'>
          <div className='flex lgmin:flex-row-reverse justify-center items-center flex-col px-2 max-w-6xl w-full h-full mx-auto'>
            <div className='w-full lgmin:mt-80 mt-16 text-center self-start'>
              <h3 className='text-4xl text-white font-black'>
                <span className='text-yellow-500'>XVI </span>
                ANIVERSARIO
              </h3>
            </div>

            <CarouselGallery />
          </div>
        </section>
        {/* <CategoriesSection /> */}
        <PrayRequest />
      </main>
    </>
  )
}
