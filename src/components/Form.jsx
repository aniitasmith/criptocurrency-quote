/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { currencies } from '../data/currencies'
import useSelectCurrency from '../hooks/useSelectCurrency'
import Error from './Error'

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;
 

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`
const Form = ({setCurrencies}) => {
  const [ criptos, setCriptos ] = useState([])
  const [ error, setError ] = useState(false)

  const [ currency, SelectCurrency ] = useSelectCurrency('Choose your Currency', currencies)
  const [ criptocurrency, SelectCriptocurrency ] = useSelectCurrency('Choose your Criptocurrency', criptos)

  useEffect(() => {
    const queryAPI = async () => {

      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const answer = await fetch(url)
      const result = await answer.json()

      const arrayCriptos = result.Data.map( cripto => {
         const objCripto = {
          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName,
        }
        return objCripto
      })
      setCriptos(arrayCriptos)
    }
    queryAPI()
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    if([currency, criptocurrency].includes('')) {
      setError(true)
      return
    }
    setError(false)
    setCurrencies({
      currency,
      criptocurrency
    })

  }

  return (
    <>
    {error && <Error>All fields are required</Error>}
    <form
      onSubmit={handleSubmit}>
      <SelectCurrency />
      <SelectCriptocurrency />
      <InputSubmit 
        type="submit" 
        value='Quote'
      />
    </form>
    </>
  )
}

export default Form
