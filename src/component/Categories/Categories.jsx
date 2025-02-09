export function Categories({ categories, onCategoryClick }) {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Categories</h2>
            <div className="flex space-x-2 overflow-x-auto">
                {categories.map(category => (
                    <button key={category} onClick={() => onCategoryClick(category)} className="p-2 bg-blue-500 text-white rounded-md">
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}