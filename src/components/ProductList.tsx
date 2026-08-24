import type { Product } from '../types';
import ProductCard from './ProductCard';

interface Props {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (id: number) => void;
}

export default function ProductList({ products, onEdit, onDelete }: Props) {
    if (products.length === 0) {
        return (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
                <p className="font-semibold text-slate-700">
                    No se encontraron productos
                </p>
                <p className="mt-1 text-sm text-slate-500">
                    Prueba con otro término de búsqueda o categoría.
                </p>
            </div>
        )
    }

    return (
        <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}
