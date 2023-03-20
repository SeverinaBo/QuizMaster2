package com.example.QuizMasterBackEndApppliaction.services;


import com.example.QuizMasterBackEndApppliaction.quiz.QuizFormDto;

import java.util.List;

public interface QuizFormService {



    List<QuizFormDto> getAllQuestions();

    String createQuestion(QuizFormDto quizFormDto);



}
