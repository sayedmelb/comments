import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommentsComponent } from './comments.component';
//import {CommentsComponent} from './../comments/comments.component';
import { CommentsService } from '../../services/comments.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {CommentsModule} from './../../comments.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { from, observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommentInterface } from 'src/comments/types/comment.interface';
import { By } from '@angular/platform-browser';
//import { exitCode } from 'process';

describe('CommentComponent', () => {  
    let spyService= jasmine.createSpyObj('CommentsService', ['updateComment','getComments']);
    let cmpfixture: ComponentFixture<CommentsComponent>;
    let component: CommentsComponent;
  beforeEach(async () => { 
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        CommentsModule
      ],
      declarations: [
        CommentsComponent,
      ],
      providers: [                   
        { provide: CommentsService,useValue: spyService},
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the comments Component', () => {
    const fixture = TestBed.createComponent(CommentsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit('should call ngonint', () => {
    const fixture = TestBed.createComponent(CommentsComponent);
    fixture.detectChanges();
    const drift = fixture.debugElement.componentInstance;
    drift.ngOnInit();
    expect(drift.comments.length>0).toEqual(false);
  });
  
  it('should return root comments',()=>{
    const fixture = TestBed.createComponent(CommentsComponent);
    const val = [
      {
        "id": "1",
        "body": "First comment",
        "username": "Jack",
        "userId": "1",
        "parentId": null,
        "createdAt": "2021-08-16T23:00:33.010+02:00",
        "vote": 0
      },
      {
        "id": "2",
        "body": "Second comment",
        "username": "John",
        "userId": "2",
        "parentId": null,
        "createdAt": "2021-08-16T23:00:33.010+02:00",
        "vote": 0
      },];
  
     spyService.getComments.and.returnValue(of(val));
    fixture.detectChanges();    
    const drift = fixture.debugElement.componentInstance;    
    const comments =drift.getRootComments();
    expect(comments.length==2).toBeTrue();
  });

});
