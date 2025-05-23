import {OfferType} from './offer-type.enum.js';
import {User} from './user.type.js';
import {City } from './city.type.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  previewUrl: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: OfferType
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: User;
}
