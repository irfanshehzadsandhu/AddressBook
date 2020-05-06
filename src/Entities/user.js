import Location from "./location.js";
export default class User {
  constructor(
    id,
    userName,
    thumbnail,
    image,
    firstName,
    lastName,
    email,
    location,
    phone,
    cell
  ) {
    this.id = id;
    this.userName = userName;
    this.image = image;
    this.thumbnail = thumbnail;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.location = location;
    this.phone = phone;
    this.cell = cell;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  static createFromObj(obj) {
    return new User(
      obj["login"]["uuid"],
      obj["login"]["username"],
      obj["picture"]["thumbnail"],
      obj["picture"]["large"],
      obj["name"]["first"],
      obj["name"]["last"],
      obj["email"],
      Location.createLocFromObj(obj["location"]),
      obj["phone"],
      obj["cell"]
    );
  }
}
