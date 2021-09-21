import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
const useStyle = makeStyles((theme) => ({
  card: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}))
interface Forecast {
  date: string
  condition?: string
  img?: string
  temp?: string
}

const SampleCard: React.FC<Forecast> = ({ date, condition, img, temp }) => {
  const classes = useStyle()
  return (
    <Card className={classes.card} style={{ background: '#FFB599' }}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="h2">
          {condition}
        </Typography>
        <img src={img} alt={'weather icon'} />
        <Typography className={classes.pos} color="textSecondary">
          {temp} <span>&#8451;</span>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SampleCard
