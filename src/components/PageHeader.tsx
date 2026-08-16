interface Props {
    onNewProduct: () => void;
}

export default function PageHeader({ onNewProduct }: Props) {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div>
                    <h1 className="text-xl font-bold text-slate-900">
                        Gestión de productos
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Administra tu catálogo de productos de forma sencilla.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onNewProduct}
                    className="rounded-xl cursor-pointer bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                    + Nuevo producto
                </button>
            </div>
        </header>
    )
}
