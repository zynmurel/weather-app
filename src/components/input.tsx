/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { getSuggestedPlaces } from 'src/api/weatherService'

interface Places {
  name: string
  country: string
}
const FreeSolo: React.FC = () => {
  const [places, setPlaces] = useState<Places[]>([])

  const getPlaces = async (input?: string) => {
    const trimmedInput = input?.trim()
    if (trimmedInput && trimmedInput.length > 2) {
      const response = await getSuggestedPlaces(trimmedInput)
      setPlaces(response.data)
    } else {
      setPlaces([])
    }
  }

  return (
    <div style={{ margin: 'auto', maxWidth: 1200, marginTop: 30 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={places}
        getOptionLabel={(option) => option.country}
        renderOption={(option) => option.name}
        filterOptions={(options) => options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search city"
            margin="normal"
            variant="outlined"
            onChange={(e) => getPlaces(e.target.value)}
          />
        )}
      />
    </div>
  )
}
export default FreeSolo
