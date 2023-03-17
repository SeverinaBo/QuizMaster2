import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

    const QUIZ_NAME = [
    'FirstQuiz',
        'SecondQuiz',
        'Third Quiz',
        'Fourth Quiz',

];


// ----------------------------------------------------------------------

const quizzez = [...Array(4)].map((_, index) => {
    const setIndex = index + 1;

    return {
        id: faker.datatype.uuid(),
        createdBy : '',
        quizTitle: QUIZ_NAME[index],
        cover: `/assets/images/covers/cover_${setIndex}.jpg`,
        name: QUIZ_NAME[index],
        questAmount: 4
    };
});

export default quizzez;
