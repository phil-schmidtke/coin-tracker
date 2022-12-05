export default function Navbar() {
    return (
        <div className="flex justify-between p-4">
            <div>
                <h1 className="text-xl font-bold px-4 py-2 cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl">Coin-Tracker</h1>
            </div>
            <div className="flex">
                <a className="px-4 py-2 mx-4 cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl">Home</a>
                <a className="px-4 py-2 mx-4 cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl">Dashboard</a>
                <a className="px-4 py-2 mx-4 cursor-pointer hover:bg-neutral-800 rounded-xl hover:drop-shadow-xl">List</a>
            </div>
            <div>
                Settings
            </div>
        </div>
    )
}