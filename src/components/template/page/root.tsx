import { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="dark flex min-h-screen w-full flex-col items-center space-y-2 bg-background p-6">{children}</div>
  )
}
