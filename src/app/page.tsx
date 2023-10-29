import PokemonGrid from '@/components/PokemonGrid'

export default function Home() {

  return (
    <div className='relative overflow-hidden'>
      <div className='absolute -top-20 -right-12 z-[-1]'>
        <img src='/images/pokeball.svg' className='h-72 w-72 opacity-10' alt='Pokeball'/>
      </div>
      <main className='p-8 mt-6 flex flex-col gap-5'>
        <h1 className='my-5'>Pokédex</h1>
        <PokemonGrid />
      </main>
    </div>
  )
}
