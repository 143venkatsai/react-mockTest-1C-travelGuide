import {
  TravelGuideItem,
  TravelImage,
  TravelDetails,
  TravelName,
  TravelDescription,
} from './styledComponents'

const TravelItem = props => {
  const {travelDetails} = props
  const {imageUrl, name, description} = travelDetails

  return (
    <TravelGuideItem>
      <TravelImage src={imageUrl} alt={name} />
      <TravelDetails>
        <TravelName>{name}</TravelName>
        <TravelDescription>{description}</TravelDescription>
      </TravelDetails>
    </TravelGuideItem>
  )
}

export default TravelItem
