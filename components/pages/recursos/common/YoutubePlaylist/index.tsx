import { TPlaylist } from 'types'
import { PlaylistItem } from './PlaylistItem'

type TYoutubePlaylistProps = { handleClick: (videoId: string) => void; playlist: TPlaylist }

export const YoutubePlaylist = ({ handleClick, playlist }: TYoutubePlaylistProps) => {
  return (
    <section className='mt-10'>
      <ul className='flex justify-center items-center flex-wrap flex-col'>
        {playlist.map((video, idx) => {
          if (idx >= 1) return <PlaylistItem key={video.id} video={video} handleClick={handleClick} />
        })}
      </ul>
    </section>
  )
}
