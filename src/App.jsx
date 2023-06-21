// import { useState } from 'react'
import styled from '@emotion/styled'
import CriptoImg from './assets/img/imagen-criptos.png'
import Form from './components/form'
import { useEffect, useState } from 'react'
import Quote from './components/Quote'
import Spinner from './components/Spinner'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 250px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
  
`

const Heading = styled.h1`
  font-family: 'ato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content:'';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [ currencies, setCurrencies ] = useState({})
  const [ quote, setQuote ] = useState({})
  const [ loading, setLoading ] = useState(false)



  useEffect(() => {
    if(Object.keys(currencies).length > 0) {
      const quoteCripto = async () => {
        setLoading(true)
        setQuote({})
        const {currency, criptocurrency} = currencies
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocurrency}&tsyms=${currency}`
        const answer = await fetch(url)
        const result = await answer.json()
      
       setQuote(result.DISPLAY[criptocurrency][currency])
       setLoading(false)
      }
      quoteCripto()
    }
  },[currencies])

  useEffect(() => {
    const autoScroll = () => {
      if (quote.PRICE){
        document.getElementById('quote-resolve').scrollIntoView()
    }
  }
  autoScroll()
  },[quote])
  
  return (
    <Container>
      <Image
        src={CriptoImg}
        alt='Cripto Img'
       />
      <div>
        <Heading>Trade cryptocurrencies instantly</Heading>
        <Form
          setCurrencies={setCurrencies}
        />
        {loading && <Spinner/>}
        {quote.PRICE && <Quote quote={quote}/>}
        </div>
    </Container>
  )
}

export default App
