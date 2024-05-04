'use client'

import ListContentItem from "./ListContentItem"

interface ListContentProps {
  id:string
  type: string,
  title: string
}
const ContentList: ListContentProps[] = [
  {
    type: 'task', title: 'Tarea 1',
    id: "40"
  },
  {
    type: 'event', title: 'Evento 2',
    id: "2"
  },
  {
    type: 'invitation', title: 'Esto es random',
    id: "3"
  },
]
  

const ListContent = () => {
  return (
    <div className='p-4'>
      <h2 className='text-center text-lg'>List</h2>
      <ul className='flex flex-col gap-2'>
        {ContentList.map((item) => (
         <li>
         <ListContentItem key={item.id} type={item.type} title={item.title} id={item.id} />
         </li>
        ))}
      </ul>
    </div>
  )
}

export default ListContent
