import { Search, Bell, User } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-3 flex items-center justify-between shrink-0 sticky top-0 z-10 transition-all shadow-sm">
      <div className="flex-1 flex items-center">
        {/* Search Bar */}
        <div className="relative w-full max-w-md hidden md:block group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Cari buku, anggota, atau ID transaksi..." 
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-xl leading-5 bg-slate-50/50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 sm:text-sm transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notification Bell */}
        <button className="relative p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
        </button>

        <div className="h-8 w-px bg-slate-200 mx-1 hidden sm:block"></div>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer group p-1.5 hover:bg-slate-50 rounded-xl transition-all">
          <div className="flex flex-col text-right hidden sm:flex">
            <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-700 transition-colors tracking-tight">Inova Anggraeni</span>
            <span className="text-xs font-medium text-slate-500">Administrator</span>
          </div>
          <div className="h-10 w-10 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-md shadow-indigo-200 ring-2 ring-white group-hover:scale-105 transition-transform">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}