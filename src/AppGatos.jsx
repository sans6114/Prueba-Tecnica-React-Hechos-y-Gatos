import { Card } from './components/Card';
import { Loading } from './components/Loading';
import { useFetchHook } from './hooks/useFetchHook';

export function AppGatos() {

  const { fact, image, isLoading } = useFetchHook()

  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className="mt-10 mb-[100px] text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">React Gatos</h1>
      {/* renderizado condicional del facto extraido de mi API PUBLICA */}
      {isLoading ? (<Loading />) : (<Card img={image} quote={fact} />)}
    </main>
  )
}


