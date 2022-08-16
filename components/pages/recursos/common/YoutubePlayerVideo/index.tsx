export const YoutubePlayerVideo = ({ videoId }: { videoId: string }) => {
  return (
    <div className='max-w-3xl mx-auto  mt-10'>
      <div className='w-full h-full flex justify-center items-center relative'>
        <iframe
          width='1024'
          height='400'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='lcpcaracas playlist'
          frameBorder='0'
          className='rounded'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
