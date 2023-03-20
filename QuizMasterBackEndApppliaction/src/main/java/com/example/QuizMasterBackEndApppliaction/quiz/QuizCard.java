package com.example.QuizMasterBackEndApppliaction.quiz;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class QuizCard {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String createdBy;

    private String quizTitle;

    private String cover;
    private String questAmount;


}
