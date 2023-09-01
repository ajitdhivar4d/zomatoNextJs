import VenueViewSelector from "@/components/venueViewSelector/VenueViewSelector"
import { fetchDeliveryRestaurants } from "@/utils/api"

export default async function Home() {
  const restaurants = await fetchDeliveryRestaurants()
  console.log(restaurants)
  return (
    <div>
      Main page
      <VenueViewSelector restaurants={restaurants} />
    </div>
  )
}
