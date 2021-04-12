import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  list = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      item: new FormControl()
    });
  }

  addItem() {
    const item = {
      value: this.form.get('item').value,
      completed: false
    };
    this.list.push(item);
  }

  deleteItem(position) {
    this.list.splice(position, 1);
  }

  completeTask(position) {
    this.list[position].completed = true;
  }
}
