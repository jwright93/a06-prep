import * as PostApiUtil from '../util/post_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const removePost = (post) => ({
  type: REMOVE_POST,
  post
});


export const fetchPosts = (posts) => dispatch => (
  PostApiUtil.fetchPosts(posts)
    .then(posts1 => dispatch(receiveAllPosts(posts1)))
);

export const fetchPost = (post) => dispatch => (
  PostApiUtil.fetchPost(post)
    .then(post1 => dispatch(receivePost(post1)))
);

export const createPost = (post) => dispatch => (
  PostApiUtil.createPost(post)
    .then(post1 => dispatch(receivePost(post1)))
);

export const updatePost = (post) => dispatch => (
  PostApiUtil.updatePost(post)
    .then(post1 => dispatch(receivePost(post1)))
      .then(hashHistory.push('/'))
);

export const deletePost = (post) => dispatch => (
  PostApiUtil.deletePost(post)
    .then(post1 => dispatch(removePost(post1)))
);
