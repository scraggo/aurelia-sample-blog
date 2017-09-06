import 'fetch';
import {HttpClient, json} from 'aurelia-fetch-client';

let httpClient = new HttpClient();

export class BlogPost {

  blogPost = {};
  newPost = null;
  editPostSuccess = null;
  myPostData = {
    // id: 101
  }

  getData() {
    /**
     * Retrieves a blog post from fake json server
    */

    //default form values if nothing entered
    this.blogPost.id = pn.value || 1;
    this.blogPost.userId = un.value || 1;
    // console.log(this.blogPost);

    //fetch post number
    httpClient.fetch(`http://jsonplaceholder.typicode.com/posts/${this.blogPost.id}`)
      .then(function(response) {
        if (response.status !== 200) {
          alert('Post not found.');
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('data: ', data);
        this.blogPost = data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  postData() {
    /**
     * Posts a new fake blog post.
    */

    //default form values if nothing entered
    this.myPostData.userId = userID.value || '1';
    this.myPostData.title = postTitle.value || 'title';
    this.myPostData.body = postBody.value || 'body';

    //random post id
    this.myPostData.id = Math.ceil(Math.random() * 10) + 100;
    // console.log(this.myPostData);
    httpClient.fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: json(this.myPostData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.newPost = true;
        //INSERT A CATCH ERROR BLOCK
      });
  }

  // myUpdateData = {
  //   id: 1
  // }

  updateData() {
    httpClient.fetch(`http://jsonplaceholder.typicode.com/posts/${this.blogPost.id}`, {
      method: 'PUT',
      body: json(this.blogPost)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.editPostSuccess = true;
      });
  }

  deleteData() {
    httpClient.fetch('http://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

}
