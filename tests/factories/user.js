import faker from "faker";
import User from "../../src/Entities/user.js";
export default class UserFactory {
  static createUser() {
    return User.createFromObj({
      login: { id: faker.random.uuid(), username: faker.internet.userName() },
      picture: { thumbnail: faker.image.avatar(), large: faker.image.avatar() },
      name: { first: faker.name.firstName(), last: faker.name.lastName() },
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      cell: faker.phone.phoneNumber(),
      location: {
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        postcode: faker.address.zipCode(),
        country: faker.address.country(),
      },
    });
  }
}
