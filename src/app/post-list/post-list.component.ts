import { Component } from '@angular/core';
import { PostsListService } from '../posts-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts=[];
  constructor(private postsListService: PostsListService){
    this.getPost();
  }

  getPost():void{
    this.postsListService.getPosts().subscribe((data) => {this.posts = data})
  }
}
