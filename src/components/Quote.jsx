/* eslint-disable react/prop-types */
import styled from "@emotion/styled"

const Container = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;

`
const Image = styled.img`
  display: block;
  width: 150px;  
`


const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }  
`

const Price = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }  
`

const Quote = ({quote}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = quote
  return (
    <Container>
      <Image 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt="img cripto"/>
      <div>
        <Price> El precio es de: <span>{PRICE}</span></Price>
        <Text> El precio mas alto del dia es de: <span>{HIGHDAY}</span></Text>
        <Text> El precio mas bajo del dia es de: <span>{LOWDAY}</span></Text>
        <Text> La variacion las ultimas 24 horas es de: <span>{CHANGEPCT24HOUR}%</span></Text> 
        <Text> Ultima actuaizacion: <span>{LASTUPDATE}</span></Text>
      </div>

    </Container>
  )
}

export default Quote
