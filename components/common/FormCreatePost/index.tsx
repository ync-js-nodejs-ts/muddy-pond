import { useState } from 'react'
import '@uiw/react-md-editor/dist/markdown-editor.css'
import MDEditor from '@uiw/react-md-editor/lib/cjs/MDEditor'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from 'components/layout/Button'
import { rules } from './formConfig'
import { useRouter } from 'next/router'

type TData = {
  title: string
  description: string
}

export const FormCreatePost = () => {
  const [content, setContent] = useState('**Hello world!!!**')
  const { register, handleSubmit, errors, reset } = useForm()
  const router = useRouter()

  const onSubmit: SubmitHandler<TData> = (data) => {
    if (content.length > 10) {
      window
        .fetch('/api/content/salud', {
          method: 'POST',
          body: JSON.stringify({ ...data, content }),
        })
        .then(console.log)
        .then(() => {
          setContent('')
          reset()
          router.push('/admin')
        })
        .catch((err) => console.log(err))
    } else {
      console.error('Necesita escribir mas de 10 caracteres')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center flex-col w-full'>
      <h3 className='text-2xl font-semibold text-gray-700'>Crear articulo para blog de nutrición</h3>
      <input
        className='max-w-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-4 mt-4'
        name='title'
        type='text'
        placeholder='Titulo del Articulo'
        autoFocus
        ref={register(rules.title)}
        tabIndex={1}
      />
      {errors.title && <p className='text-sm text-red-400'>{errors.title.message}</p>}

      <input
        className='max-w-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-4 mt-4'
        name='description'
        type='text'
        placeholder='Descripcción del Articulo'
        ref={register(rules.description)}
        tabIndex={2}
      />
      {errors.description && <p className='text-sm text-red-400'>{errors.description.message}</p>}

      <section className='w-full mt-4 h-96'>
        <MDEditor className='max-w-5xl mx-auto w-full h-full' value={content} onChange={setContent} />
      </section>

      <Button tabIndex={3} type='submit'>
        Enviar
      </Button>
    </form>
  )
}
