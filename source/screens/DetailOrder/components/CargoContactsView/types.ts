export interface CargoContactsProps {
  title: string;
  contact: CargoContact;
}

export interface CargoContact {
  companyName?: string;
  innCompany?: string;
  spokesperson: {
    name?: string;
    phone?: string;
  };
}
