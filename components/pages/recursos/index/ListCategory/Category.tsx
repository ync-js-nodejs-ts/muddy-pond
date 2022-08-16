import Link from 'next/link'
import { TCategory } from './index'

export const Category = ({ category }: { category: TCategory }) => {
  const CalculateCategoryBg = (bg: string) => {
    if (bg === 'predicas') return 'bg-predicas'
    if (bg === 'podcast') return 'bg-podcast'
    if (bg === 'estudios-biblicos') return 'bg-estudios'
    if (bg === 'nutricion') return 'bg-nutricion'
    else return 'bg-nutricion'
  }

  return (
    <li className='w-64 h-64 mx-4 my-4'>
      <Link href={`/recursos${category.to}`}>
        <a>
          <article className='w-full h-full'>
            <div
              className={`w-full h-full ${CalculateCategoryBg(
                category.background
              )} bg-no-repeat bg-cover bg-center content-center flex justify-center items-center hover:opacity-80 transform transition duration-200 ease-in-out hover:scale-105`}
            >
              <div>
                <h2 className='text-xl font-semibold text-white px-2 text-center'>{category.label}</h2>
              </div>
            </div>
          </article>
        </a>
      </Link>
    </li>
  )
}
