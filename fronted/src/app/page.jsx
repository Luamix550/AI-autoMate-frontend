"use client";
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  const data = [
    {
      link: '/home/signin',
      textButton: 'Sign in',
      text: 'Welcome Back, Sign in to your account here.'
    },
    {
      link: '/home/signup',
      textButton: 'Sing up',
      text: 'Learn how to leverage automation to optimize your workflow and save time now!'
    },
    {
      link: 'home/about',
      textButton: 'About',
      text: 'Learn about autoMate>>'
    },
  ]

  const LinkElement = ({ data }) => {
    return (
      <Link
        key={data.text}
        href={data.link}
        className="group rounded-lg text-white hover:text-black border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          {data.textButton}
          <span className="inline-block transition-transform translate-x-2 group-hover:translate-x-4 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {data.text}
        </p>
      </Link>
    )
  }

  return (

    <main className="flex min-h-screen flex-col items-center justify-center ">

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 w-full text-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          A software designed to automate data filtering, sorting and organizing processes -&gt;
        </p>
      </div>

        <Image
          className="relative -translate-y-3 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo_deff.png"
          alt="autoMate>> Logo"
          width={370}
          height={37}
          priority
        />

        <div className="mb-32 grid text-center gap-4 sm:grid-cols-2 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          {data.map((datas) => (
            <LinkElement data={datas} />
          ))}
        </div>

    </main>
  )
}
