/* eslint-disable no-unused-vars */
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Робин',
  'Питер',
  'Мэри',
];
const DESCRIPTION = [
  'Давайте наберем 100 лайков под этим фото!',
  'Бесконечное переплетение линий, создающее ощущение движения в статике.',
  'Пространство, заполненное плавными формами и переходами цветов, ведущее к гармонии и балансу.',
  'Симфония контрастов и оттенков, воплощенная в абстрактной композиции, которая захватывает дух.',
  'Гармоничное сочетание геометрических фигур и текстур, создающее визуальную интригу.',
  'Вихрь эмоций и настроений, запечатленный в абстрактном полотне, которое вызывает множество интерпретаций.',
  'Абстрактный образ, отражающий глубинные переживания и размышления автора, приглашающий к созерцанию и медитации.',
];
const MESSAGES_COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const GENERATED_POST_COUNT = 25;
const COMMENTS_IN_POST_MAX_COUNT = 30;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createRandomIdFromRange = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      // eslint-disable-next-line no-console
      console.error(`Перебраны все числа из диапазона от ${min} до ${max}`);
      return null;
    }

    while(previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    previousValues.push(currentValue);

    return currentValue;
  };
};

const generateCommentId = createRandomIdFromRange(1, GENERATED_POST_COUNT * COMMENTS_IN_POST_MAX_COUNT);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const generateUserId = createRandomIdFromRange(1, 25);
const generatePhotoId = createRandomIdFromRange(1, 25);

const createCommentsArray = () => ({
  commentsId: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES_COMMENT[Math.round(Math.random() * (MESSAGES_COMMENT.length - 1))],
  name: getRandomArrayElement(NAMES),
});

const createUserPhoto = () => ({
  userId: generateUserId(),
  urlPhoto: `photos/${generatePhotoId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createCommentsArray),
});

const generatedPosts = Array.from({length: GENERATED_POST_COUNT}, createUserPhoto);
// eslint-disable-next-line no-console
console.table(generatedPosts);

