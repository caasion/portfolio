type Props = {
  tags: string[]
} & React.HTMLAttributes<HTMLDivElement>;

export default function TagsList({ tags, className, ...rest }: Props) {
  return (
    <div className={`flex gap-2 ${className}`} {...rest}>
      {tags.map(tag => (
        <p key={tag} className="text-purple-200 text-sm mb-2">{tag}</p>
      ))}
    </div>
  )
}