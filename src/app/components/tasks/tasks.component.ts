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
  tasks = DUMMY_TASKS;
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasks?.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks?.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskFormData: TaskFormData) {
    const { title, summary, date } = taskFormData;
    console.log("taskFormData", taskFormData);
    this.tasks.push({
      id: new Date().getTime().toString(),
      title,
      summary,
      dueDate: date,
      userId: this.userId,
    });
    this.isAddingTask = false;
  }
}
