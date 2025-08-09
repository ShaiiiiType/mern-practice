import React from 'react'
import { useState } from 'react'
import { useProductStore } from '../store/product';




const CreatePage = () => {

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const {createProduct} = useProductStore()

    const handleAddProduct = async() => {
        const {success, message} = await createProduct(newProduct);
        if (success) {
            setNewProduct({ name: "",
            price: "",
            image: "",})
        }
        alert(`Success: ${success} | ${message}`);
    }

    return (
        <div className='w-full min-h-screen bg-slate-900 text-amber-50 flex justify-center items-center px-4'>
            <div className='w-full max-w-md bg-slate-800 py-10 px-5 rounded-lg shadow-md space-y-4'>
                <h2 className="text-3xl pb-5 font-bold text-center mb-4">CREATE A PRODUCT</h2>
                <input placeholder='Name' name='name' value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name:e.target.value})}
                className="w-full outline-1 outline-slate-400 p-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"></input>
                <input placeholder='Price' name='price' type='number' value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price:e.target.value})}
                className="w-full p-2 rounded outline-1 outline-slate-400 bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"></input>
                <input placeholder='Image Link' name='image' value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image:e.target.value})}
                className="w-full p-2 rounded outline-1 outline-slate-400 bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"></input>
                <button onClick={handleAddProduct}
                className="w-full bg-sky-500 hover:bg-sky-400 text-white font-semibold py-2 rounded transition duration-300">Add new product</button>
            </div>
        </div>
    )
}

export default CreatePage