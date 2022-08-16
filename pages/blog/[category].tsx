import Head from 'next/head'
import { GetStaticProps } from 'next'
import Masonry from 'react-masonry-css'

import { TArticlesRes, TCategoriesRes } from 'types/posts'
import { config } from 'config'
import { fetchAPI } from 'services/cmsApi'
import { useRef } from 'react'
import { Article } from 'components/pages/blog/Article'
import Link from 'next/link'
import { Spinner } from 'components/common/Loader'

const { CMS: { API } } = config

export default function CategoryPage({ articles, currentCategory }: { articles: TArticlesRes, currentCategory: string }) {
  const { current: breakpointCols } = useRef({
    default: 3,
    1400: 3,
    1100: 3,
    900: 2,
    500: 1
  })

  if (!articles) return <Spinner message='Cargando Articulos' />

  return (
    <>
      <Head>
        <title>La Casa de mi padre - Articulos</title>
      </Head>

      <main className='min-h-screen w-full px-4 pt-32 bg-gray-100'>
        <div className='w-full h-full max-w-5xl mx-auto'>
          <section className='text-center'>
            <h4 className='text-3xl font-bold text-gray-700 capitalize'>{currentCategory}</h4>
          </section>

          <Link href='/blog'>
            <a className='text-lg text-lcpYellow-500 font-semibold'>Regresar</a>
          </Link>

          <Masonry
            breakpointCols={breakpointCols}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {
              articles.map(article => <Article key={article.id} article={article} />)
            }
          </Masonry>
        </div>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const categories: TCategoriesRes = await fetchAPI(API.CATEGORIAS)

  const paths = categories.map((category) => ({
    params: {
      category: category.tipo
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articles: TArticlesRes = await fetchAPI(`${API.ARTICULOS}?categoria.tipo=${params.category}`);
  const currentCategory = params.category

  console.log(articles)

  return {
    props: { articles, currentCategory },
  }
}
