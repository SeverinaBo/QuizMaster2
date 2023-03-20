package com.example.QuizMasterBackEndApppliaction.repositories;

import com.example.QuizMasterBackEndApppliaction.quiz.QuizForm;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
@RequiredArgsConstructor
public class QuizFormImpl {
    private final JdbcTemplate jdbcTemplate;
    public List<QuizForm> getAllQuestions() {
        String sql = "SELECT * FROM QUIZFORM";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(QuizForm.class));
    }
}
