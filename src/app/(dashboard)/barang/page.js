import Link from 'next/link';
import { Plus, Search, Filter, Edit, Trash2, MoreVertical } from 'lucide-react';

export default function BarangPage() {
  // Dummy Data
  const books = [
    { id: 'BK001', title: 'Laskar Pelangi', author: 'Andrea Hirata', category: 'Fiksi', stock: 12, status: 'Tersedia' },
    { id: 'BK002', title: 'Bumi Manusia', author: 'Pramoedya A. Toer', category: 'Sastra', stock: 5, status: 'Tersedia' },
    { id: 'BK003', title: 'Pemrograman Web Next.js', author: 'John Doe', category: 'Teknologi', stock: 3, status: 'Minimum' },
    { id: 'BK004', title: 'Clean Architecture', author: 'Uncle Bob', category: 'Teknologi', stock: 0, status: 'Kosong' },
    { id: 'BK005', title: 'Atomic Habits', author: 'James Clear', category: 'Self-Help', stock: 24, status: 'Tersedia' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Katalog Data Barang</h1>
          <p className="text-sm text-slate-500 mt-1">Kelola direktori buku, majalah, dan inventaris perpustakaan.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href="/barang/create" 
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white font-medium text-sm rounded-lg hover:bg-indigo-700 transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Plus className="w-4 h-4" />
            Tambah Data
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <div className="relative w-full max-w-md hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Cari judul buku, penulis, atau barcode..." 
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
            />
          </div>
          <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 font-medium text-sm rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            <Filter className="w-4 h-4 text-slate-500" />
            Filter Kategori
          </button>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">ID Barang</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Judul / Detail</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Kategori</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Stok</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {books.map((book) => (
                <tr key={book.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-indigo-600">
                    #{book.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">{book.title}</span>
                      <span className="text-sm text-slate-500">{book.author}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                      {book.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-700">
                    {book.stock} unit
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold leading-none ${
                        book.stock > 5 ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                        book.stock > 0 ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                        'bg-rose-100 text-rose-800 border border-rose-200'
                      }`}>
                      {book.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                       <Link href={`/barang/${book.id}/edit`} className="text-slate-400 hover:text-indigo-600 transition-colors p-1.5 bg-slate-50 hover:bg-indigo-50 rounded-lg shadow-sm border border-slate-100">
                         <Edit className="w-4 h-4" />
                       </Link>
                       <button className="text-slate-400 hover:text-rose-600 transition-colors p-1.5 bg-slate-50 hover:bg-rose-50 rounded-lg shadow-sm border border-slate-100">
                         <Trash2 className="w-4 h-4" />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 bg-white border-t border-slate-200 sm:flex sm:items-center sm:justify-between">
          <div className="hidden sm:block">
            <p className="text-sm text-slate-700">
              Menampilkan <span className="font-medium">1</span> s/d <span className="font-medium">5</span> dari <span className="font-medium">24</span> hasil
            </p>
          </div>
          <div className="flex-1 flex justify-between sm:justify-end gap-2 mt-4 sm:mt-0">
            <button className="relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              Sebelumnya
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}