import Image from 'next/image';

const HEADLINE: string = "Systems Design | Neuroscience";
const DESCRIPTION: string = `I like startups, systems, and neuroscience. I build fast, learn faster, and value real connection.

Let's get things done.`;
const BIOGRAPHY: string = 
`Hi! I'm Isaac. Welcome to my life operating system, BunOS.

I love bunnies, startups, tech, and neuroscience. I love to explore the intersection of brains and machines. I'm obsessed with efficiency, which drove me to building technology that optimizes complex systems in the real world (i.e. the slow airplane boarding process).

I am a Systems Design Engineering student at the University of Waterloo. I execute and learn fast. I learned that as an important trait from building in Waterloo.`;

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>

      <div className="grid grid-cols-[1fr_2fr] w-full">
        <div className="relative mx-auto w-4/5">
          <Image fill src="/images/about/profile.jpg" alt="A profile of Isaac Ng" className="object-cover object-center "></Image>
        </div>
          
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl mb-4">Isaac Ng</h2>
          <p className="font-mono text-xl mb-12">{HEADLINE}</p>
          <p className="font-display text-2xl" dangerouslySetInnerHTML={{ __html: DESCRIPTION.replace(/\n/g, '<br />') }}></p>

          <p className="" dangerouslySetInnerHTML={{ __html: BIOGRAPHY.replace(/\n/g, '<br />') }}></p>
        </div>
      </div>
    </>
  )
}