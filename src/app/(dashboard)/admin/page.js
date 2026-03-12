import { Users, BookOpen, Clock, AlertTriangle } from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    { name: 'Total Pengguna', value: '1,240', icon: Users, color: 'text-indigo-500', bg: 'bg-indigo-100' },
    { name: 'Total Buku', value: '4,520', icon: BookOpen, color: 'text-emerald-500', bg: 'bg-emerald-100' },
    { name: 'Sedang Dipinjam', value: '384', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-100' },
    { name: 'Jatuh Tempo', value: '12', icon: AlertTriangle, color: 'text-rose-500', bg: 'bg-rose-100' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard Admin</h1>
          <p className="text-sm text-slate-500 mt-1">Ringkasan aktivitas dan status perpustakaan.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
            {new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center justify-between group hover:border-indigo-500/50 hover:shadow-md transition-all">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{stat.name}</p>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col items-center justify-center min-h-[300px]">
          <h3 className="text-lg font-bold text-slate-800 w-full mb-4">Grafik Peminjaman Bulanan</h3>
          <div className="flex-1 flex items-center justify-center text-slate-400 text-sm">
            [Area Grafik Aktivitas]
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4 tracking-tight">Aktivitas Terkini</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-indigo-500 shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Peminjaman Buku 00{item}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Oleh Budi Santoso • 2 jam yang lalu</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
            Lihat Semua Aktivitas
          </button>
        </div>
      </div>
    </div>
  );
}