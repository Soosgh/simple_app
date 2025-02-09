export function Products({ products, onProductClick }) {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map(product => (
                    <div key={product.id} className="p-2 border rounded-md bg-white" onClick={() => onProductClick(product)}>
                        <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-cover mb-2" />
                        <p>{product.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}