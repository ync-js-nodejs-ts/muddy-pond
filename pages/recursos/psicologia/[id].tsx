import Head from 'next/head'
import Image from 'next/image'
import { TPost, TPosts } from 'types/posts'

export default function PsicologyArticle({ articulo }: { articulo: TPost }) {
  ;<Head>
    <title>Psicologia - La Casa de mi Padre</title>
  </Head>

  return (
    <main className='min-h-screen w-full'>
      <h1>{articulo.titulo}</h1>
      <small>{articulo.createdAt}</small>
      <div>
        <p>{articulo.contenido}</p>
      </div>
      <div>
        <Image
          src={articulo.imagen_principal.formats.thumbnail.url}
          width={articulo.imagen_principal.formats.thumbnail.width}
          height={articulo.imagen_principal.formats.thumbnail.height}
          alt={articulo.titulo}
        />
      </div>
    </main>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch('https://lcpcaracas-cms.herokuapp.com/articulos')
  const articulos: TPosts = await res.json()

  const paths = articulos.map((articulo) => {
    return {
      params: { id: articulo.id },
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://lcpcaracas-cms.herokuapp.com/articulos/${params.id}`)
  const articulo: TPost = await res.json()

  return {
    props: { articulo },
  }
}
