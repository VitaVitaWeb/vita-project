package com.board.noticeboard.repository;

import com.board.noticeboard.config.JpaConfig;
import com.board.noticeboard.domain.Article;
import com.board.noticeboard.domain.ArticleComment;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import java.util.List;

import static org.assertj.core.api.Assertions.*;



@DisplayName("JPA 연결 테스트")
@Import(JpaConfig.class) // 이거 없으면 JpaConfig 존재를 몰라 제대로 테스트가 불가능하다. 이거 없으면 JpaConfing에서 넣어준 자동 Auditing이 동작을 안한다.
@DataJpaTest
class JpaRepositoryTest {

    // DataJpaTest에 이미 AutoWired 기능이 있어서 생성자 주입패턴으로 필드를 만들 수 있다.
    private ArticleRepository articleRepository;
    private ArticleCommentRepository articleCommentRepository;

    public JpaRepositoryTest(
           @Autowired ArticleRepository articleRepository,
           @Autowired  ArticleCommentRepository articleCommentRepository) {
        this.articleRepository = articleRepository;
        this.articleCommentRepository = articleCommentRepository;
    }


    @DisplayName("select 테스트")
    @Test
    void givenTestData_whenSelection_thenWorkFine(){
        // Given

        //When
        List<Article> articles = articleRepository.findAll();


        //Then
        assertThat(articles)
                .isNotNull()
                .hasSize(123);

    }

    @DisplayName("insert 테스트")
    @Test
    void givenTestData_whenInserting_thenWorkFine(){
        // Given
        long previousCount = articleRepository.count();
        Article article = Article.of("new article","new content","#spring");
        //When
      Article savedArticle =   articleRepository.save(article);
        //Then
        assertThat(articleRepository.count()).isEqualTo(previousCount +1);
    }


    @DisplayName("업데이트 테스트")
    @Test
    void givenTestData_whenUpdating_thenWorkFine(){
        // Given
    /*   수정했을때 쿼리가 발생하는걸 관찰해야하니 영속성 클래스로부터 가져와야한다.
         영속성이란  객체 지향 프로그래밍에서 사용되는 용어로, 객체의 데이터를 영구적으로 저장하고 관리하는 것을 의미합니다.*/

        Article article = articleRepository.findById(1L).orElseThrow();
        String updateHashTag = "#springboot";
        article.setHashtag(updateHashTag);

        //When
        Article savedArticle =   articleRepository.saveAndFlush(article);


        //Then
        assertThat(savedArticle).hasFieldOrPropertyWithValue("hashtag",updateHashTag); // 해쉬태그 내용이 업데이트 되었는가
    }

    @DisplayName("삭제 테스트")
    @Test
    void givenTestData_whenDeleting_thenWorkFine(){
        // Given
    /*   수정했을때 쿼리가 발생하는걸 관찰해야하니 영속성 클래스로부터 가져와야한다.
         영속성이란  객체 지향 프로그래밍에서 사용되는 용어로, 객체의 데이터를 영구적으로 저장하고 관리하는 것을 의미합니다.*/

        Article article = articleRepository.findById(1L).orElseThrow();
        // 지우면 건수가 줄어드니 count으로 테스트
        long previousArticleCount = articleRepository.count();
        long previousArticleCommentCount = articleCommentRepository.count();
        long deletedCommentSize = article.getArticleComments().size();


        //When
       articleRepository.delete(article);


        //Then
        assertThat(articleRepository.count()).isEqualTo(previousArticleCount -1);
        assertThat(articleCommentRepository.count()).isEqualTo(previousArticleCommentCount -1);
    }
}