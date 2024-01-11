export interface Image {
  id: number;
  pageURL: string;
  type: "photo";
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

export interface APIResponse {
  total: number;
  totalHits: number;
  hits: Array<Image>;
}

export const getImages = async (query: string) => {
  const PIXBAY_API_KEY = process.env.PIXBAY_API_KEY;

  const url = `https://pixabay.com/api/?key=${PIXBAY_API_KEY}&q=${query}&image_type=photo&pretty=true`;

  const response = await fetch(url);
  const result = await response.json();

  if ("hits" in result) return result.hits as Image[];

  throw new Error(`Error occurred: ${result}`);
};
