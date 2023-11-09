import { FormEvent } from 'react'
import './App.css'
import Item from './Components/Item'
import useItems from './Hooks/useItems'
import useSEO from './Hooks/useSEO'

export type ItemId = `${string}-${string}-${string}-${string}-${string}`



function App() {
  const { items, addItem, removeItem } = useItems()
  
  useSEO({
    title: `[${items.length}] Prueba Tecnica 😎`,
    description: 'Añadir y eliminar elementos de una lista 👀'
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const {elements} = event.currentTarget  
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if(!isInput || input == null) return 

    addItem(input.value)    

    input.value = ''
  }

  const createHandleRemoveItem = (id: ItemId) => () => {
    removeItem(id)
  }

  return (
    <main>
      <aside>
        <h1>Prueba tecnica #1😎</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit} aria-label='Add items'>
          <label>
            Escribe el elemento
            <input name='item' type='text' placeholder='Elemento 👀'/>
          </label>
          <button>Añadir Elemento</button>
        </form>
      </aside>
      <section>
        <h2>Elementos </h2>
        <ul>
          {
            items.length === 0 
            ?
            (
            <strong>No hay elementos</strong>
            ) 
            : 
            (
              items.map((item) => (
                <Item {...item} key={item.id} handleRemove={createHandleRemoveItem(item.id)} />
              ))
            )
          }
        </ul>
      </section>
    </main>
  )
}

export default App
