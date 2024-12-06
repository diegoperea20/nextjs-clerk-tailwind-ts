'use client'

import { ClerkProvider } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <ClerkProvider 
      appearance={{
        baseTheme: undefined
      }}
      navigate={(to) => router.push(to)}
    >
      {children}
    </ClerkProvider>
  )
}