
package com.example.QuizMasterBackEndApppliaction.quiz;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuizFormDto {

    private Long id;

    private String question;
    private String answerA;
    private String answerB;

   private String answerC;
    private String answerD;
    private String correctAnswer;

    private int timePerQuestion;

}
