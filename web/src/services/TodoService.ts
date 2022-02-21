import axios from "axios";
import { reactive } from "vue";
import { Task } from "../models/Task";

class TodoService {
  // RESTAPI URL
  private RESTAPI_URL = "/api/todo/";
  // タスクリスト
  private tasks: Task[] = reactive([]);

  /**
   * タスクを取得する。
   * @returns タスク一覧
   */
  get todoTasks(): Task[] {
    return this.tasks;
  }

  /**
   * 全タスクを取得する。
   */
  public getAllTasks(): void {
    axios.get<Task[]>(this.RESTAPI_URL).then((res) => {
      Array.prototype.push.apply(this.tasks, res.data);
    });
  }

  /**
   * タスクを追加する。
   * @param newTaskTitle 新たなタスク
   */
  public addTask(newTaskTitle: string): void {
    const newTask: Task = {
      title: newTaskTitle,
      done: false,
    };
    axios.post<Task>(this.RESTAPI_URL, newTask).then((res) => {
      this.tasks.push(res.data);
    });
  }

  /**
   * タスクを削除する。
   *  @param id タスクID
   */
  public deleteTask(id?: number): void {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index !== undefined) {
      this.tasks.splice(index, 1);
      axios.delete(this.RESTAPI_URL + id);
    }
  }

  /**
   * タスクをDoneを変更する。
   * @param id タスクID
   */
  public doneTask(id?: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task !== undefined) {
      task.done = !task.done;
      axios.post<Task>(this.RESTAPI_URL, task);
    }
  }
}
export default new TodoService();
