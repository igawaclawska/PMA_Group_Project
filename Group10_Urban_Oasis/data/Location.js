// Location class used for creating location objects.
export class Location {
  constructor(title, description, latitude, longitude) {
    this.title = title;
    this.location = {
      latitude,
      longitude,
    };
    this.description = description;
  }
}
