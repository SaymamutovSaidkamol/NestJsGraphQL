import { Injectable } from '@nestjs/common';
import { Product } from './entity/product.entity';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Karl', price: 23000 },
    { id: 1, name: 'Karl', price: 23000 },
    { id: 1, name: 'Karl', price: 23000 },
    { id: 1, name: 'Karl', price: 23000 },
    { id: 1, name: 'Karl', price: 23000 },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product | undefined {
    return this.products.find((prod) => prod.id === id);
  }
}
