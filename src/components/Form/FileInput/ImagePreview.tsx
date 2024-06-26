'use client'

import { User } from 'lucide-react'
import Image from 'next/image'
import { useMemo } from 'react'
import { useFileInput } from './Root'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (!files.length) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (!previewURL) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10 dark:text-violet-300">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      <Image
        src={previewURL}
        className="h-16 w-16 rounded-full object-cover"
        height={64}
        width={64}
        alt=""
      />
    )
  }
}
