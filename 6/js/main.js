import {generatedPosts} from './data.js';
import {renderThumbnails, onThumbnailClick} from './thumbnails.js';

const pictures = generatedPosts();
renderThumbnails(pictures);
onThumbnailClick(pictures);

// eslint-disable-next-line no-console
console.table(pictures);
