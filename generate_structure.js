const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'src');

const files = [
  'app/(auth)/login/page.js',
  'app/(auth)/register/page.js',
  'app/(dashboard)/layout.js',
  'app/(dashboard)/admin/page.js',
  'app/(dashboard)/admin/laporan/page.js',
  'app/(dashboard)/petugas/page.js',
  'app/(dashboard)/petugas/laporan/page.js',
  'app/(dashboard)/peminjam/page.js',
  'app/(dashboard)/peminjam/peminjaman/page.js',
  'app/(dashboard)/peminjam/peminjaman/pinjam-baru/page.js',
  'app/(dashboard)/barang/page.js',
  'app/(dashboard)/barang/create/page.js',
  'app/(dashboard)/barang/[id]/page.js',
  'app/(dashboard)/barang/[id]/edit/page.js',
  'app/api/auth/route.js',
  'app/api/barang/route.js',
  'app/api/peminjaman/route.js',
  'app/api/laporan/route.js',
  'components/layout/Sidebar.js',
  'components/layout/Topbar.js',
  'components/ui/index.js',
  'lib/db.js',
  'lib/utils.js',
];

const getBoilerplate = (filePath) => {
  const isPage = filePath.endsWith('page.js');
  const isLayout = filePath.endsWith('layout.js');
  const isRoute = filePath.endsWith('route.js');

  if (isPage) {
    const parts = filePath.split('/');
    let name = parts[parts.length - 2];
    if (name.startsWith('(') && name.endsWith(')')) {
      name = parts[parts.length - 3] + name.substring(1, name.length - 1);
    }
    name = name.replace(/[^a-zA-Z0-9]/g, '');
    const componentName = name ? name.charAt(0).toUpperCase() + name.slice(1) + 'Page' : 'Page';
    return `export default function ${componentName}() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Halaman ${name || 'Baru'}</h1>
      <p className="text-gray-600">Konten untuk fitur ini akan dibuat pada tahap selanjutnya.</p>
    </div>
  );
}`;
  }

  if (isLayout) {
    return `import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Topbar />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}`;
  }

  if (isRoute) {
    return `export async function GET(request) {
  return new Response(JSON.stringify({ message: 'API Endpoint' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}`;
  }

  if (filePath.includes('Sidebar.js')) {
    return `import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen">
      <div className="p-4 text-xl font-bold border-b border-slate-800">Perpustakaan</div>
      <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Pintas</div>
        
        {/* Contoh menu umum, nantinya akan disesuaikan dengan ROLE */}
        <Link href="/admin" className="p-2 hover:bg-slate-800 rounded transition text-sm">Dashboard Admin</Link>
        <Link href="/petugas" className="p-2 hover:bg-slate-800 rounded transition text-sm">Dashboard Petugas</Link>
        <Link href="/peminjam" className="p-2 hover:bg-slate-800 rounded transition text-sm">Dashboard Peminjam</Link>
        
        <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-4 mb-2">Manajemen</div>
        <Link href="/barang" className="p-2 hover:bg-slate-800 rounded transition text-sm">Data Barang</Link>
        <Link href="/peminjam/peminjaman" className="p-2 hover:bg-slate-800 rounded transition text-sm">Transaksi Peminjaman</Link>
        <Link href="/admin/laporan" className="p-2 hover:bg-slate-800 rounded transition text-sm">Laporan</Link>
      </nav>
    </aside>
  );
}`;
  }

  if (filePath.includes('Topbar.js')) {
    return `import Link from 'next/link';

export default function Topbar() {
  return (
    <header className="bg-white border-b px-6 py-4 flex items-center justify-between shrink-0 hover:bg-slate-50 transition">
      <div className="text-gray-600 font-medium">Aplikasi Manajemen Perpustakaan Terpadu</div>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col text-right">
          <span className="text-sm font-bold text-slate-800">Nama User</span>
          <span className="text-xs text-slate-500">Peran: Guest</span>
        </div>
        <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold shadow-sm">
          U
        </div>
        <Link href="/login" className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition shadow-sm">
          Logout
        </Link>
      </div>
    </header>
  );
}`;
  }

  return `// ${filePath}\n`;
};

files.forEach(file => {
  const fullPath = path.join(basePath, file);
  const dir = path.dirname(fullPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, getBoilerplate(file), 'utf8');
  }
});

// Create middleware in src
const middlewarePath = path.join(basePath, 'middleware.js');
if (!fs.existsSync(middlewarePath)) {
  fs.writeFileSync(middlewarePath, `import { NextResponse } from 'next/server'

export function middleware(request) {
  // TODO: Implement Role-Based Access Control (RBAC) berdasarkan session (misal next-auth)
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
`, 'utf8');
}

console.log('Struktur folder dan file berhasil dibuat!');
