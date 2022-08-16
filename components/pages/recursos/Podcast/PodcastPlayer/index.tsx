interface IPodcastPlayerProps {
  title: string
  description: string
  createAt: string
  imageUrl: string
  current?: boolean
}

export const PodcastPlayer = ({ title, description, createAt, imageUrl, current }: IPodcastPlayerProps) => {
  return (
    <article className={`${current ? 'max-w-2xl' : 'max-w-xl'} m-auto bg-gray-300 rounded`}>
      <div className='flex justify-between'>
        <section className='flex flex-row justify-between'>
          <figure className='mr-4 relative'>
            <img src={imageUrl} width='96px' height='96px' alt={`LCP Podcast - ${title}`} className='rounded' />

            <div className='absolute w-24 h-24 top-0 bg-gray-400 opacity-50'></div>

            <div className='absolute top-0 w-full h-full flex justify-center items-center'>
              <img onClick={() => console.log('hola')} className='cursor-pointer' src='/icons/play-player.svg' width='50px' height='50px' />
            </div>
          </figure>

          <div className='text-left py-2'>
            <h3 className='font-medium'>{title}</h3>
            <p className='text-sm'>{description}</p>
          </div>
        </section>

        <section className='pr-4 py-2'>
          <p className='text-sm'>{createAt}</p>
          <span className='text-sm'>Descargar</span>
        </section>
      </div>
    </article>
  )
}
