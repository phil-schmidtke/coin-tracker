"use client";

export default function Select() {
    return (
        <select className="bg-neutral-800 text-neutral-100 outline-purple-600 ring-0 focus:ring-0 focus:ring-purple-600 rounded-xl p-2 w-full">
            <option value="1">Bitcoin</option>
            <option value="2">Ethereum</option>
            <option value="3">BNB</option>
        </select>
    )
}