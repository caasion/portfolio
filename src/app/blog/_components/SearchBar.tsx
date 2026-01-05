interface Props {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = "Search..." }: Props) {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        className="w-full p-2 border rounded-md mb-4"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}