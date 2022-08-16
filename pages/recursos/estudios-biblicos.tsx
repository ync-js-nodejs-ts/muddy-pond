import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getEstudiosBiblicos } from 'services/youtubeApi'
import CurrentVideo from 'components/pages/recursos/common/CurrentVideo'
import { Spinner } from 'components/common/Loader'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { PlaylistItem } from 'components/pages/recursos/common/YoutubePlaylist/PlaylistItem'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export default function EstudiosBiblicos() {
  const [currentVideo, setCurrentVideo] = useState<string>('')
  const [playlist, setPlaylist] = useState([])

  const handleClick = (videoId: string) => setCurrentVideo(videoId)

  useEffect(() => {
    getEstudiosBiblicos().then((playlist) => {
      setCurrentVideo(playlist[0].id)
      setPlaylist(playlist)
    })
  }, [])

  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Estudios Biblicos</title>
      </Head>

      <main className='w-full min-h-screen text-center mt-5'>
        <h3 className='text-xl font-bold'>Estudios Biblicos</h3>
        <Link href='/recursos'>
          <a className='text-yellow-400'>Regresar</a>
        </Link>

        {currentVideo === '' ? <Spinner message='Cargando Video' /> : <CurrentVideo currentVideo={currentVideo} />}
        {playlist === [] ? (
          <Spinner message='Cargando Playlist' />
        ) : (
          <section className='mt-6 max-w-6xl mx-auto px-2'>
            <Carousel responsive={responsive}>
              {playlist.map((video, idx) => {
                if (idx >= 1) return <PlaylistItem key={video.id} video={video} handleClick={handleClick} />
              })}
            </Carousel>
          </section>
        )}
      </main>
    </>
  )
}
