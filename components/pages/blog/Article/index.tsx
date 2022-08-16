import Link from "next/link"
import { TArticleRes } from "types/posts"

export const Article = ({ article }: { article: TArticleRes }) => {
  return (
    <article className='my-10' key={article.id}>
      <section>
        <img className='w-full object-cover block rounded-md' src={article.imagen_principal.url} alt={article.titulo} />
      </section>

      <section className='mt-2 px-4 flex flex-row justify-between items-center h-8'>
        <picture className='w-12 h-12 bg-white rounded-full -mb-16 flex justify-center items-center'>
          <img
            src={article.users_permissions_user?.avatar.url}
            width='100%'
            height='100%'
            className='w-10 h-10 rounded-full'
          />
        </picture>

        <span className='ml-2 mt-5 text-lcpYellow-500 text-sm'>{article.users_permissions_user && article.users_permissions_user.username || 'Desconocido'}</span>

        <span className='mt-5 bg-lcpBlue-200 opacity-90 px-2 py-1 rounded text-sm text-white'>
          {article.etiqueta && article.etiqueta}
        </span>
      </section>

      <section className='mt-4 bg-white px-4 pb-4 pt-8 rounded-md'>
        <Link href={`/blog/articulo/${article.slug}`}>
          <a>
            <h3 className='text-gray-700 font-semibold hover:text-lcpYellow-500'>{article.titulo}</h3>
          </a>
        </Link>

        <p className='mt-4'>{article.descripccion}</p>

        <hr className='my-3' />

        <div >
          <Link href={`/blog/articulo/${article.slug}`}>
            <a className='text-gray-500 font-semibold hover:text-lcpYellow-500'>
              Leer Mas
          </a>
          </Link>
        </div>
      </section>
    </article>
  )
}
