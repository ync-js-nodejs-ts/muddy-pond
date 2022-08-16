import { YoutubePlayerVideo } from 'components/pages/recursos/common/YoutubePlayerVideo'

const CurrentVideo = ({ currentVideo }) => {
  return (
    <div>
      <div className='mt-2'>
        <YoutubePlayerVideo videoId={currentVideo} />
      </div>
    </div>
  )
}

export default CurrentVideo
