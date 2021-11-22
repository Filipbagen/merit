import data from '../quotes.json'
import styled from 'styled-components'

const Quote = styled.h2`
    font-family: 'Barlow', sans-serif;
    margin: 20pt 15pt;
`

const Quotes = () => {

    const randomNum = (max) => {
        return Math.floor(Math.random() * max)
    }

    const quote = data.quotes[randomNum(data.quotes.length)].quote

    return (
        <div>
            <Quote>{quote}</Quote>
        </div>
        )
    }
  
  export default Quotes;
  