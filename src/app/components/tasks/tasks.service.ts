import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../../dummy-data/dummy-tasks";
import { TaskFormData } from "./new-task/new-task.model";

@Injectable({ providedIn: "root" })
export class TasksService {
  private tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  getUserTasks(userId: string) {
    return this.tasks?.filter((task) => task.userId === userId);
  }

  addTask(taskFormData: TaskFormData, userId: string) {
    const { title, summary, date } = taskFormData;
    console.log("taskFormData", taskFormData);
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title,
      summary,
      dueDate: date,
      userId,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks?.filter((task) => task.id !== taskId);
    this.saveTasks();
  }
}
