import styled from 'styled-components'

export const TravelGuideItem = styled.li`
  list-style-type: none;
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 30px;
`
export const TravelImage = styled.img`
  height: 200px;
  width: 400px;
`
export const TravelDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 10px 20px;
  width: 400px;
`
export const TravelName = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #475569;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const TravelDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  margin-top: 0px;
  padding-bottom: 10px;
`
