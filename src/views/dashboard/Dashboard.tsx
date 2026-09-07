import React from 'react'
import {
    PiArchiveDuotone, // <-- Diperbaiki di sini
    PiSignOutDuotone,
    PiHandshakeDuotone,
    PiDownloadSimpleDuotone
} from 'react-icons/pi'

const Dashboard = () => {
    // Fungsi untuk menangani klik tombol export
    const handleExport = () => {
        alert('Fitur Export Data sedang diproses! Nantinya data akan terunduh.')
    }

    // Variabel data tiruan (Bisa diganti dengan data dari API nanti)
    const summaryData = {
        totalBarang: 1254,
        barangKeluar: 342,
        peminjaman: 89
    }

    return (
        <div className="p-6">
            {/* Header Dashboard */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Dashboard Inventaris</h2>
                    <p className="text-gray-500 mt-1">Ringkasan aktivitas dan status inventaris saat ini secara real-time.</p>
                </div>
                
                <button
                    onClick={handleExport}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors font-medium shadow-sm"
                >
                    <PiDownloadSimpleDuotone className="text-xl" />
                    <span>Export Ringkasan</span>
                </button>
            </div>

            {/* Inventory Panel (Metrik) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-full">
                        <PiArchiveDuotone className="text-3xl" /> {/* <-- Diperbaiki di sini */}
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Total Barang</p>
                        <h3 className="text-3xl font-bold text-gray-800">{summaryData.totalBarang}</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow">
                    <div className="p-4 bg-rose-50 text-rose-600 rounded-full">
                        <PiSignOutDuotone className="text-3xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Barang Keluar</p>
                        <h3 className="text-3xl font-bold text-gray-800">{summaryData.barangKeluar}</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow">
                    <div className="p-4 bg-amber-50 text-amber-600 rounded-full">
                        <PiHandshakeDuotone className="text-3xl" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Sedang Dipinjam</p>
                        <h3 className="text-3xl font-bold text-gray-800">{summaryData.peminjaman}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard