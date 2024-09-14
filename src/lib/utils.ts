import { clsx, type ClassValue } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = 'SecurPaste',
  description = 'A secure and user-friendly Pastebin clone allowing users to create, store, and share text snippets with personal accounts.',
  image = '',
  icons = '/favicon.ico',
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@iamfinzyphinzy_',
    },
    icons,
    metadataBase: new URL('https://securpaste.vercel.app/'),
  }
}
