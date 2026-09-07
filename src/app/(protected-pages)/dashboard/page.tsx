// File: src/app/(protected-pages)/dashboard/page.tsx
"use client";

import React from 'react';

// 1. DATA DUMMY
// Ini adalah simulasi data yang nantinya akan kamu dapatkan dari database
const dataInventory = [
  { id: "INV-001", namaBarang: "Laptop Asus ROG", status: "Tersedia", jumlah: 10 },
  { id: "INV-002", namaBarang: "Proyektor Epson", status: "Dipinjam", jumlah: 3 },
  { id: "INV-003", namaBarang: "Kertas HVS A4", status: "Keluar", jumlah: 50 },
  { id: "INV-004", namaBarang: "Spidol Papan Tulis", status: "Keluar", jumlah: 25 },
  { id: "INV-005", namaBarang: "Kamera DSLR Canon", status: "Dipinjam", jumlah: 2 },
  { id: "INV-006", namaBarang: "Meja Kerja", status: "Tersedia", jumlah: 15 },
];

export default function InventoryPanelPage() {
  // 2. LOGIKA PERHITUNGAN OTOMATIS
  
  const totalBarang = dataInventory.reduce((total, item) => total + item.jumlah, 0);

  const barangKeluar = dataInventory
    .filter((item) => item.status === "Keluar")
    .reduce((total, item) => total + item.jumlah, 0);

  const barangDipinjam = dataInventory
    .filter((item) => item.status === "Dipinjam")
    .reduce((total, item) => total + item.jumlah, 0);

  const handleExport = () => {
    alert("Proses Export Data sedang disiapkan!");
  };

  // 3. TAMPILAN HALAMAN
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      
      {/* Header & Tombol */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Inventory Panel</h2>
          <p className="text-gray-500 mt-1">Pantau pergerakan dan status aset barang saat ini.</p>
        </div>
        
        <button 
          onClick={handleExport}
          className="mt-4 sm:mt-0 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-md font-medium transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export Data
        </button>
      </div>

      {/* Kartu Metrik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 flex flex-col justify-center">
          <h3 className="font-semibold text-blue-800 text-lg mb-1">Total Barang</h3>
          <p className="text-sm text-blue-600 mb-3">Jumlah keseluruhan aset terdaftar</p>
          <p className="text-4xl font-extrabold text-blue-700">{totalBarang}</p>
        </div>

        <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 flex flex-col justify-center">
          <h3 className="font-semibold text-orange-800 text-lg mb-1">Barang Keluar</h3>
          <p className="text-sm text-orange-600 mb-3">Total didistribusikan / dipakai</p>
          <p className="text-4xl font-extrabold text-orange-700">{barangKeluar}</p>
        </div>

        <div className="p-6 bg-purple-50 rounded-xl border border-purple-100 flex flex-col justify-center">
          <h3 className="font-semibold text-purple-800 text-lg mb-1">Peminjaman</h3>
          <p className="text-sm text-purple-600 mb-3">Aset berstatus sedang dipinjam</p>
          <p className="text-4xl font-extrabold text-purple-700">{barangDipinjam}</p>
        </div>

      </div>

      {/* 4. BAGIAN TABEL DATA */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Rincian Data Barang</h3>
        
        {/* Pembungkus tabel agar bisa di-scroll secara horizontal di layar kecil (HP) */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            
            {/* Kepala Tabel (Judul Kolom) */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-medium text-gray-900">ID Barang</th>
                <th className="px-6 py-4 font-medium text-gray-900">Nama Barang</th>
                <th className="px-6 py-4 font-medium text-gray-900">Status</th>
                <th className="px-6 py-4 font-medium text-gray-900">Jumlah</th>
              </tr>
            </thead>
            
            {/* Isi Tabel (Data) */}
            <tbody className="divide-y divide-gray-200 bg-white">
              {/* Di sini kita menggunakan .map() untuk mencetak setiap baris dari dataInventory */}
              {dataInventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 text-gray-700">{item.namaBarang}</td>
                  <td className="px-6 py-4">
                    {/* Membuat gaya warna (badge) berdasarkan status barang */}
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                      ${item.status === 'Tersedia' ? 'bg-green-100 text-green-800' : 
                        item.status === 'Keluar' ? 'bg-orange-100 text-orange-800' : 
                        'bg-purple-100 text-purple-800'}
                    `}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{item.jumlah} Unit</td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
      </div>
      
    </div>
  );
}