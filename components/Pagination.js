import React from 'react'

export default function Pagination () {
  let classes =
    'py-2 px-3 leading-tight text-gray-500 bg-white border border-dashed border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white/[.10] dark:border-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
  return (
    <nav aria-label='Page navigation example'>
      <ul className='flex items-center justify-center cursor-pointer'>
        <li>
          <button className={classes}>Previous</button>
        </li>
        <li>
          <span className={classes}>1</span>
        </li>
        <li>
          <span className={classes}>2</span>
        </li>
        <li>
          <span aria-current='page' className={classes}>
            3
          </span>
        </li>
        <li>
          <span className={classes}>4</span>
        </li>
        <li>
          <span className={classes}>5</span>
        </li>
        <li>
          <button className={classes}>Next</button>
        </li>
      </ul>
    </nav>
  )
}
