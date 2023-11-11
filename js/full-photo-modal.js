import {isEscapeKey} from './util.js';
import {renderDataUserPost, updateShownCommentCount} from './loading-modal-data.js';

const NUMBER_LOAD_COMMENTS = 5;
const bodyScrollElement = document.querySelector('body');
const userPostModalElement = bodyScrollElement.querySelector('.big-picture');
const userPostModalCloseElement = bodyScrollElement.querySelector('#picture-cancel');
const socialCommentList = userPostModalElement.querySelector('.social__comments');
const commentsLoader = userPostModalElement.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserPostModal();
  }
};

const onCommentsLoad = () => {
  const userComments = socialCommentList.querySelectorAll('.social__comment.hidden');

  if (userComments.length > NUMBER_LOAD_COMMENTS) {
    for (let i = 0; i < NUMBER_LOAD_COMMENTS; i++) {
      userComments[i].classList.remove('hidden');
    }
  } else {
    userComments.forEach((comment) => comment.classList.remove('hidden'));
    commentsLoader.classList.add('hidden');
  }

  updateShownCommentCount();
};

function openUserPostModal (pictureItem) {
  bodyScrollElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  userPostModalCloseElement.addEventListener('click', closeUserPostModal);

  socialCommentList.innerHTML = '';
  renderDataUserPost(pictureItem);

  if (socialCommentList.children.length <= NUMBER_LOAD_COMMENTS) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', onCommentsLoad);
  }

  userPostModalElement.classList.remove('hidden');
}

function closeUserPostModal () {
  userPostModalElement.classList.add('hidden');
  bodyScrollElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.removeEventListener('click', onCommentsLoad);
  socialCommentList.innerHTML = ''; // очищаем список комментариев
}

export {openUserPostModal};
