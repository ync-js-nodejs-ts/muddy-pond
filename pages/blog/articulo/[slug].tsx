import Head from 'next/head'
import { GetStaticProps } from 'next'

import { TArticleRes, TArticlesRes } from 'types/posts'
import { config } from 'config'
import { fetchAPI } from 'services/cmsApi'
import Link from 'next/link'

const { CMS: { API } } = config

export default function ArticlePage({ article }: { article: TArticleRes }) {
  return (
    <>
      <Head>
        <title>La Casa de mi padre - Articulos</title>
      </Head>

      <main className='min-h-screen w-full px-4 mt-5 pt-32'>
        <div className='w-full h-full max-w-5xl mx-auto'>
          <Link href='/blog'>
            <a className='text-lg text-lcpYellow-500 font-semibold'> {`<`} Regresar</a>
          </Link>

          <article className='my-10' key={article.id}>
               <section>
                 <img className='w-full object-cover block' src={article.imagen_principal.url} alt={article.titulo} />
               </section>

               <section className='mt-2'>
                 <h3>{article.titulo}</h3>
               </section>

               <section className='mt-4'>
                <p>
                  {article.contenido}
                </p>
               </section>
           </article>
        </div>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const articles: TArticlesRes = await fetchAPI(API.ARTICULOS)

  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article: TArticlesRes = await fetchAPI(`${API.ARTICULOS}?slug=${params.slug}`);

  return {
    props: {
      article: article[0]
    },
  }
}
