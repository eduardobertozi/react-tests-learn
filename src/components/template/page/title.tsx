import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return <h1 className="text-4xl font-bold text-foreground">{children}</h1>
}
