/* globals jest */

import React from 'react';
import PostShowContainer from '../components/posts/post_show_container';
import { mount } from 'enzyme';
import * as PostActions from '../actions/post_actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const testPost = {
  id: 1,
  title: "Title",
  body: "Body"
};
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({ posts: { [testPost.id]: testPost } });

describe('post show', () => {
  let postShowWrapper;

  beforeEach(() => {
    PostActions.fetchPost = jest.fn(() => dispatch => {});
    const testParams = { postId: testPost.id };

    postShowWrapper = mount(
      <PostShowContainer store={testStore} params={testParams}/>
    ).find('PostShow');
  });

  it('correctly maps state to props', () => {
    expect(postShowWrapper.props().post).toEqual(testPost);
  });

  it('correctly maps dispatch to props', () => {
    expect(postShowWrapper.props().fetchPost).toBeDefined();
  });

  it('contains the post information', () => {
    const renderedText = postShowWrapper.text();

    expect(PostActions.fetchPost).toBeCalledWith(testPost.id);
    expect(renderedText).toContain(testPost.title);
    expect(renderedText).toContain(testPost.body);
  });

  it('has a link to the post index', () => {
    const showLink = postShowWrapper.find('Link');

    expect(showLink).toBeDefined();
    expect(showLink.props().to).toEqual('/');
  });
});
