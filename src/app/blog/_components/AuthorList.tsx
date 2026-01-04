type Props = {
  authors: string[]
} & React.HTMLAttributes<HTMLDivElement>;

export default function AuthorsList({authors, className, ...rest }: Props) {
  function processAuthors(authors: string[]) {
    if (authors.length === 0) return "";
    else {
      return "By " + authors.join(", ")
    }
  }

  return (
    <div className={`flex gap-2 ${className}`} {...rest}>
      {processAuthors(authors)}
    </div>
  )
}