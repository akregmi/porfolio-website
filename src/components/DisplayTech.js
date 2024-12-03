const DisplayTech = ({ tools }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2 mt-4">
      {
        tools.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full border border-blue-600"
          >
            {tech}
          </span>
        ))
      }
    </div>
  )
}

export default DisplayTech