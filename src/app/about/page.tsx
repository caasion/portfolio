import Image from 'next/image';
import { HEADLINE, DESCRIPTION, BIOGRAPHY, CALL_TO_ACTION } from '../_components/aboutme-data';

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>

      <div className="grid grid-cols-[1fr_2fr] w-full">
        <div className="relative mx-auto my-auto w-4/5 h-[50vh] overflow-hidden">
          <Image fill src="/images/about/profile.jpg" alt="A profile of Isaac Ng" className="object-cover object-[47%_70%] scale-150"></Image>
        </div>
          
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl mb-4">Isaac Ng</h2>
          <p className="font-mono text-xl mb-8 text-gray-300">{HEADLINE}</p>
          <p className="font-display text-2xl mb-6" dangerouslySetInnerHTML={{ __html: DESCRIPTION.replace(/\n/g, '<br />') }}></p>

          <hr className="mb-4"></hr>

          <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: BIOGRAPHY.replace(/\n/g, '<br />') }}></p>
        </div>
      </div>
    </>
  )
}