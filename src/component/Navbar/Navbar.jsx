export function Navbar({ setSelectedCategory }) {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="text-2xl font-bold">MyShop</div>
            <div className="space-x-4">
                <button onClick={() => setSelectedCategory(null)} className="hover:underline">Home</button>
                <button className="hover:underline">Products</button>
                <button className="hover:underline">Create</button>
            </div>
        </nav>
    );
}