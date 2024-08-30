'use client'
import React, { useState } from 'react';
import Card from '../Card/Card';

const SubCategorias = ({ prod }) => {
  const categorias = [...new Set(prod.map((item) => item.categoria))];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categorias[0]);

  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const productosFiltrados = prod.filter((item) => item.categoria === categoriaSeleccionada);

  return (
    <section>
      <article className="md:hidden">
        <label htmlFor="tabs" className="sr-only">Selecciona una Categoria</label>
        <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 block w-full p-2.5 " value={categoriaSeleccionada} onChange={(e) => handleCategoriaChange(e.target.value)} >
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria} className='font-medium'>
              {categoria.toUpperCase()}
            </option>
          ))}
        </select>
      </article>
      <article className='py-4 top-0'>
        <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow md:flex ">
            {categorias.map((categoria) => (
            <li key={categoria} className="w-full focus-within:z-10">
                <button  onClick={() => handleCategoriaChange(categoria)}
                className={`inline-block w-full px-4  ${categoriaSeleccionada === categoria ? 'text-gray-900 bg-gray-100' : 'bg-white'} border-r border-gray-200 hover:text-gray-700 hover:bg-gray-50 focus:ring-1 focus:outline-none min-h-20 rounded-md`}>
                    {categoria.toUpperCase()}
                </button>
            </li>
            ))}
        </ul>
      </article>
      <article>
        <Card prod={productosFiltrados} />
      </article>
    </section>
  );
};

export default SubCategorias;
