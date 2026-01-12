import Image from 'next/image';

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: ProjectTag[];
  mediaSrc: string;
  mediaType?: 'image' | 'video';
  mediaPosition?: 'left' | 'right';
}

export interface ProjectTag {
  label: string,
  color: string,
}

export default function ProjectCard({ 
  title, 
  subtitle, 
  description, 
  tags,
  mediaSrc, 
  mediaType = 'image',
  mediaPosition = 'right' 
}: ProjectCardProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center mb-24 scroll-mt-20">
      {/* Content Section */}
      <div className={`flex-1 space-y-4 ${mediaPosition === 'left' ? 'lg:order-2' : ''}`}>
        <div className="flex gap-2">
          {tags.map(({label, color}, index) => (
            <div key={index} className={`${colorClasses[color as keyof typeof colorClasses]} border-2 p-2 w-fit font-mono`}>{label}</div>
          ))}
          
        </div>
        <h2 className="text-4xl font-bold">{title}</h2>
        <h3 className="text-xl text-gray-600 dark:text-gray-400">{subtitle}</h3>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>

      {/* Media Section */}
      <div className={`flex-1 ${mediaPosition === 'left' ? 'lg:order-1' : ''}`}>
        <div className="rounded-lg overflow-hidden shadow-2xl">
          {mediaType === 'video' ? (
            <video 
              src={mediaSrc} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image 
              src={mediaSrc} 
              alt={title}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          )}
        </div>
      </div>
    </div>
  )
}