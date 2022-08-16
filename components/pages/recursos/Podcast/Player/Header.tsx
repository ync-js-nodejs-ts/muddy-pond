import { Button } from 'components/layout/Button'
import { THEME_IMAGES } from 'services/firebase'

export const HeaderPlayer = () => {
  const descargar = () => {
    THEME_IMAGES.PODCAST_TEST.getDownloadURL()
      .then(function (url) {
        var xhr = new XMLHttpRequest()
        xhr.responseType = 'blob'
        xhr.onload = function (event) {
          var blob = xhr.response
        }
        xhr.open('GET', url)
        xhr.send()
      })
      .catch(console.error)
  }

  return (
    <p className='text-2xl'>
      Header
      <Button callback={descargar}>Descargar</Button>
    </p>
  )
}
