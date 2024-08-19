import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="z-10 absolute bg-black right-3 top-3 rounded-full hover:animate-pulse hover:scale-125 transition-all ease-in-out shadow-md shadow-black/30">
            <Link href="https://github.com/itsmeprinceyt/stopwatch_nextjs" target="_blank">
                <Image 
                className="rounded-full"
                src="/github.png" 
                height={20}
                width={20}
                alt="github logo" />
            </Link>
        </div>
    );
}