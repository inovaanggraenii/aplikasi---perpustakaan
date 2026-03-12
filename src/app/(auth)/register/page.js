import Link from 'next/link';
import { UserPlus } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ornaments (Aksen Blur) */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-purple-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px]" />

      <div className="max-w-md w-full space-y-6 bg-slate-900/60 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-slate-800 relative z-10 my-8 shadow-indigo-900/20">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-4">
            <UserPlus className="text-white w-8 h-8" strokeWidth={2} />
          </div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-white tracking-tight">
            Daftar Akun Baru
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            Bergabunglah sebagai anggota Perpustakaan Digital
          </p>
        </div>

        <form className="mt-8 space-y-5" action="#" method="POST">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nama Lengkap</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none relative block w-full px-4 py-3 bg-slate-800/50 border border-slate-700 placeholder-slate-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-slate-800 transition-all sm:text-sm"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-slate-300 mb-1">Alamat Email</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-4 py-3 bg-slate-800/50 border border-slate-700 placeholder-slate-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-slate-800 transition-all sm:text-sm"
                placeholder="nama@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-4 py-3 bg-slate-800/50 border border-slate-700 placeholder-slate-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-slate-800 transition-all sm:text-sm"
                placeholder="Minimal 8 karakter"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-300 mb-1">Konfirmasi Password</label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-4 py-3 bg-slate-800/50 border border-slate-700 placeholder-slate-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-slate-800 transition-all sm:text-sm"
                placeholder="Ulangi sandi Anda"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-900 transition-all shadow-lg shadow-indigo-500/25"
            >
              Daftar Sekarang
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-sm text-slate-400">
          Sudah memiliki akun?{' '}
          <Link href="/login" className="font-semibold text-white hover:text-indigo-400 transition-colors">
            Masuk ke panel
          </Link>
        </div>
      </div>
    </div>
  );
}