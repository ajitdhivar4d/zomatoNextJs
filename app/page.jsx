import VenueViewSelector from "@/components/venueViewSelector/VenueViewSelector"
import { fetchDeliveryRestaurants, fetchDiningRestaurants } from "@/utils/api"

export default async function Home() {
  const deliRestaurantData = await fetchDeliveryRestaurants()
  const diningRestaurantData = await fetchDiningRestaurants()
  return (
    <div>
      Main page
      <VenueViewSelector
        deliRestaurantData={deliRestaurantData}
        diningRestaurantData={diningRestaurantData}
      />
    </div>
  )
}
