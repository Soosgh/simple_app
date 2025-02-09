export function ProductDetails({ product, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-md w-full max-w-md">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-2" />
                <p className="mb-2">{product.description}</p>
                <p className="font-bold">${product.price}</p>
                <button onClick={onClose} className="mt-4 p-2 bg-red-500 text-white rounded-md">Close</button>
            </div>
        </div>
    );
}
