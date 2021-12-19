import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo, TodoStatus } from './models/todo.models';
import { v4 as uuidv4 } from 'uuid';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { DeleteTodoDto } from './dto/delete-todo.dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  findOneById(id: string): Todo {
    const result = this.todos.find((todo) => id === todo.id);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  create(createTodoDto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      ...createTodoDto,
      id: uuidv4(),
      status: TodoStatus.NEW,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  updateStatus(updateStatusDto: UpdateStatusDto): Todo {
    const targetTodo = this.todos.find(
      (todo) => todo.id === updateStatusDto.id,
    );
    if (!targetTodo) {
      throw new NotFoundException();
    }
    const newTodo = {
      ...targetTodo,
      status: updateStatusDto.status,
      updatedAt: new Date(),
    };
    this.todos = this.todos.map((todo) =>
      todo.id === newTodo.id ? newTodo : todo,
    );
    return newTodo;
  }

  delete({ id }: DeleteTodoDto): Todo {
    const targetTodo = this.todos.find((todo) => todo.id === id);
    if (!targetTodo) {
      throw new NotFoundException();
    }
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return targetTodo;
  }
}
