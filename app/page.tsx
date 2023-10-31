
'use client'

import Link from "next/link";
import Stew from '@public/assets/images/stew.jpg';
import Noodles from '@public/assets/images/noodles.jpg';
import Curry from '@public/assets/images/curry.jpg';

export default function Home() {

  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');

  burger?.addEventListener('click', () => {
    if(menu?.classList.contains('hidden')) {
      menu?.classList.remove('hidden');
    }
    else menu?.classList.add('hidden');
  })

  return (
    <section className="home text-gray-600">
      <div className="wrapper md:grid grid-cols-3">
        <div className="nav-container md:col-span-1 md:flex md:justify-end ">
          <nav className="text-right">
            <div className="flex  justify-between items-center">
              <h1 className="logo font-bold uppercase p-4 border-b border-gray-100">
                <Link href="/" className="hover:text-gray-800 transition-all">Moonbami learns TailwindCSS feat. Sass</Link>
              </h1>
              <div className="px-4 cursor-pointer md:hidden" id="burger">
                <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
            </div>
            <ul className="text-sm mt-6 hidden md:block" id="menu">
              <li className="hover:text-gray-700 hover:border-r-4 border-primary transition-all py-1">
                <Link href="#" className="px-4 flex justify-end">
                  <span>Home</span>
                  <svg className="nav-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </Link>
              </li>
              <li className="hover:text-gray-700 hover:border-r-4 border-primary transition-all py-1">
                <Link href="#" className="px-4 flex justify-end">
                  <span>About</span>
                  <svg className="nav-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                  </svg>
                </Link>
              </li>
              <li className="hover:text-gray-700 hover:border-r-4 border-primary transition-all py-1">
                <Link href="#" className="px-4 flex justify-end">
                  <span>Contact</span>
                  <svg className="nav-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <main className="px-16 py-6 bg-gray-100 md:col-span-2">
          <div className="flex justify-center md:justify-end gap-x-2">
            <Link href="#" className="log-sign-btn-hover btn text-primary md:border-2 border-primary">Login</Link>
            <Link href="#" className="log-sign-btn-hover btn text-primary md:border-2 border-primary">Sign up</Link>
          </div>

          <header>
            <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Waifus</h3>
          </header>

          <div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
            <div className="mt-8 grid lg:grid-cols-3 gap-10">
              {/* cards go here */}
              <div className="card card-hover">
                <img src={ Stew.src } alt="Stew" className="w-full h-32 sm:h-48 object-cover" />
                <div className="m-4">
                  <span className="font-bold">Stew</span>
                  <span className="block text-gray-500 text-sm">by Moonbami</span>
                </div>
                <div className="badge">
                  <svg className="clock-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                  </svg>
                  <span>25 Mins</span>
                </div>
              </div>
              <div className="card card-hover">
                <img src={ Noodles.src } alt="Noodles" className="w-full h-32 sm:h-48 object-cover" />
                <div className="m-4">
                  <span className="font-bold">Noodles</span>
                  <span className="block text-gray-500 text-sm">by Moonbami</span>
                </div>
                <div className="badge">
                <svg className="clock-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                  </svg>
                  <span>25 Mins</span>
                </div>
              </div>
              <div className="card card-hover">
                <img src={ Curry.src } alt="Curry" className="w-full h-32 sm:h-48 object-cover" />
                <div className="m-4">
                  <span className="font-bold">Curry</span>
                  <span className="block text-gray-500 text-sm">by Moonbami</span>
                </div>
                <div className="badge">
                <svg className="clock-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                  </svg>
                  <span>25 Mins</span>
                </div>
              </div>
            </div>

            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
            <div className="mt-8">
              {/* cards go here */}
              <div>
              </div>
            </div>

            <div className="flex justify-center ">
              <button className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">Load more</button>
            </div>
          </div>

        </main>
      </div>
    </section>
  )
}
