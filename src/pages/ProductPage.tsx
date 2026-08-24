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
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    function closeDrawer() {
        setIsDrawerOpen(false);
        setEditingProduct(null);
    }

    function openDrawer() {
        setEditingProduct(null);
        setIsDrawerOpen(true);
    }

    function handleEdit(product: Product) {
        setEditingProduct(product);
        setIsDrawerOpen(true);
    }

    function handleDelete(id: number) {
        setProducts(currentProducts => currentProducts.filter(p => p.id !== id));
    }

    function handleSave(data: Omit<Product, "id">) {
        if (editingProduct) {
            setProducts(currentProducts => 
                currentProducts.map(p => p.id === editingProduct.id ? { ...data, id: editingProduct.id } : p)
            );
        } else {
            setProducts(currentProducts => [
                ...currentProducts,
                { id: Date.now(), ...data },
            ]);
        }
        closeDrawer();
    }

    return (
        <div className='min-h-screen bg-slate-50'>
            <PageHeader onNewProduct={openDrawer} />

            <main className='mx-auto max-w-7xl px-6 py-8'>
                {/* Product List */}
                <ProductList 
                    products={products} 
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </main>

            <Drawer isOpen={isDrawerOpen} title={editingProduct ? 'Editar' : 'Nuevo'} onClose={closeDrawer}>
                <ProductForm
                    initialProduct={editingProduct}
                    onSave={handleSave}
                    onCancel={closeDrawer}
                />
            </Drawer>
        </div>
    )
}
