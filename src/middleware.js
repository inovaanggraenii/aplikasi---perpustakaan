import { NextResponse } from 'next/server'

export function middleware(request) {
  // TODO: Implement Role-Based Access Control (RBAC) berdasarkan session (misal next-auth)
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
