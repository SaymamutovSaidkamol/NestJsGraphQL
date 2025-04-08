import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class IdBook {
  @Field(() => Int)
  id: number;
}
