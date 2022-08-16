import Head from 'next/head'
// import Image from 'next/image'
import { config } from 'config'
import { fetchAPI } from 'services/cmsApi'
import { TCategoriesRes } from 'types/posts'
import { CategoryList } from 'components/pages/blog/CategoryList'

const {
  CMS: { API },
} = config

export default function Blog({ categories }) {
  console.log(categories)

  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Blog</title>
      </Head>

      <main className='w-full h-full px-4 text-center pt-32'>
        <h2 className='font-black text-4xl text-gray-700'>Blog - LCP</h2>
        <span className='text-lcpYellow-500'>Elija una categoria</span>
        <CategoryList categories={categories} />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const categoriesRes: TCategoriesRes = await fetchAPI(API.CATEGORIAS)

  const categoriesNormalized = categoriesRes.map((category) => {
    return {
      id: category._id,
      title: category.tipo,
      image: category.imagen_principal.url,
    }
  })

  return {
    props: { categories: categoriesNormalized },
  }
}
