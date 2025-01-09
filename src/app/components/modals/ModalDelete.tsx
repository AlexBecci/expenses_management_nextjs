interface ModalDeleteProps {
    onClose: () => void;
    confirmDelete: () => void;
    name: string
}
export function ModalDelete({ name, onClose, confirmDelete }: ModalDeleteProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
                <h2 className="text-xl  text-gray-900 mb-4">
                    Eliminar Categoria
                </h2>
                <p className="text-gray-600 mb-6">
                    ¿Está seguro de que desea eliminar "{name}"? Esta acción no se puede deshacer.
                </p>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={confirmDelete}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}