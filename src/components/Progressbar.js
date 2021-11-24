import React from 'react'
import './index-progressbar.css'

const Progressbar = () => {
  const startDate = new Date('09/09/2020')
  const endDate = new Date('06/06/2025')
  const totDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)

  const compleated = Math.floor(((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)))
  const percentageDiff = ((compleated / totDays).toFixed(2)) * 100
  console.log(percentageDiff)

  const [value, setValue] = React.useState(0)
  React.useEffect(() => {
    setValue(percentageDiff * 6) // Pixlar, hela progress baren är typ 600 px. blir tex 25 * 6 av 600, ist för 25 av 100.
  })

  return (
    <div>
      <h3 className='percent-number'>Klart av MT: {percentageDiff}%</h3>
      <div className='progress-div'>
        <div style={{ width: `${value}px` }} className='progress' />
      </div>
    </div>
  )
}

export default Progressbar
