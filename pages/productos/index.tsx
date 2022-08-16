import Head from 'next/head'

import { Product } from 'components/common/Product'
import { ProductsList } from 'components/common/ProductList'

export default function Productos() {
  const product = {
    price: 10,
    title: 'Taza',
    image: 'https://picsum.photos/id/237/200/300',
    slug: 'taza-lcpcaracas',
  }

  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Tienda</title>
      </Head>

      <main className='w-full min-h-screen px-2 flex justify-center items-center -mt-20'>
        <h3>Tienda</h3>

        <ProductsList>
          <Product product={product} />
        </ProductsList>
      </main>
    </>
  )
}
