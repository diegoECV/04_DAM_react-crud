import { useState, type FormEvent } from 'react'
import type { Category, Product } from '../types';

interface Props {
    onSave: (product: Omit<Product, "id">) => void;
    onCancel: () => void;
}

export default function ProductForm({ onSave, onCancel }: Props) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState<Category>("Tecnología");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!name.trim() || !price || !stock) {
            return;
        }

        onSave({
            name: name.trim(),
            category,
            price: Number(price),
            stock: Number(stock),
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <p className="text-sm font-medium text-blue-600">
                    Nuevo producto
                </p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Registrar producto
                </h2>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Nombre
                    </label>
                    <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Ej. Laptop Pro 14"
                        className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Categoría
                    </label>
                    <select
                        value={category}
                        onChange={(event) => setCategory(event.target.value as Category)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option>Tecnología</option>
                        <option>Accesorios</option>
                        <option>Oficina</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700">
                            Precio
                        </label>
                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                            placeholder="0.00"
                            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700">
                            Stock
                        </label>
                        <input
                            type="number"
                            min="0"
                            step="1"
                            value={stock}
                            onChange={(event) => setStock(event.target.value)}
                            placeholder="0"
                            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6 flex gap-3">
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex-1 cursor-pointer rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                    Cancelar
                </button>

                <button
                    type="submit"
                    className="flex-1 cursor-pointer rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                    Guardar
                </button>
            </div>
        </form>
    )
}
