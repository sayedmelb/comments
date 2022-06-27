import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommentComponent } from './comment.component';
import {CommentsComponent} from './../comments/comments.component';
import {CommentsModule} from './../../comments.module'
import { By } from '@angular/platform-browser';

describe('CommentComponent', () => {
    let component: CommentComponent;
  beforeEach(async () => {   
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommentsModule
      ],
      declarations: [
        CommentComponent,
        CommentsComponent
      ],
    }).compileComponents();
  });

  it('should create the comment Component', () => {
    const fixture = TestBed.createComponent(CommentComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit('should currentUserId be comment userId', () => {
    const fixture = TestBed.createComponent(CommentComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;    
    component.comment =  {
        "id": "1",
        "body": "First comment",
        "username": "Jack",
        "userId": "1",
        "parentId": null,
        "createdAt": "2021-08-16T23:00:33.010+02:00",
        "vote": 0
      };
    app.ngOnInit();
    expect(app.ngOnInit()).toHaveBeenCalled();
  });  
});
