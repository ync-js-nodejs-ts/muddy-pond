import Link from 'next/link'
import { TCategoryNormalized } from 'types/posts'

export const Category = ({ category }: { category: TCategoryNormalized }) => {

  if (category.title === 'proximamente') return <li
    className='px-10 w-72 h-72 tabletmin:w-80 tabletmin:h-92 flex flex-wrap justify-center items-center rounded-xl'
    style={{
      background: `repeat padding-box border-box 0% 0%/auto auto scroll linear-gradient(180deg, rgba(102, 102, 102, 0.01) 0%, rgba(102, 102, 102, 0.01) 100%), no-repeat padding-box border-box 36% 57%/cover scroll url(${category.image})`,
    }}
  >
    <h3 className='text-3xl font-bold text-white capitalize'>{category.title}</h3>
  </li>

  return (
    <Link href={`/blog/${category.title}`}>
      <a className='my-5 tabletmin:mx-5'>
        <li
          className='px-10 w-72 h-72 tabletmin:w-80 tabletmin:h-80 flex flex-wrap justify-center items-center rounded-xl'
          style={{
            background: `repeat padding-box border-box 0% 0%/auto auto scroll linear-gradient(180deg, rgba(102, 102, 102, 0.01) 0%, rgba(102, 102, 102, 0.01) 100%), no-repeat padding-box border-box 36% 57%/cover scroll url(${category.image})`,
          }}
        >
          <h3 className='text-3xl font-bold text-white capitalize'>{category.title}</h3>
        </li>
      </a>
    </Link>
  )
}
