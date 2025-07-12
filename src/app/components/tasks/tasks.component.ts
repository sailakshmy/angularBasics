import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from "../../dummy-data/dummy-tasks";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskFormData } from "./new-task/new-task.model";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  isAddingTask = false;

  get selectedUserTasks() {
    return;
  }

  onCompleteTask(taskId: string) {}

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskFormData: TaskFormData) {
    this.isAddingTask = false;
  }
}
