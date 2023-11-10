import {isEscapeKey} from './util.js';
import {renderDataUserPost} from './loading-modal-data.js';

const bodyScrollElement = document.querySelector('body');
const userPostModalElement = document.querySelector('.big-picture');
const userPostModalCloseElement = document.querySelector('#picture-cancel');
const socialCommentList = userPostModalElement.querySelector('.social__comments');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserPostModal();
  }
};

function openUserPostModal ({urlPhoto, description, likes, comments}) {
  bodyScrollElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  userPostModalCloseElement.addEventListener('click', closeUserPostModal);

  renderDataUserPost(urlPhoto, description, likes, comments);
  userPostModalElement.classList.remove('hidden');
}

function closeUserPostModal () {
  userPostModalElement.classList.add('hidden');
  bodyScrollElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  socialCommentList.innerHTML = ''; // очищаем список комментариев
}


export {openUserPostModal};
