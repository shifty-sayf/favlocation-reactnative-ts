interface Place {
  id: string; // new Date().toString() + Math.random().toString();
  title: string;
  imageUri?: string;
  address: string;
  location: Coordinates;
}
// class Place {
//   constructor(title, imageUri, address, location) {
//     this.title = title;
//     this.imageUri = imageUri;
//     this.address = address;
//     this.location = location;
//   }
// }
