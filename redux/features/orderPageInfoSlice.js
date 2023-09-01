import { createSlice } from "@reduxjs/toolkit"

const initialOrderPageInfo = [
  {
    name: "Rawat Mishthan Bhandar",
    rating: 4.3,
    restroImgUrl:
      "https://b.zmtcdn.com/data/pictures/chains/0/100910/c996bd831916a8de5b9bfe7cd7d5dadd.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    numDiningReviews: 0,
    diningRating: 0,
    numDeliveryReviews: 1325,
    deliveryRating: 4.3,
    categories: [
      "Kachori",
      "Street Food",
      "South Indian, Chinese",
      "North Indian",
      "Dosa",
      "Fast Food",
    ],
    location:
      "Charan Ture & Travels, WQCW+FVX, polo victory ke samne Jaipur Raj, Jaipur",
    openingHours: "11:00 AM – 9:00 PM (Today)",
    menu: [
      {
        name: "Kachori",
        description: "Enjoy",
        items: [
          {
            name: "Pyaz Kachori",
            description:
              "Indulge in the delightful flavors of Pyaz Kachori, a popular Indian snack that ... read more",
            price: 45,
            votes: 856,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/30d/c7876207d36fb05a935923a11693c30d.jpg?fit=around|130:130&crop=130:130;*,*",
          },
          {
            name: "Samosa",
            description:
              "Treat yourself to the classic and irresistible taste of Samosa, a popular Indian ... read more",
            price: 40,
            votes: 112,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/1d7/e588a55b1c25483160ce3845f885a1d7.jpg?fit=around|130:130&crop=130:130;*,*",
          },
        ],
      },
      {
        name: "Best in Dosa",
        description: "Enjoy",
        items: [
          {
            name: "Masala Dosa",
            description:
              "Experience the traditional flavors of Masala Dosa, a popular South Indian dish that ... read more",
            price: 175,
            votes: 19,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/6ce/51116d00390eaff910a0c313a22fe6ce.jpg?fit=around|130:130&crop=130:130;*,*",
          },
          {
            name: "Plain Dosa",
            description:
              "Savor the simplicity of Plain Dosa, a classic South Indian dish made from fermented rice and lentil batter. It is thin, crispy, and golden brown, perfect to enjoy with a side of chutney and sambar.",
            price: 150,
            votes: 30,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/997/46dc61312b0b5d322020558508646997.jpg?fit=around|130:130&crop=130:130;*,*",
          },
        ],
      },
      {
        name: "Ghewar Special",
        description:
          "A traditional Rajasthani sweet known for its intricate honeycomb-like texture. Made from a ... read more",
        items: [
          {
            name: "Ghewar Meetha",
            description:
              "A traditional Rajasthani sweet that is a feast for the senses. Made from ... read more",
            price: 195,
            votes: 81,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/14b/5425c48896589449c060a23f1adc014b.jpg?fit=around|130:130&crop=130:130;*,*",
          },
          {
            name: "Ghewar Rabdi",
            description:
              "A traditional Rajasthani dessert that combines the delicate sweetness of Ghewar with the ... read more",
            price: 195,
            votes: 189,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/ac5/2f674be1e7d3a506171049d78368eac5.jpg?fit=around|130:130&crop=130:130;*,*",
          },
        ],
      },
      {
        name: "Bangali Sweets",
        description: "Enjoy Bangali Sweets",
        items: [
          {
            name: "Anurodh",
            description: "enjoy",
            price: 125,
            votes: 81,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/98e/86796b44a4aadcc1945af370b800a98e.jpg?fit=around|130:130&crop=130:130;*,*",
          },
          {
            name: "Badam Bhog",
            description:
              "A delightful Indian sweet made with premium almonds, sugar, and a touch of ... read more",
            price: 131,
            votes: 189,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/ffa/eb50b142225c10f7182e38b4d43a2ffa.jpg?fit=around|130:130&crop=130:130;*,*",
          },
          {
            name: "Chamcham",
            description:
              "A traditional Bengali sweet crafted from chhana (cottage cheese) and immersed in a ... read more",
            price: 131,
            votes: 180,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/aba/015b0478624ee776cbe2666fb3a0aaba.jpg?fit=around|130:130&crop=130:130;*,*",
          },
          {
            name: "Chena Murki",
            description:
              "A traditional Indian sweet made from freshly prepared chhana (cottage cheese) and coated ... read moreA traditional Bengali sweet crafted from chhana (cottage cheese) and immersed in a ... read more",
            price: 131,
            votes: 205,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/dcf/c08d60b1f0aefab0f02967ecef2b5dcf.jpg?fit=around|130:130&crop=130:130;*,*",
          },
          {
            name: "Chhena Tost",
            description:
              "A popular Bengali dessert made with chhana (cottage cheese) and bread. These delectable ... read more",
            price: 119,
            votes: 45,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/6e2/65b33c1f76b26b9921a7844c4b4506e2.jpg?fit=around|130:130&crop=130:130;*,*",
          },
        ],
      },
      {
        name: "Barfi",
        description: "Enjoy Barfi",
        items: [
          {
            name: "Akhrot Barfi",
            description:
              "A delectable Indian sweet made with walnuts (akhrot) and a perfect blend of ... read more",
            price: 125,
            votes: 81,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/2e7/f679e9ec39efb615c50e524e622e62e7.jpg?fit=around|130:130&crop=130:130;*,*",
          },
          {
            name: "Doda Barfi",
            description:
              "Indulge in the delightful taste of Doda Barfi, a traditional Indian sweet that ... read more",
            price: 125,
            votes: 189,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/ef4/d3c5da966d95cc2098ec428713c55ef4.jpg?fit=around|130:130&crop=130:130;*,*",
          },
          {
            name: "Kalakand Barfi",
            description:
              "A classic Indian sweet made with condensed milk and paneer (Indian cottage cheese). ... read moree",
            price: 125,
            votes: 96,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/651/e635377655299ed3d432ed2a8fde5651.jpg?fit=around|130:130&crop=130:130;*,*",
          },
        ],
      },
      {
        name: "Chat",
        description: "Enjoy Chat",
        items: [
          {
            name: "Bhalla Papri",
            description:
              "Experience the refreshing combination of flavors in Bhalla Papri, a classic chaat dish ... read more",
            price: 150,
            votes: 81,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/b24/51ad3e25a6007f2ab7839330fd4d7b24.jpg?fit=around|130:130&crop=130:130;*,*",
          },
          {
            name: "Bhel Puri",
            description: "emjoy",
            price: 125,
            votes: 189,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/448/663f5883385c5082833c7500cd82c448.jpg?fit=around|130:130&crop=130:130;*,*",
          },
          {
            name: "Dahi Bada",
            description:
              "Delight in the soft and spongy Dahi Bada, made with lentil dumplings soaked ... read more",
            price: 150,
            votes: 96,
            imageUrl:
              "https://b.zmtcdn.com/data/dish_photos/d69/e43135d49fe6ce85e3c05b7666735d69.jpg?fit=around|130:130&crop=130:130;*,*",
          },
        ],
      },
    ],
  },
]

const orderPageInfoSlice = createSlice({
  name: "oderPageInfo",
  initialState: initialOrderPageInfo,
  reducers: {
    setOrderPageInfo: (state, action) => {
      return action.payload
    },
  },
})

export const { setOrderPageInfo } = orderPageInfoSlice.actions
export default orderPageInfoSlice.reducer
