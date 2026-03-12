import Link from 'next/link';
import {
  Library,
  LayoutDashboard,
  BookCopy,
  Users,
  FileText,
  Settings,
  LogOut
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-950 text-slate-300 flex flex-col h-screen border-r border-slate-800 transition-all duration-300 shadow-xl z-20 relative">
      <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-900/50">
        <Library className="w-6 h-6 text-indigo-500 mr-3" />
        <span className="text-xl font-bold text-white tracking-tight">Perpustakaan</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1 custom-scrollbar">
        <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 px-2 mt-2">Utama</div>

        <Link href="/admin" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-indigo-500/10 hover:text-indigo-400 group transition-all">
          <LayoutDashboard className="w-5 h-5 mr-3 text-slate-400 group-hover:text-indigo-400 transition-colors" />
          <span className="font-medium text-sm">Dashboard Admin</span>
        </Link>

        <Link href="/petugas" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 group transition-all">
          <Users className="w-5 h-5 mr-3 text-slate-400 group-hover:text-purple-400 transition-colors" />
          <span className="font-medium text-sm">Dashboard Petugas</span>
        </Link>

        <Link href="/peminjam" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-emerald-500/10 hover:text-emerald-400 group transition-all">
          <BookCopy className="w-5 h-5 mr-3 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          <span className="font-medium text-sm">Ruang Peminjam</span>
        </Link>

        <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-6 mb-2 px-2">Manajemen</div>

        <Link href="/barang" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white group transition-all">
          <BookCopy className="w-5 h-5 mr-3 text-slate-400 group-hover:text-white transition-colors" />
          <span className="font-medium text-sm">Katalog Barang</span>
        </Link>

        <Link href="/peminjam/peminjaman" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white group transition-all">
          <Library className="w-5 h-5 mr-3 text-slate-400 group-hover:text-white transition-colors" />
          <span className="font-medium text-sm">Transaksi Pinjam</span>
        </Link>

        <Link href="/admin/laporan" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white group transition-all">
          <FileText className="w-5 h-5 mr-3 text-slate-400 group-hover:text-white transition-colors" />
          <span className="font-medium text-sm">Laporan Sistem</span>
        </Link>

        <Link href="#" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white group transition-all mt-auto">
          <Settings className="w-5 h-5 mr-3 text-slate-400 group-hover:text-white transition-colors" />
          <span className="font-medium text-sm">Pengaturan</span>
        </Link>
      </nav>

      <div className="p-4 border-t border-slate-800 bg-slate-900/30">
        <Link href="/login" className="flex items-center justify-center w-full py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-red-500/20 text-slate-300 hover:text-red-400 transition-all font-medium text-sm group">
          <LogOut className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors" />
          Keluar Sistem
        </Link>
      </div>
    </aside>
  );
}