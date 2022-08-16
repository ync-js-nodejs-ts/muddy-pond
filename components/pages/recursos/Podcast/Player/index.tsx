import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { HeaderPlayer } from './Header'

export const Player = () => (
  <AudioPlayer
    header={<HeaderPlayer />}
    src='https://firebasestorage.googleapis.com/v0/b/lcp-caracas-test.appspot.com/o/podcasts%2Flcpcaracas-sigamos-adelante.mp3?alt=media&token=731d49b7-5ac8-4510-9565-4e665ad04769'
    onPlay={(e) => console.log('onPlay')}
    layout='stacked'
    className='max-w-2xl mx-auto'
  />
)
