import Link from 'next/link'
import Image from 'next/image'
import { Telegram, RssFill, Youtube, Github } from 'react-bootstrap-icons';
import ThemeSwitch from './ThemeSwitch'

export default function Header() {
  return (
<div>
    <nav className="mb-8">
        <div className="container mx-auto px-8">
            <div className="flex items-center justify-between h-20  ">
                <div className="w-full justify-between flex items-center ">
                  <div>
                    <a className="flex" href="/">
                        <Image src="/favicon/android-chrome-512x512.png" width="50px" height="50px" alt="logo"/>
                        <span className="hidden md:block text-2xl mb-auto mt-auto font-cantarell pl-6" >Libero Project</span>
                    </a>
                  </div>
                    <div className="hidden md:block leading-5">
                        <div className="ml-10 flex items-middle space-x-4">
                            <a className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md" href="https://www.youtube.com/channel/UCFApRiCwDrS_OtrdCXuHMBw">
                                Youtube
                            </a>
                            <a className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md" href="https://github.com/indicozy">
                                Github
                            </a>
                            <a className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md" href="http://t.me/liberoproject">
                                Telegram
                            </a>
                            <a className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md" href="https://liberoproject.kz/feed">
                                RSS
                            </a>
                            <div className='p-1'>
                                <ThemeSwitch/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="-mr-2 hidden">
                    <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className="mx-auto flex items-center justify-between pt-8 md:hidden space-x-3">
                            <ThemeSwitch  className="mb-auto mt-auto"/>
          <a
            href="https://www.youtube.com/channel/UCFApRiCwDrS_OtrdCXuHMBw"
            className="fill-gray-600 text-gray-900  dark:text-gray-100 transition-colors duration-200 hover:fill-primary-500 dark:fill-gray-100 dark:hover:fill-primary-400"
          >
              <Youtube className='w-5 h-5'/>
          </a>
          <a
            href="https://github.com/indicozy"
            className="fill-gray-600 text-gray-900 dark:text-gray-100 transition-colors duration-200 hover:fill-primary-500 dark:fill-gray-100 dark:hover:fill-primary-400"
          >
              <Github className='w-5 h-5'/>
          </a>
          <a
            href="https://liberoproject.kz/feed"
            className="fill-gray-600 text-gray-900 dark:text-gray-100 transition-colors duration-200 hover:fill-primary-500 dark:fill-gray-100 dark:hover:fill-primary-400"
          >
              <RssFill className='w-5 h-5'/>
          </a>
          <a
            href="http://t.me/liberoproject"
            className="fill-gray-600 text-gray-900 dark:text-gray-100 transition-colors duration-200 hover:fill-primary-500 dark:fill-gray-100 dark:hover:fill-primary-400"
          >
              <Telegram className='w-5 h-5'/>
          </a>
        </div>
            </div>
        </div>
    </nav>
</div>
  )
}
