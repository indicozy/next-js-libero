import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Следите за последними событиями в Open-Source.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link href="https://www.youtube.com/channel/UCFApRiCwDrS_OtrdCXuHMBw">
              <a className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white dark:bg-white hover:dark:bg-black dark:text-black hover:dark:text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
                Перейти на Youtube
              </a>
            </Link>
            <Link
              href={`http://t.me/liberoproject`}
            >
              <a className="mx-3 font-bold hover:underline">
                Обсуждайте в Telegram
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
