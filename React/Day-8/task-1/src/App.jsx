
const App = () => {

  const languages = ["HTML", "CSS", "JavaScript", "React", "Python"]

  return (
    <div>
      <h1>Programming Languages</h1>

      <ul>
        {languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
