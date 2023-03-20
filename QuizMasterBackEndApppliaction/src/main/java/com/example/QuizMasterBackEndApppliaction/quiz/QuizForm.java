package com.example.QuizMasterBackEndApppliaction.quiz;


import lombok.*;

import javax.persistence.*;



@Builder
@Entity
@Table(name = "QUIZFORM")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuizForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "QUESTION", nullable = false)
    private String question;

    @Column(name = "ANSWERA", nullable = false)
    private String answerA;

    @Column(name = "ANSWERB", nullable = false)
    private String answerB;

    @Column(name = "ANSWERC", nullable = false)
    private String answerC;

    @Column(name = "ANSWERD", nullable = false)
    private String answerD;

    @Column(name = "CORRECTANSWER", nullable = false)
    private String correctAnswer;

    @Column(name = "TIMEPERQUESTION", nullable = false)
    private int timePerQuestion;



}