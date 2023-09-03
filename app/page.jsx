import VenueViewSelector from "@/components/venueViewSelector/VenueViewSelector"
import {
  fetchDeliveryRestaurants,
  fetchDiningRestaurants,
  fetchTopBrandRestaurants,
} from "@/utils/api"

export default async function Home() {
  const deliRestaurantData = await fetchDeliveryRestaurants()
  const diningRestaurantData = await fetchDiningRestaurants()
  const topBrandRestaurantData = await fetchTopBrandRestaurants()
  return (
    <div>
      Main page
      <VenueViewSelector
        deliRestaurantData={deliRestaurantData}
        diningRestaurantData={diningRestaurantData}
        topBrandRestaurantData={topBrandRestaurantData}
      />
    </div>
  )
}
