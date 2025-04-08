import { CreateBookInput } from './create-book.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name?: string;

  @Field(() => Int)
  price?: number;
}
