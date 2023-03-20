package com.example.QuizMasterBackEndApppliaction.controllers;

import java.io.IOException;
import java.util.List;


import com.example.QuizMasterBackEndApppliaction.quiz.QuizFormDto;


import com.example.QuizMasterBackEndApppliaction.services.QuizFormService;
import com.example.QuizMasterBackEndApppliaction.services.QuizFormServiceImpl;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/quiz")
@CrossOrigin("*")
@Api(tags = {"this is a quiz controller", "with string array description"})
public class QuizFormController {


private final QuizFormService quizService;



    @GetMapping("/all")
    public List<QuizFormDto> getAllQuestions(){
        return  quizService.getAllQuestions();
    }

    @PostMapping
    public String createQuizForm(@RequestBody QuizFormDto quizForm){
        return quizService.createQuestion(quizForm);
    }

    @PostMapping("/create")
    public String createQuizForm(@RequestParam("question") String question,
                                 @RequestParam("answerA") String answerA,
                                 @RequestParam("answerB") String answerB,
                                 @RequestParam("answerC") String answerC,
                                 @RequestParam("answerD") String answerD,
                                 @RequestParam("correctAnswer") String correctAnswer,
                                @RequestParam("timePerQuestion") int timePerQuestion)
            throws IOException {
        QuizFormDto dto = QuizFormDto.builder()
                .question(question)
                .answerA(answerA)
                .answerB(answerB)
                .answerC(answerC)
                .answerD(answerD)
                .correctAnswer(correctAnswer)
                .timePerQuestion(timePerQuestion)
                .build();

        return quizService.createQuestion(dto);

/*    @GetMapping("/{id}")
    public Optional<QuizDto> getQuizById(@PathVariable Long id){
        return  quizServiceImpl.getQuizById(id);
    }*/
  /*  @PostMapping("/quiz")
    public String createQuiz(@RequestBody QuizDto quizDto) {
        quizServiceImpl.createQuiz(quizDto);
        return "siccses";
    }*/


/*    @DeleteMapping("/{id}")
    public void deleteQuizById(@PathVariable Long id) {
        quizServiceImpl.deleteById(id);
    }*/


}}