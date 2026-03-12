import { redirect } from 'next/navigation';

export default function Home() {
  // Arahkan pengunjung awal langsung ke halaman login
  redirect('/login');
}
