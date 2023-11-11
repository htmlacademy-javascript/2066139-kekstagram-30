import {createElement} from './util.js';

const START_NUMBER_SHOW_COMMENTS = 5;
const userPostModalElement = document.querySelector('.big-picture');
const socialCommentList = userPostModalElement.querySelector('.social__comments');

const fullSizePhoto = userPostModalElement.querySelector('.big-picture__img img');
const socialCaption = userPostModalElement.querySelector('.social__caption');
const likesCount = userPostModalElement.querySelector('.likes-count');

const commentShownCount = userPostModalElement.querySelector('.social__comment-shown-count');
const commentTotalCount = userPostModalElement.querySelector('.social__comment-total-count');

const getListСomments = (comments) => {
  const commentListFragment = document.createDocumentFragment();

  comments.forEach((comment, index) => {
    const socialCommentItem = createElement('li', 'social__comment');
    const commentatorAvatar = createElement('img', 'social__picture');
    commentatorAvatar.src = comment.avatar;
    commentatorAvatar.alt = comment.name;
    commentatorAvatar.width = 35;
    commentatorAvatar.height = 35;
    const commentatorMessage = createElement('p', 'social__text', comment.message);

    if (index >= START_NUMBER_SHOW_COMMENTS) {
      socialCommentItem.classList.add('hidden');
    }

    socialCommentItem.append(commentatorAvatar, commentatorMessage);
    commentListFragment.append(socialCommentItem);
  });

  return socialCommentList.append(commentListFragment);
};

const updateShownCommentCount = () => {
  commentShownCount.textContent = socialCommentList.querySelectorAll('.social__comment:not(.hidden)').length;
};

const renderDataUserPost = ({urlPhoto, description, likes, comments}) => {
  fullSizePhoto.src = urlPhoto;
  fullSizePhoto.alt = description;

  socialCaption.textContent = description;
  likesCount.textContent = likes;

  if (comments.length > 0) {
    getListСomments(comments);
  }

  commentTotalCount.textContent = comments.length;
  updateShownCommentCount();
};

export {renderDataUserPost, updateShownCommentCount};
