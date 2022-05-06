import { useState } from 'react'

export default function Location () {
  const [locName, setLocName] = useState('')

  const handleLoc = (e) => {
    e.preventDefault()

    setLocName('')
  }

  return (
    <form onSubmit={handleLoc}>
      <input
        type='text'
        value={locName}
        name='location'
        placeholder='Localización'
        id='location-manual'
        onChange={({ target }) => setLocName(target)}
      />
    </form>
  )
}
