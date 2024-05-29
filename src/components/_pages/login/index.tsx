'use client'

import Page from '@/components/template/page'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Login = () => {
  return (
    <Page.Root>
      <Page.Title>Sign In</Page.Title>

      <form className="w-full space-y-2">
        <Input type="text" placeholder="Insira seu email" />
        <Input type="text" placeholder="Insira sua senha" />
        <Button type="button" className="w-full bg-zinc-800 text-foreground hover:bg-violet-700">
          Login
        </Button>
      </form>
    </Page.Root>
  )
}
