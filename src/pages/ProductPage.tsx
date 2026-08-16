import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProductList from '../components/ProductList';
import type { Product } from '../types';
import { initialProducts } from '../data/product';
import { Drawer } from '../components/Drawer';
import ProductForm from '../components/ProductForm';

export default function ProductPage() {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    function closeDrawer() {
        setIsDrawerOpen(false);
    }

    function openDrawer() {
        setIsDrawerOpen(true);
    }

    function handleSave(data: Omit<Product, "id">) {
        setProducts((currentProducts) => [
            ...currentProducts,
            { id: Date.now(), ...data },
        ]);

        closeDrawer();
    }

    return (
        <div className='min-h-screen bg-slate-50'>
            <PageHeader onNewProduct={openDrawer} />

            <main className='mx-auto max-w-7xl px-6 py-8'>
                {/* Product List */}
                <ProductList products={products} />
            </main>

            <Drawer isOpen={isDrawerOpen} title='Nuevo' onClose={closeDrawer}>
                <ProductForm
                    onSave={handleSave}
                    onCancel={closeDrawer}
                />
            </Drawer>
        </div>
    )
}
