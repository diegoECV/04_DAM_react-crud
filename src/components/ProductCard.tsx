import type { Product } from '../types';

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props) {
    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                    <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                        {product.category}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900">
                        {product.name}
                    </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-600">
                    {product.name.charAt(0)}
                </div>
            </div>

            <div className="mb-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Precio</p>
                    <p className="mt-1 font-semibold text-slate-900">
                        S/ {product.price.toLocaleString("es-PE", {minimumFractionDigits: 2})}
                    </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Stock</p>
                    <p className="mt-1 font-semibold text-slate-900">
                        {product.stock} unidades
                    </p>
                </div>
            </div>

            <div className="flex gap-2">
                <button
                    type="button"
                    className="flex-1 cursor-pointer rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="flex-1 cursor-pointer rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                    Eliminar
                </button>
            </div>
        </article>
    )
}
