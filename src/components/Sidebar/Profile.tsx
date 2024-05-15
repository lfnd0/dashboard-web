import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <div className="h-10 w-10">
        <Image
          src="https://github.com/lfnd0.png"
          className="rounded-full"
          width={40}
          height={40}
          alt=""
        />
      </div>

      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Luiz Fernando
        </span>

        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          luiz-fsilva37@hotmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
