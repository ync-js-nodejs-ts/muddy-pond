import Image from 'next/image'
import { IconPlayPlayer } from 'components/common/Icons/PlayPlayer'
import { TVideo } from 'types'

type TYoutubePlaylistItemProps = { handleClick: (videoId: string) => void; video: TVideo }

export const PlaylistItem = ({ handleClick, video }: TYoutubePlaylistItemProps) => {
  return (
    <li className='text-center flex justify-start items-start mr-2' style={{ width: '85%' }}>
      <figure className='mr-2 relative w-full h-full object-cover'>
        <Image
          src={video.thumbnails.default.url}
          alt={video.title}
          width={video.thumbnails.default.width}
          height={video.thumbnails.default.height}
          className='rounded-lg'
        />
        <div className='absolute h-24 top-0 bg-gray-400 opacity-50'></div>

        <div className='absolute top-0 w-full h-full flex justify-center items-center'>
          <IconPlayPlayer height={50} width={50} handleClick={() => handleClick(video.id)} />
        </div>
      </figure>
      <div className='pt-2'>
        <h3 className='text-sm sm:text-xs'>{video.title}</h3>
      </div>
    </li>
  )
}
