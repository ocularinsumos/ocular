import React from 'react'

const Card = ({prod}) => {
  return (
    <ul className="space-y-4">
    {prod && prod.map((item, index) => (
      <li key={index} className="flex flex-row items-center bg-primary border hover:bg-primary-hover border-gray-200 rounded-lg shadow max-h-full mx-auto max-w-4xl">
        <img className="m-2 md:p-0 object-cover w-32 h-32 md:w-48 md:h-48 rounded-md" src={item.imagen} alt={item.descripcion} aria-label={item.descripcion} title={item.descripcion}/>
        <div className="flex flex-col justify-between py-2 md:p-4 leading-normal w-full ">
          <h2 className="md:mb-2 text-base md:text-2xl font-bold tracking-tight text-gray-300">{item.nombre.toUpperCase()}</h2>
          <p className="md:mb-2 text-xs lg:text-base font-normal text-gray-300">{item.descripcion.toUpperCase()}</p>
          <p className="md:mb-2 text-sm md:text-base font-normal text-gray-300">{item.marca.toUpperCase()}</p>
          <small className="text-xs md:text-sm font-normal text-gray-300">cod: {item.codigo}</small>
        </div>
      </li>
    ))}
  </ul>
  )
}

export default Card