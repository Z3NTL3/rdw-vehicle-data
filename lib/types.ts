export interface RegisteredVehicleT {
  license_plate: string;
  vehicle_type: string;
  brand: string;
  commercial_name: string;
  apk_expiry_date: string;
  registration_date: string;
  gross_bpm: string;
  vehicle_configuration: string;
  number_of_seats: string;
  primary_color: string;
  secondary_color: string;
  number_of_cylinders: string;
  engine_displacement: string;
  unladen_mass: string;
  maximum_authorized_mass: string;
  mass_ready_to_drive: string;
  maximum_braked_towing_mass: string;
  date_of_first_registration: string;
  date_of_first_registration_in_netherlands: string;
  awaiting_inspection: string;
  insured_under_wam: string;
  number_of_doors: string;
  number_of_wheels: string;
  european_vehicle_category: string;
  chassis_number_location: string;
  technical_maximum_mass: string;
  type: string;
  type_approval_number: string;
  variant: string;
  version: string;
  eu_type_approval_amendment_sequence_number: string;
  power_to_mass_ready_to_drive: string;
  wheelbase: string;
  export_indicator: string;
  outstanding_recall_indicator: string;
  taxi_indicator: string;
  maximum_combination_mass: string;
  number_of_wheelchair_places: string;
  year_of_last_odometer_registration: string;
  odometer_reading_assessment: string;
  odometer_reading_assessment_code: string;
  registration_possible: string;

  // ISO datetime variants
  apk_expiry_date_dt: string;
  registration_date_dt: string;
  date_of_first_registration_dt: string;
  date_of_first_registration_in_netherlands_dt: string;
}


export type RegisteredVehicleList = Array<{[key: string]: string}>
