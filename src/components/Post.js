// @flow
import * as React from 'react';

const post = {
  id: 1,
  description: 'Driver-side picture with schedule of deliveries!',
  likes: 20,
  author: null,
  created_at: '2020-12-29T01:59:29.166Z',
  updated_at: '2020-12-29T01:59:30.360Z',
  image: {
    url: '/uploads/IMG_5674_cfa4616c3b.PNG',
  },
};
const API_URL = 'http://localhost:1337';
const formatImageUrl = (url) => `${API_URL}${url}`;

export default ({ description, likes, url }) => {
  return (
    <div className='Post'>
      <img className='Post__Image' src={formatImageUrl(url)} />
      <h4>{description}</h4>
      <div>
        <span>Likes: {likes}</span>
      </div>
    </div>
  );
};
