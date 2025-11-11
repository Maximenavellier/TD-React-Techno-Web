import { useState, useEffect } from 'react'
import superHeros from './SuperHeros.json'

function App() {
  const nom = "Antoine Leboeuf"
  const [compteur, setCompteur] = useState(0)
  const [recherche, setRecherche] = useState("")

  // Effet pour mettre à jour le titre de la page
  useEffect(() => {
    document.title = `Compteur: ${compteur}`
  }, [compteur])

  const incrementer = () => {
    setCompteur(compteur + 1)
  }

  const reinitialiser = () => {
    setCompteur(0)
  }

  // Filtrer les héros en fonction de la recherche
  const herosFiltres = superHeros.filter(hero => 
    hero.name.toLowerCase().includes(recherche.toLowerCase())
  )

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bonjour {nom}, je découvre React !</h1>
      <p>Compteur : {compteur}</p>
      <button onClick={incrementer} style={{ marginRight: '10px' }}>+</button>
      <button onClick={reinitialiser}>Réinitialiser</button>

      <div style={{ marginTop: '20px' }}>
        <p>Il y a {superHeros.length} super-héros dans la base.</p>
        
        <div style={{ marginTop: '10px' }}>
          <input
            type="text"
            placeholder="Rechercher un super-héros..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            style={{ marginBottom: '10px', padding: '5px' }}
          />
          
          <ul>
            {herosFiltres.map(hero => (
              <li key={hero.id}>{hero.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
