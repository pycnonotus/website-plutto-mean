import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { NewsService } from './../../../news/news.service';

@Component({
  selector: 'app-admin-news-create',
  templateUrl: './admin-news-create.component.html',
  styleUrls: ['./admin-news-create.component.css'],
})
export class AdminNewsCreateComponent implements OnInit {
  constructor(private news: NewsService) {}
  editorStyle = {
    height: '800px',
  };
  toolbarOptions = [
    [
      {
        direction: 'rtl',
      },
    ], // text direction
  ];
  editorContent = '';
  foods = [
    { value: '1', viewValue: 'Steak' },
    { value: '2', viewValue: 'Pizza' },
    { value: '3', viewValue: 'Tacos' },
  ];
  cars = [
    { value: 'ford', viewValue: 'Ford' },
    { value: 'chevrolet', viewValue: 'Chevrolet' },
    { value: 'dodge', viewValue: 'Dodge' },
  ];
  selectedFood = this.foods[2].value;
  selectedCar = this.cars[0].value;
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, {}),
      category: new FormControl(null, {}),
    });
  }
  onEditorChanged(event: EditorChangeContent | EditorChangeSelection): void {
    this.editorContent = event.editor.root.innerHTML;
  }
  onSave(): void {
    const newsPost = {
      title: this.form.value.title,
      content: this.editorContent,
      category: this.form.value.category,
    };
    console.log('====================================');
    console.log(newsPost);
    console.log('====================================');
    this.news.addNews(newsPost.title, 2, newsPost.content);
  }
}
