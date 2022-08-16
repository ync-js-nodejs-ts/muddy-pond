import Head from 'next/head'
import { GetStaticProps } from 'next'
import { ListArticles } from 'components/pages/nutricion/ListArticles'
import { TPosts } from 'types/posts'

export default function NutritionPage({ articulos }: { articulos: TPosts }) {
  return (
    <>
      <Head>
        <title>Salud</title>
      </Head>

      <main className='min-h-screen flex justify-center items-center flex-col'>
        <h2>Articulos de salud</h2>
        <ListArticles articulos={articulos} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://lcpcaracas-cms.herokuapp.com/articulos')
  const articulos: TPosts = await res.json()

  return {
    props: { articulos },
  }
}
