export const fetchDeliveryRestaurants = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  try {
    const response = await fetch(`${apiUrl}/api/deliveryRestaurantApi`)
    if (!response.ok) {
      throw new Error("API request failed")
    }
    const data = await response.json()
    return data.restaurants || []
  } catch (error) {
    console.error("Error fetching data:", error)
    return []
  }
}
