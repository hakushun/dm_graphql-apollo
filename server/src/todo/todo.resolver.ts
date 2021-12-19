import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTodoDto } from './dto/create-todo.dto';
import { DeleteTodoDto } from './dto/delete-todo.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Todo } from './models/todo.models';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query(() => [Todo], { nullable: 'items' })
  findAll() {
    return this.todoService.findAll();
  }

  @Query(() => Todo)
  findOneById(@Args('id', { type: () => ID }) id: string) {
    return this.todoService.findOneById(id);
  }

  @Mutation((returns) => Todo)
  create(@Args('todo') todo: CreateTodoDto): Todo {
    return this.todoService.create(todo);
  }

  @Mutation((returns) => Todo)
  updateStatus(@Args('todo') todo: UpdateStatusDto): Todo {
    return this.todoService.updateStatus(todo);
  }

  @Mutation((returns) => Todo)
  delete(@Args('todoId') todoId: DeleteTodoDto): Todo {
    return this.todoService.delete(todoId);
  }
}
