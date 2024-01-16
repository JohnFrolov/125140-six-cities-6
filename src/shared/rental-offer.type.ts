import { City, User, AccommodationType, Amenities } from './index.js';


export type RentalOffer = {
  name: string;
  description: string;
  publicationDate: Date;
  city: City;
  previewImage: string;
  propertyImages: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  propertyType: AccommodationType;
  numberOfRooms: number;
  guestsCapacity: number;
  rentalCost: number;
  amenities: Amenities[];
  author: User;
  commentsCount: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
