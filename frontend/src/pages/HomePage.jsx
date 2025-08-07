import React from 'react'
import { useEffect } from 'react'
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    const { fetchProducts, products, deleteProduct } = useProductStore();
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleDelete = async (id) => {
        const confirmed = confirm("Are you sure you want to delete?");
        if (!confirmed) return;
        const res = await deleteProduct(id);
        if (res.success){
            fetchProducts();
        }
    }

    const handleEdit = async(product) =>{
        console.log("Editing", product);
    }
    return (
        <div className='w-full min-h-screen bg-slate-900 text-amber-50 flex justify-center items-center px-4 pb-15'>
            <div className='w-full max-w-6xl'>
                <h1 className="text-5xl font-bold my-15 text-center">PRODUCTS</h1>
                <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} onDelete={handleDelete} onEdit={handleEdit}></ProductCard>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage