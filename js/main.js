import {generatedPosts} from './data.js';
import {renderThumbnails} from './thumbnails.js';

const pictures = generatedPosts();
renderThumbnails(pictures);

// eslint-disable-next-line no-console
console.table(pictures);
