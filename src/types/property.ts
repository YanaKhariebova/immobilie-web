export type TransactionType = 'kauf' | 'miete'

export type PropertyType =
  | 'wohnung'
  | 'haus'
  | 'gewerbe'
  | 'grundstueck'

export type PropertyStatus =
  | 'verfuegbar'
  | 'reserviert'
  | 'verkauft'
  | 'vermietet'

export interface Address {
  street: string
  postalCode: string
  city: string
  state: string
}

export interface EnergyCertificate {
  type: 'bedarfsausweis' | 'verbrauchsausweis'
  energyValue: number
  energySource: string
  yearOfConstruction: number
}

export interface Property {
  id: string
  title: string
  description: string
  transactionType: TransactionType
  propertyType: PropertyType
  status: PropertyStatus
  price: number
  rooms: number
  livingArea: number
  plotArea?: number
  address: Address
  images: string[]
  features: string[]
  energyCertificate: EnergyCertificate
  agentId: string
  featured: boolean
}

export interface FilterOptions {
  transactionType: TransactionType | 'alle'
  propertyType: PropertyType | 'alle'
  city: string
  minPrice?: number
  maxPrice?: number
  minRooms?: number
  minLivingArea?: number
}

export type PropertyFilterSearch = Pick<
  FilterOptions,
  | 'transactionType'
  | 'propertyType'
  | 'city'
  | 'maxPrice'
  | 'minRooms'
  | 'minLivingArea'
>

export interface Agent {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  image: string
  position: string
}

export interface InquiryForm {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
  propertyId?: string
  privacyAccepted: boolean
}
