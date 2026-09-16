"use client";

import React, { useState } from 'react';

// --- 1. Cetakan Data (Interface) dengan penyesuaian untuk Lab Sekolah ---
interface InventoryItem {
  id: string;
  kodeLab: string;
  namaLab: string;
  kelas: string;
  status: 'Tersedia' | 'Dipinjam' | 'Keluar';
}

export default function InventoryPanel() {
  // --- 2. Data Dummy Baru (Ruangan Lab Sekolah dan Kelas) ---
  const [inventoryData] = useState<InventoryItem[]>([
    { id: '1', kodeLab: 'LAB-KOM-01', namaLab: 'Laboratorium Komputer Utama', kelas: 'Kelas XII RPL', status: 'Tersedia' },
    { id: '2', kodeLab: 'LAB-FIS-02', namaLab: 'Laboratorium Fisika Dasar', kelas: 'Kelas XI MIPA', status: 'Dipinjam' },
    { id: '3', kodeLab: 'LAB-KIM-03', namaLab: 'Laboratorium Kimia Analitik', kelas: 'Kelas XII MIPA', status: 'Keluar' },
    { id: '4', kodeLab: 'LAB-BIO-04', namaLab: 'Laboratorium Biologi Terpadu', kelas: 'Kelas X Fase E', status: 'Tersedia' },
  ]);

  // --- 3. Fungsi untuk Mewarnai Status (Badge) ---
  const renderStatusBadge = (status: string) => {
    let bgColor = '';
    let textColor = '';

    if (status === 'Tersedia') {
      bgColor = '#dcfce7'; // Hijau pastel
      textColor = '#166534'; // Hijau tua
    } else if (status === 'Dipinjam') {
      bgColor = '#f3e8ff'; // Ungu pastel
      textColor = '#6b21a8'; // Ungu tua
    } else if (status === 'Keluar') {
      bgColor = '#ffedd5'; // Oranye pastel
      textColor = '#9a3412'; // Oranye tua
    }

    return (
      <span 
        className="badge rounded-pill px-3 py-2" 
        style={{ backgroundColor: bgColor, color: textColor, fontWeight: 'normal' }}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="container-fluid p-4" style={{ backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      
      {/* --- Bagian Header & Tombol --- */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h2 className="fw-bold mb-1" style={{ color: '#1f2937' }}>Panel Inventaris Ruangan Lab</h2>
          <p className="text-muted mb-0">Pantau ketersediaan dan status penggunaan laboratorium sekolah.</p>
        </div>
        <button className="btn btn-success d-flex align-items-center gap-2 px-4 py-2" style={{ backgroundColor: '#059669', border: 'none', borderRadius: '8px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Export Data
        </button>
      </div>


      {/* --- Bagian Tabel Data Rincian Lab --- */}
      <div className="mt-4">
        <h4 className="fw-bold mb-4" style={{ color: '#1f2937' }}>Rincian Ruangan Lab dan Kelas</h4>
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            {/* Header Tabel */}
            <thead style={{ backgroundColor: '#f9fafb' }}>
              <tr>
                <th scope="col" className="py-3 px-4 border-0 rounded-start" style={{ color: '#4b5563', fontWeight: '600' }}>Kode Lab</th>
                <th scope="col" className="py-3 px-4 border-0" style={{ color: '#4b5563', fontWeight: '600' }}>Nama Laboratorium</th>
                <th scope="col" className="py-3 px-4 border-0" style={{ color: '#4b5563', fontWeight: '600' }}>Pengguna / Kelas</th>
                <th scope="col" className="py-3 px-4 border-0 rounded-end" style={{ color: '#4b5563', fontWeight: '600' }}>Status</th>
              </tr>
            </thead>
            
            {/* Isi Tabel */}
            <tbody className="border-top-0">
              {inventoryData.map((item) => (
                <tr key={item.id}>
                  <td className="py-3 px-4 text-muted">{item.kodeLab}</td>
                  <td className="py-3 px-4 fw-medium text-dark">{item.namaLab}</td>
                  <td className="py-3 px-4 text-dark">{item.kelas}</td>
                  <td className="py-3 px-4">
                    {renderStatusBadge(item.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}