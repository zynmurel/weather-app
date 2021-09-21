/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { getSuggestedPlaces } from 'src/api/weatherService'

interface Places {
  name: string
  country: string
}
const FreeSolo: React.FC<{ setPlace: (place: string) => void }> = ({ setPlace }) => {
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
    <div style={{ margin: 'auto', minWidth: '100%', marginTop: 30 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={places.map((option) => option)}
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <>
            {option.name}({option.country})
          </>
        )}
        filterOptions={(options) => options}
        onChange={(_e, value) => {
          // @ts-ignore
          setPlace(value?.name)
        }}
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
