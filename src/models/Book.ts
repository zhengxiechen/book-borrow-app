export default interface Book {
  title: string;
  author: string;
  edition: string;
  identifiers: [
    {
      thumbnail: string;
    }
  ];
}
