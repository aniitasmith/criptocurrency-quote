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
  width: 120px;  
`

const Text = styled.p`
  font-size: 16px;
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
    <Container id="quote-resolve">
      <Image 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt="img cripto"/>
      <div>
        <Price>The price is: <span>{PRICE}</span></Price>
        <Text>The highest price of the day is: <span>{HIGHDAY}</span></Text>
        <Text>The lowest price of the day is:<span>{LOWDAY}</span></Text>
        <Text>The variation in the last 24 hours is: <span>{CHANGEPCT24HOUR}%</span></Text> 
        <Text>Last update:: <span>{LASTUPDATE}</span></Text>
      </div>

    </Container>
  )
}

export default Quote
