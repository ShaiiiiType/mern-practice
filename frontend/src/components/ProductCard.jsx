import React from 'react'

const ProductCard = ({product, onDelete, onEdit}) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full sm:w-64 transform transition-transform duration-300 hover:-translate-y-3">
        <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
        />
        <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600">₱{product.price}</p>

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