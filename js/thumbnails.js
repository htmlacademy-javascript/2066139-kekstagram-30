import {generatedPosts} from './data.js';

const thumbnailList = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const thumbnails = generatedPosts();
const thumbnailListFragment = document.createDocumentFragment();

thumbnails.forEach(({urlPhoto, description, likes, comments}) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);

  thumbnailElement.querySelector('.picture__img').src = urlPhoto;
  thumbnailElement.querySelector('.picture__img').alt = description;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
  thumbnailListFragment.append(thumbnailElement);
});

thumbnailList.append(thumbnailListFragment);

// eslint-disable-next-line no-console
console.table(thumbnails);
