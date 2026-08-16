import { useEffect, useState, type ReactNode } from "react";

interface DrawerProps {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    children: ReactNode;
}

export function Drawer({ isOpen, title, onClose, children }: DrawerProps) {
    const [shouldRender, setShouldRender] = useState(isOpen);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);

            const animationFrame = window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => setIsVisible(true));
            });

            return () => window.cancelAnimationFrame(animationFrame);
        }

        setIsVisible(false);

        const timeout = window.setTimeout(() => setShouldRender(false), 300);

        return () => window.clearTimeout(timeout);
    }, [isOpen]);

    if (!shouldRender) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            <button
                type="button"
                aria-label="Cerrar panel"
                onClick={onClose}
                className={`absolute inset-0 bg-slate-900/40 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
            />
            <aside
                role="dialog"
                aria-modal="true"
                aria-label={title}
                className={`relative h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 ease-out sm:p-8 ${isVisible ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {children}
            </aside>
        </div>
    );
}
