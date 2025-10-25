export interface ProductReviewUi {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductUi {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
  thumbnail: string;
  tags: string[];
  reviews: ProductReviewUi[];
}
