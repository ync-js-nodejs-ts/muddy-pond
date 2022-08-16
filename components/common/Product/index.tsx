import Link from 'next/link'
import Image from 'next/image'

export const Product = ({ product }) => {
  return (
    <Link href={`/productos/${product.id}`}>
      <a>
        <article className='mt-6 max-w-xs mx-auto'>
          <picture>
            <Image src={product.image} width={320} height={320} alt={product.title} className='rounded' layout='intrinsic' />
          </picture>

          <section className='text-left'>
            <h2 className='text-base'>{product.title}</h2>
            <span className='text-lg'>${product.price}</span>
          </section>
        </article>
      </a>
    </Link>
  )
}
