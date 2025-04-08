import { Args, Resolver, Query } from '@nestjs/graphql';
import { Product } from './entity/product.entity';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product], { name: 'product' })
  getAllProds() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  getSingle(@Args('idsi') id: number) {
    return this.productService.findOne(id);
  }
}
