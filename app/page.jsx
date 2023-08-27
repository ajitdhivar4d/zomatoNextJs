import DeliveryComponent from "@/components/deliveryComponent/DeliveryComponent"
import VenueViewSelector from "@/components/venueViewSelector/VenueViewSelector"

export default function Home() {
  return (
    <div>
      Main page
      <VenueViewSelector />
      <DeliveryComponent />
    </div>
  )
}
