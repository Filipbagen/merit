import React from 'react'
import './index-progressbar.css'

const Progressbar = () => {
  const startDate = new Date('09/09/2020')
  const endDate = new Date('06/06/2025')
  const totDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)

  const compleated = Math.floor(((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)))
  const percentageDiff = ((compleated / totDays).toFixed(2)) * 100

  const [value, setValue] = React.useState(0)
  React.useEffect(() => {
    setValue(percentageDiff)
  })

  return (
    <div>
      <h3 className='percent-number' style={{ fontSize: '23px', fontFamily: 'Barlow', textDecoration: 'underline' }}>Klart av MT: {percentageDiff}%</h3>
      <div className='progress-div'>
        <div style={{ width: `${value}%` }} className='progress' />
      </div>
    </div>
  )
}

export default Progressbar
