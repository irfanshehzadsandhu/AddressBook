export default class Location {
  constructor(street, city, state, postcode) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.postcode = postcode.toString();
  }

  static createLocFromObj(obj) {
    return new Location(obj.street, obj.city, obj.state, obj.postcode);
  }
}
