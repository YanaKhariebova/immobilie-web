export type ValuationPropertyType =
  | 'haus'
  | 'wohnung'
  | 'grundstueck'
  | 'gewerbe'

export interface ValuationFormData {
  propertyType: ValuationPropertyType | ''
  livingArea: string
  plotArea: string
  rooms: string
  yearOfConstruction: string
  street: string
  postalCode: string
  city: string
  firstName: string
  lastName: string
  email: string
  phone: string
  privacyAccepted: boolean
}
