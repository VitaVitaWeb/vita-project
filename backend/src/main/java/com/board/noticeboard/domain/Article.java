package com.board.noticeboard.domain;

import com.board.noticeboard.domain.ArticleComment;
import com.board.noticeboard.domain.AuditingFields;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@Getter
@ToString
@Table(indexes = {
        @Index(columnList = "title"),
        @Index(columnList = "hashtag"),
        @Index(columnList = "createdAt"),
        @Index(columnList = "createdBy")
})
@Entity
public class Article extends AuditingFields {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Setter @Column(nullable = false) private String title; // 제목
    @Setter @Column(nullable = false, length = 10000) private String content; // 본문

    @Setter private String hashtag; // 해시태그

    @ToString.Exclude
    @OrderBy("id")
    @OneToMany(mappedBy = "article", cascade = CascadeType.ALL)
    private final Set<ArticleComment> articleComments = new LinkedHashSet<>();
    // article에 연동된 comment들은 중복을 허용하지않고 모아서 보겠다.
    // JPA audditing를 통해서 자동으로 세팅될 수 있게

    protected Article() {}
    // 이렇게 의도를 전달한다. 도메인 article를 생성하고자할때는 어떤 것이 필요하는지 가이드를 한다.

    private Article(String title, String content, String hashtag) {
        this.title = title;
        this.content = content;
        this.hashtag = hashtag;
    }
    // 이렇게 의도를 전달한다. 도메인 article를 생성하고자할때는 어떤 것이 필요하는지 가이드를 한다.

    public static Article of(String title, String content, String hashtag) {
        return new Article(title, content, hashtag);
    }
    // 만들고 나서 만약 이걸 컬렉션에서 사용한다면 리스트를 통해서 쓸거같다. 따라서 리스트에 넣거나 중복요소 제거할때
    // 비교를 해야한다. 이럴때 동등성 검사를 해야한다.
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Article article)) return false;
        return id != null && id.equals(article.id);
    }// 영속화 하지않은 엔티티는 모두 탈락한다.


    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}