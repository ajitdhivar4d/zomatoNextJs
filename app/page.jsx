import VenueViewSelector from "@/components/venueViewSelector/VenueViewSelector"
import { fetchDeliveryRestaurants } from "@/utils/api"

export default async function Home() {
  const restaurantData = await fetchDeliveryRestaurants()
  return (
    <div>
      Main page
      <VenueViewSelector restaurantData={restaurantData} />
    </div>
  )
}
