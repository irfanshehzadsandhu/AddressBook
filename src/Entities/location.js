export default class Location {
  constructor(street, city, state, postcode, country) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.postcode = postcode.toString();
    this.country = country;
  }
  address() {
    return `${this.street.number} ,${this.street.name} ${this.city} ${this.state} ${this.postcode} ${this.country}`;
  }
  static createLocFromObj(obj) {
    return new Location(
      obj.street,
      obj.city,
      obj.state,
      obj.postcode,
      obj.country
    );
  }
}
