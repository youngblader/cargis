export interface DetailOrder {
  id: number;
  order_number: any;
  cashless_payment: number;
  count_shipping: number;
  count_shipping_done: number;
  count_offers: number;
  company_id: number;
  company_inn: string;
  consignee_inn: string;
  shipper_inn: string;
  order_state_id: number;
  principal: string;
  cargo_type: string;
  cargo_type_object: CargoTypeObject;
  loading_address: string;
  loading_city: string;
  unloading_address: string;
  unloading_city: string;
  load_dt: string;
  distance_m: number;
  tonnage_kg: number;
  tariff_c: number;
  tariff_nds_c: number;
  tariff: Tariff;
  coords_from: string;
  coords_to: string;
  loading_desc: string;
  downtime_desc: any;
  downtime_cost: number;
  accept_offers: number;
  accept_alt_offers: number;
  deviation_percent: number;
  deviation_type: string;
  scales_length_cm: number;
  scales_capacity_kg: number;
  separate_weighing: number;
  overload: number;
  create_dt: string;
  daily_shipping_rate_kg: number;
  transport_type: string;
  consignee: string;
  consignee_contact: string;
  consignee_contact_phone: string;
  shipper: string;
  shipper_contact: string;
  shipper_contact_phone: string;
  tonnage_balance_kg: number;
  cargo_cost_c: number;
  visible: string;
  cargo_name: any;
  cargo_condition: any;
  packing_way: any;
  type_of_container: any;
  number_of_places: any;
  shipper_company_shortname: string;
  kontur_status: number;
  managers: Manager[];
  offersList: OffersList[];
  coords_intermediate: any;
  additional_info: string;
  ending_dt: string;
  verification: number;
  views_count: number;
  total_count_offers: number;
  lat_lng_from: LatLngFrom;
  lat_lng_to: LatLngTo;
  _links: Links4;
  status_1c: string;
}

export interface CargoTypeObject {
  id: number;
  title: string;
  order_type_id: number;
  nomenclature_code: any;
}

export interface Tariff {
  cost_c: number;
  description: string;
}

export interface Manager {
  id: number;
  phone_number: string;
  name: string;
  email: string;
  main: string;
}

export interface OffersList {
  id: number;
  company_id: number;
  company: Company;
  user: User;
  offer_tariff_c: number;
  offer_state_id: number;
  reject_reason: any;
  short_name: string;
  kontur_status: number;
  verification: number;
  order: Order;
  create_dt: string;
  contact_fio: any;
  contact_phone_number: any;
  contact_email: any;
  trips: Trip[];
  documents: Documents;
  sign_document_state: number;
  template: Template;
  _links: Links3;
}

export interface Company {
  id: number;
  registrator_id: number;
  role: string;
  logo_id: any;
  document_id: any;
  tax_system_id: number;
  type: string;
  full_name: string;
  short_name: string;
  inn: string;
  kpp: string;
  juridical_address: string;
  office_address: string;
  office_city: string;
  ogrn: string;
  leader_fio: any;
  doc_foundation_name: any;
  doc_foundation_number: any;
  okved_main: string;
  verification: number;
  balance: number;
  orders_count: number;
  active_trips: number;
  free_cars: number;
  active_orders: number;
  ecp_reg_id: any;
  docs_loaded: number;
  kontur_red: number;
  kontur_green: number;
  kontur_yellow: number;
  admin_manager_id: any;
  admin_state: string;
  admin_manager_action_dt: any;
  created: number;
  approved: number;
  rejected: number;
  ekspeditor_1c: any;
  ekspeditor_id: any;
  activation_dt: any;
  verification_dt: any;
  admin_state_done_dt: any;
  registration_dt: any;
  cert_serial_number: any;
  reg_completed: number;
  self_reg: number;
  id_1c: any;
  express_delivery: number;
  as_driver: number;
  same_address: number;
  has_mobile_key: number;
  document_flow: number;
  leader_lastname: any;
  leader_firstname: any;
  leader_patronymic: any;
  company_phone: any;
  company_email: any;
  doc_foundation_date: any;
  leader_post: any;
  leader_phone: any;
  leader_email: any;
}

export interface User {
  id: number;
  current_company_id: number;
  phone_number: string;
  code_hash: string;
  password_hash: string;
  email: string;
  token: string;
  token_expire: string;
  reg_dt: string;
  reg_stage: number;
  is_active: number;
  agreement: number;
  type: string;
  driver_is_free: any;
  role_on_reg: string;
  companies_count: number;
  nots_new_order: number;
  nots_order_change_price: number;
  nots_doc_sign: number;
  nots_news: number;
  nots_articles: number;
  nots_service: number;
  geodata: number;
  send_geodata: number;
  last_activity_dt: string;
  user_agent: string;
  reg_completed: number;
  full_access: number;
  nots_offers: number;
  nots_shipping: number;
  last_reg_stage: number;
  show_template_tip: number;
  client_id_1c: any;
  driver_verification: number;
  chat_hash_ios: string;
  chat_hash_android: string;
  chat_hash_web: string;
  ekspeditor_1c_id: any;
  show_order_tip: number;
  show_offer_tip: number;
  has_mobile_key: number;
  updated_by: number;
  updated_at: string;
}

export interface Order {
  id: number;
  user_id: number;
  company_id: number;
  order_state_id: number;
  cargo_type: string;
  consignee: string;
  loading_address: string;
  loading_city: string;
  unloading_address: string;
  unloading_city: string;
  distance_m: number;
  tonnage_kg: number;
  tariff_c: number;
  tariff_nds_c: number;
  loading_desc: string;
  downtime_desc: any;
  accept_offers: number;
  accept_alt_offers: number;
  visible: string;
  scales_length_cm: number;
  scales_capacity_kg: number;
  separate_weighing: number;
  overload: number;
  create_dt: string;
  deviation_percent: number;
  redirected_order: number;
  daily_shipping_rate_kg: number;
  transport_type: string;
  load_dt: string;
  coords_from: string;
  coords_to: string;
  consignee_contact: string;
  consignee_contact_phone: string;
  shipper: string;
  shipper_contact: string;
  shipper_contact_phone: string;
  downtime_cost: number;
  tonnage_balance_kg: number;
  cargo_cost_c: number;
  principal: string;
  consignee_inn: string;
  order_id_1c: any;
  deviation_type: string;
  coords_intermediate: any;
  additional_info: string;
  ending_dt: string;
  views_count: number;
  order_type_id: number;
  cargo_type_id: number;
  td_rif_document_number: any;
  declaration_number: any;
  cashless_payment: number;
  status_1c_id: number;
  order_number: any;
  cargo_name: any;
  cargo_condition: any;
  packing_way: any;
  type_of_container: any;
  number_of_places: any;
  user_phone: string;
  company_role: string;
  shipper_inn: string;
}

export interface Trip {
  id: number;
  trips_number: any;
  shipping_id: any;
  order_id: number;
  ttn_load_scan_id: any;
  ttn_unload_scan_id: any;
  ttn_unload_back_scan_id: any;
  trip_state: string;
  driver_name: string;
  driver_phone_number: string;
  driver_avatar_preview: string;
  trailer_model: any;
  trailer_number: string;
  truck_model: any;
  truck_number: string;
  truck_id: any;
  trailer_id: any;
  driver_id: number;
  trip_tonnage_kg: any;
  load_dt: string;
  net_weight_load_kg: number;
  unload_dt: string;
  net_weight_unload_kg: number;
  brutto_weight_unload_kg: any;
  brutto_weight_load_kg: any;
  ttn_number: string;
  reject_reason: any;
  downtime: number;
  act: any[];
  downtime_act: any;
  geodata: Geodata;
  ekspeditor: any;
  history: any;
  plan_load_dt: string;
  truck_type_of_ownership: string;
  trailer_type_of_ownership: string;
  official_work: string;
  truck_verification: number;
  trailer_verification: number;
  driver_verification: number;
  checked_load: number;
  checked_unload: number;
  tdrif_ean: any;
  tdrif_registration: number;
  payment_part: any;
  _links: Links;
  truck_img_preview: string;
  trailer_img_preview: string;
  ttn_load_scan_preview: any;
  ttn_unload_scan_preview: any;
  ttn_unload_back_scan_preview: any;
  ttn_load_scan: any;
  ttn_unload_scan: any;
  ttn_unload_back_scan: any;
  truck: Truck;
  trailer: Trailer;
  advance_payment: any;
  ttn_passed: number;
  kontur_transportation_id: any;
}

export interface Geodata {
  setting: any;
  points: any[];
}

export interface Links {
  self: Self;
  edit: Edit;
}

export interface Self {
  href: string;
}

export interface Edit {
  href: string;
  method: string;
}

export interface Truck {
  id: number;
  model: string;
  brand: string;
  type: string;
  transport_type: TransportType;
  number: string;
  description: any;
  sts_front_scan: any;
  sts_back_scan: any;
  pts_front_scan: any;
  pts_back_scan: any;
  img: string;
  rent_doc: any;
  owner: boolean;
  type_of_ownership: any;
  serial_srts: any;
  number_srts: any;
  capacity: any;
  capacity_kg: any;
  verification: number;
  is_active: number;
  vincode: string[];
  documents: any[];
}

export interface TransportType {
  id: any;
  title: string;
}

export interface Trailer {
  id: number;
  model: any;
  brand: any;
  type: string;
  transport_type: TransportType2;
  number: string;
  description: any;
  sts_front_scan: any;
  sts_back_scan: any;
  pts_front_scan: any;
  pts_back_scan: any;
  img: string;
  rent_doc: any;
  owner: boolean;
  type_of_ownership: any;
  serial_srts: any;
  number_srts: any;
  capacity: any;
  capacity_kg: any;
  verification: number;
  is_active: number;
  vincode: string[];
  documents: any[];
}

export interface TransportType2 {
  id: any;
  title: string;
}

export interface Documents {
  dop: any;
  partnership: Partnership;
}

export interface Partnership {
  id: number;
  contract_state_id: number;
  create_dt: string;
  contract_state: ContractState;
  contract_number: any;
  comment: any;
  shipper_signature: number;
  carrier_signature: number;
  shipper_signed_dt: any;
  contract_dt: any;
  carrier_signed_dt: any;
  shipper_signer: any;
  carrier_signer: any;
  preview: string;
  file_id_1c: any;
  formation: string;
  contractType: ContractType;
  tariff_c: any;
  _links: Links2;
}

export interface ContractState {
  id: number;
  title: string;
}

export interface ContractType {
  id: number;
  title: string;
  tip: string;
}

export interface Links2 {
  contract: Contract;
  preview: Preview;
  sign: Sign;
  check_signature: CheckSignature;
}

export interface Contract {
  href: string;
}

export interface Preview {
  href: string;
}

export interface Sign {
  href: string;
  method: string;
}

export interface CheckSignature {
  href: string;
  method: string;
}

export interface Template {
  auto_numbering: number;
}

export interface Links3 {
  company: Company2;
  cancel: Cancel;
}

export interface Company2 {
  href: string;
}

export interface Cancel {
  href: string;
  method: string;
}

export interface LatLngFrom {
  latitude: number;
  longitude: number;
}

export interface LatLngTo {
  latitude: number;
  longitude: number;
}

export interface Links4 {
  self: Self2;
  company: Company3;
}

export interface Self2 {
  href: string;
}

export interface Company3 {
  href: string;
}
