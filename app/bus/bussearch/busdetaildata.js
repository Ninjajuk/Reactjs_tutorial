 import { FaWifi, FaToilet, FaPlug, FaChair, FaCookieBite, FaUtensils } from 'react-icons/fa';

const busDetails = [
  {
    startingFrom: "New York",
    startTime: "08:00 AM",
    busType: "Sleeper",
    amenities: [
      { name: "WiFi", icon: <FaWifi /> },
      { name: "Restroom", icon: <FaToilet /> },
      { name: "Charging Points", icon: <FaPlug /> }
    ],
    dropPoint: "Washington D.C.",
    endTime: "12:00 PM",
    busNumber: "NYDC101",
    seatsAvailable: 10,
    startingDate: "2024-06-15",
    reachDate: "2024-06-15",
    price: 50,
    cuttedPrice: 60,
    discountPrice: 45,
    contactNumber: "123-456-7890",
    operator: "Greyhound",
    rating: 4.5
  },
  {
    startingFrom: "Los Angeles",
    startTime: "09:00 AM",
    busType: "Semi-Sleeper",
    amenities: [
      { name: "WiFi", icon: <FaWifi /> },
      { name: "Reclining Seats", icon: <FaChair /> }
    ],
    dropPoint: "San Francisco",
    endTime: "01:00 PM",
    busNumber: "LASF102",
    seatsAvailable: 5,
    startingDate: "2024-06-15",
    reachDate: "2024-06-15",
    price: 60,
    cuttedPrice: 70,
    discountPrice: 55,
    contactNumber: "987-654-3210",
    operator: "Megabus",
    rating: 4.0
  },
  {
    startingFrom: "Chicago",
    startTime: "07:30 AM",
    busType: "Luxury",
    amenities: [
      { name: "WiFi", icon: <FaWifi /> },
      { name: "Restroom", icon: <FaToilet /> },
      { name: "Charging Points", icon: <FaPlug /> },
      { name: "Snacks", icon: <FaCookieBite /> }
    ],
    dropPoint: "Detroit",
    endTime: "11:30 AM",
    busNumber: "CHDET103",
    seatsAvailable: 15,
    startingDate: "2024-06-15",
    reachDate: "2024-06-15",
    price: 45,
    cuttedPrice: 55,
    discountPrice: 40,
    contactNumber: "321-654-9870",
    operator: "Greyhound",
    rating: 4.7
  },
  {
    startingFrom: "Houston",
    startTime: "10:00 AM",
    busType: "Standard",
    amenities: [
      { name: "Restroom", icon: <FaToilet /> }
    ],
    dropPoint: "Dallas",
    endTime: "02:00 PM",
    busNumber: "HODAL104",
    seatsAvailable: 20,
    startingDate: "2024-06-15",
    reachDate: "2024-06-15",
    price: 35,
    cuttedPrice: 40,
    discountPrice: 30,
    contactNumber: "654-321-0987",
    operator: "Megabus",
    rating: 3.8
  },
  {
    startingFrom: "Miami",
    startTime: "06:00 AM",
    busType: "Sleeper",
    amenities: [
      { name: "WiFi", icon: <FaWifi /> },
      { name: "Restroom", icon: <FaToilet /> },
      { name: "Charging Points", icon: <FaPlug /> }
    ],
    dropPoint: "Orlando",
    endTime: "10:00 AM",
    busNumber: "MIORL105",
    seatsAvailable: 8,
    startingDate: "2024-06-15",
    reachDate: "2024-06-15",
    price: 40,
    cuttedPrice: 50,
    discountPrice: 35,
    contactNumber: "789-012-3456",
    operator: "Greyhound",
    rating: 4.2
  },
  {
    startingFrom: "Boston",
    startTime: "05:00 PM",
    busType: "Luxury",
    amenities: [
      { name: "WiFi", icon: <FaWifi /> },
      { name: "Restroom", icon: <FaToilet /> },
      { name: "Charging Points", icon: <FaPlug /> },
      { name: "Meals", icon: <FaUtensils /> }
    ],
    dropPoint: "New York",
    endTime: "09:00 PM",
    busNumber: "BONY106",
    seatsAvailable: 12,
    startingDate: "2024-06-15",
    reachDate: "2024-06-15",
    price: 55,
    cuttedPrice: 65,
    discountPrice: 50,
    contactNumber: "012-345-6789",
    operator: "Megabus",
    rating: 4.6
  },
  {
    startingFrom: "Seattle",
    startTime: "07:00 AM",
    busType: "Standard",
    amenities: [
      { name: "Restroom", icon: <FaToilet /> },
      { name: "Charging Points", icon: <FaPlug /> }
    ],
    dropPoint: "Portland",
    endTime: "11:00 AM",
    busNumber: "SEAPOR107",
    seatsAvailable: 18,
    startingDate: "2024-06-15",
    reachDate: "2024-06-15",
    price: 30,
    cuttedPrice: 35,
    discountPrice: 25,
    contactNumber: "098-765-4321",
    operator: "Greyhound",
    rating: 4.1
  }
];

export default busDetails;
