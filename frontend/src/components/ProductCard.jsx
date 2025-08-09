import React from 'react'

const ProductCard = ({product, onDelete, onEdit}) => {
  return (
    <div className="bg-slate-800 shadow-md rounded-xl overflow-hidden w-64 sm:w-64 outline-1 outline-slate-700 transform transition-transform duration-300 hover:-translate-y-3">
        <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
        />
        <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-white">{product.name}</h2>
        <p className="text-slate-300">₱{product.price}</p>

        <div className="flex justify-between mt-4">
          <button
            onClick={() => onEdit(product)}
            className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(product._id)}
            className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard