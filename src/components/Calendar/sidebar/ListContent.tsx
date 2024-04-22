'use client'

const ListContent = () => {
  return (
    <div className='p-4'>
      <h2 className='text-center text-lg'>List</h2>
      <ul className='flex flex-col gap-2'>
        <li className='p-2 rounded-md border border-slate-200 shadow hover:cursor-pointer bg-gradient-to-t from-green-300 to-white'>
          Todo 1
        </li>
        <li className='p-2 rounded-md border border-slate-200 shadow hover:cursor-pointer bg-gradient-to-t from-red-300 to-white'>
          Todo 2
        </li>
        <li className='p-2 rounded-md border border-slate-200 shadow hover:cursor-pointer bg-gradient-to-t from-yellow-300 to-white'>
          Todo 3
        </li>
        <li className='p-2 rounded-md border border-slate-200 shadow hover:cursor-pointer bg-gradient-to-t from-green-300 to-white'>
          Todo 1
        </li>
        <li className='p-2 rounded-md border border-slate-200 shadow hover:cursor-pointer bg-gradient-to-t from-red-300 to-white'>
          Todo 2
        </li>
        <li className='p-2 rounded-md border border-slate-200 shadow hover:cursor-pointer bg-gradient-to-t from-yellow-300 to-white'>
          Todo 3
        </li>
        <li className='p-2 rounded-md border border-slate-200 shadow hover:cursor-pointer bg-gradient-to-t from-green-300 to-white'>
          Todo 1
        </li>
        <li className='p-2 rounded-md border border-slate-200 shadow hover:cursor-pointer bg-gradient-to-t from-red-300 to-white'>
          Todo 2
        </li>
        <li className='p-2 rounded-md border border-slate-200 shadow hover:cursor-pointer bg-gradient-to-t from-yellow-300 to-white'>
          Todo 3
        </li>
      </ul>
    </div>
  )
}

export default ListContent
