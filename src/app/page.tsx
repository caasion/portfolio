import Image from "next/image";
import { HEADLINE, DESCRIPTION, BIOGRAPHY, CALL_TO_ACTION } from "./_components/aboutme-data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[2fr_1fr] w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-8xl mb-4">Isaac Ng</h2>
          <p className="font-mono text-xl mb-16 text-gray-300">{HEADLINE}</p>
          <p className="font-display text-3xl mb-6">{DESCRIPTION}</p>
          <p className="font-display text-3xl mb-12 text-accent">{CALL_TO_ACTION}</p>

          <div className="flex gap-2">
            <Link href="/projects">
              <button className="bg-gray-900 rounded-2xl p-4 text-xl cursor-pointer font-mono">Explore Projects</button>
            </Link>
            <Link href="https://www.linkedin.com/in/isaacng0/">
              <button className="bg-purple-900 rounded-2xl p-4 text-xl cursor-pointer font-mono">Connect</button>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto my-auto w-4/5 h-[50vh] overflow-hidden">
          <Image fill src="/images/about/profile.jpg" alt="A profile of Isaac Ng" className="object-cover object-[47%_70%] scale-150"></Image>
        </div>
      </div>
    </>
  );
}
