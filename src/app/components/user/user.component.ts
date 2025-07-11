import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from "@angular/core";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  @Input({
    required: true,
  })
  avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => `assets/users/${this.avatar()}`);

  // @Input({
  //   required: true,
  // })
  // avatar!: string;
  // @Input({ required: true }) name!: string;
  // get imagePath() {
  //   return `assets/users/${this.avatar}`;
  // }
  // onSelectUser() {}
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex])
  // imagePath = computed(()=>`assets/users/${this.selectedUser().avatar}`)
  // get imagePath(){
  // return `assets/users/${this.selectedUser.avatar}`
  // }
  // onSelectUser(){
  // console.log("clicked");
  // const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)
  // // this.selectedUser = DUMMY_USERS[randomIndex];
  // this.selectedUser.set(DUMMY_USERS[randomIndex])
  // }
}
