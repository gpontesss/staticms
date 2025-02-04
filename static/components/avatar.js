export default function Avatar({ name, picture }) {
  const url = picture.url ?? picture[0].url

  return (
    <div className="flex items-center">
      <img
        src={url}
        className="w-12 h-12 rounded-full mr-4 grayscale"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
