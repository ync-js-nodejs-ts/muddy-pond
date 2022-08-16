import { Category } from './Category'

export type TCategory = { label: string; to: string; background: string }
type TCategories = TCategory[]

export const ListCategory = () => {
  const categories: TCategories = [
    { label: 'Predicas', to: '/predicas', background: 'predicas' },
    { label: 'Podcast', to: '/podcast', background: 'podcast' },
    { label: 'Nutrición', to: '/nutricion', background: 'nutricion' },
    { label: 'Estudios Biblicos', to: '/estudios-biblicos', background: 'estudios-biblicos' },
  ]

  return (
    <section className='mt-10 max-w-6xl mx-auto'>
      <ul className='flex justify-center items-center flex-wrap'>
        {categories.map((category) => (
          <Category key={category.to} category={category} />
        ))}
      </ul>
    </section>
  )
}
