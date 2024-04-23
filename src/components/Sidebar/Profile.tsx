import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
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
        <span className="truncate text-sm font-semibold text-zinc-700">
          Luiz Fernando
        </span>

        <span className="trucate text-sm text-zinc-500">
          luiz-fsilva37@hotmail.com
        </span>
      </div>

      <button type="button" className="mt-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
