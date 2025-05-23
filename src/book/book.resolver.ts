import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book, { name: 'create' })
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.bookService.create(createBookInput);
  }

  @Query(() => [Book], { name: 'book' })
  findAll() {
    return this.bookService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.findOne(id);
  }

  @Mutation(() => Book, { name: 'update' })
  updateBook(@Args('id', { type: () => Int }) id: number, @Args('updateBookInput') data: UpdateBookInput) {
    return this.bookService.update(id, data);
  }

  @Mutation(() => Book, { name: 'remove' })
  removeBook(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.remove(id);
  }
}

// query {
//     book {
//       id
//       name
//       price
//     }
//   }

//   query {
//     book(id: 1) {
//       id
//       name
//       price
//     }
//   }

//   mutation {
//     update(id: 1, updateBookInput: {id: 1, name: "Yangi Kitob", price: 250}) {
//       id
//       name
//       price
//     }
//   }

//   mutation {
//     create(createBookInput: {id: 1, name: "Salom", price: 233}) {
//       id
//       name
//       price
//     }
//   }

//   mutation {
//     remove(id: 1) {
//       id
//       name
//       price
//     }
//   }