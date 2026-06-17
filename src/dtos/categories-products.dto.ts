export interface ImageProductDTO {
  id: string
  url: string
}

export interface ProductDTO {
  id: string
  name: string
  indications: string | null
  images: ImageProductDTO[]
}

export interface CategoryDTO {
  id: string
  name: string
  description: string | null
  products: ProductDTO[]
}
