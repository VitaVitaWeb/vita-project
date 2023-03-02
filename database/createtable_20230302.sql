drop table vita_QA;

drop table vita_comment;

drop table vita_file;

drop table vita_formulation;

drop table vita_function;

drop table vita_history;

drop table vita_notice;

drop table vita_prefer;

drop table vita_search;

drop table vita_singo;

drop table vita_review;

drop table vita_survey;

drop table vita_member;

drop table vita_sur_formulation;

drop table vita_sur_function;

drop table vita_sur_prefer;

drop table vita_sur_vitamin;

drop table vita_vitamin;

drop table vita_vita;

create table vita_comment
(
    cno   int auto_increment
        primary key,
    cont  mediumtext                           null,
    cdate datetime default current_timestamp() not null
);

create table vita_member
(
    id    varchar(50)                          not null
        primary key,
    name  varchar(50)                          not null,
    pwd   varchar(100)                         not null,
    jdate datetime default current_timestamp() null,
    phn   varchar(30)                          not null,
    bth   date                                 not null,
    gen   int      default 0                   not null,
    nname varchar(50)                          not null comment '닉네임'
);

create table vita_QA
(
    qno   int auto_increment
        primary key,
    open  tinyint(1)                           not null,
    title varchar(255)                         not null,
    cont  mediumtext                           not null,
    qdate datetime default current_timestamp() null,
    ans   mediumtext                           null,
    adate datetime                             null,
    mno   varchar(50)                          null,
    constraint FK_vita_member_TO_vita_QA
        foreign key (mno) references vita_member (id)
);

create table vita_history
(
    HNO       int auto_increment
        primary key,
    HDATETIME datetime default current_timestamp() not null,
    mno       varchar(50)                          null,
    constraint FK_vita_member_TO_vita_history
        foreign key (mno) references vita_member (id)
);

create index IX_vita_member
    on vita_member (name);

create table vita_notice
(
    nno      int auto_increment
        primary key,
    title    varchar(255)                         null,
    cont     mediumtext                           not null,
    DATETIME datetime default current_timestamp() not null
);

create table vita_review
(
    rno   int auto_increment
        primary key,
    cont  mediumtext  not null,
    wdate date        not null,
    vlike tinyint(1)  not null,
    mno   varchar(50) null,
    constraint FK_vita_member_TO_vita_review
        foreign key (mno) references vita_member (id)
);

create table vita_search
(
    SKNO       int auto_increment
        primary key,
    KWD        varchar(50)                          not null,
    SCDATETIME datetime default current_timestamp() not null
);

create table vita_singo
(
    sno    int auto_increment
        primary key,
    reason mediumtext                           not null,
    cont   mediumtext                           not null,
    sdate  datetime default current_timestamp() not null,
    rno    int                                  null,
    constraint FK_vita_review_TO_vita_singo
        foreign key (rno) references vita_review (rno)
);

create table vita_sur_formulation
(
    forno int auto_increment
        primary key,
    cap   tinyint(1) default 0 null,
    pill  tinyint(1) default 0 null,
    pow   tinyint(1) default 0 null,
    liq   tinyint(1) default 0 null,
    chew  tinyint(1) default 0 null,
    jell  tinyint(1) default 0 null,
    pho   tinyint(1) default 0 null,
    ball  tinyint(1) default 0 null
);

create table vita_sur_function
(
    funno  int auto_increment
        primary key,
    sc     tinyint(1) default 0 null,
    act    tinyint(1) default 0 null,
    eye    tinyint(1) default 0 null,
    joint  tinyint(1) default 0 null,
    oxy    tinyint(1) default 0 null,
    sight  tinyint(1) default 0 null,
    skin   tinyint(1) default 0 null,
    weight tinyint(1) default 0 null,
    imn    tinyint(1) default 0 null,
    jang   tinyint(1)           not null,
    gan    tinyint(1) default 0 null,
    prs    tinyint(1) default 0 null,
    bspd   tinyint(1) default 0 null,
    bone   tinyint(1) default 0 null,
    col    tinyint(1) default 0 null,
    vmid   tinyint(1) default 0 null,
    dang   tinyint(1) default 0 null
);

create table vita_sur_prefer
(
    preno int auto_increment
        primary key,
    mny   tinyint(1) default 0 null,
    src   tinyint(1) default 0 null,
    mtr   tinyint(1) default 0 null,
    mult  tinyint(1) default 0 null,
    pakg  tinyint(1) default 0 null,
    high  tinyint(1) default 0 null,
    fit   tinyint(1) default 0 null,
    abrd  tinyint(1) default 0 null,
    vday  tinyint(1) default 0 null
);

create table vita_sur_vitamin
(
    vino  int auto_increment
        primary key,
    e     decimal(5, 1) default 0.0 null,
    d     decimal(5, 1) default 0.0 null,
    a     decimal(5, 1) default 0.0 null,
    b1    decimal(5, 1) default 0.0 null,
    b2    decimal(5, 1) default 0.0 null,
    b3    decimal(5, 1) default 0.0 null,
    b5    decimal(5, 1) default 0.0 null,
    b4    decimal(5, 1) default 0.0 null,
    b9    decimal(5, 1) default 0.0 null,
    b12   decimal(5, 1) default 0.0 null,
    b7    decimal(5, 1) default 0.0 null,
    c     decimal(5, 1) default 0.0 null,
    cr    decimal(5, 1) default 0.0 null,
    mo    decimal(5, 1) default 0.0 null,
    i     decimal(5, 1) default 0.0 null,
    mn    decimal(5, 1) default 0.0 null,
    se    decimal(5, 1) default 0.0 null,
    cu    decimal(5, 1) default 0.0 null,
    zn    decimal(5, 1) default 0.0 null,
    fe    decimal(5, 1) default 0.0 null,
    mg    decimal(5, 1) default 0.0 null,
    ca    decimal(5, 1) default 0.0 null,
    lacto decimal(5, 1) default 0.0 null
);

create table vita_survey
(
    mno   varchar(50) not null
        primary key,
    preno int         null,
    forno int         null,
    funno int         null,
    vino  int         null,
    constraint FK_vita_member_TO_vita_survey
        foreign key (mno) references vita_member (id),
    constraint FK_vita_sur_formulation_TO_vita_survey
        foreign key (forno) references vita_sur_formulation (forno),
    constraint FK_vita_sur_function_TO_vita_survey
        foreign key (funno) references vita_sur_function (funno),
    constraint FK_vita_sur_prefer_TO_vita_survey
        foreign key (preno) references vita_sur_prefer (preno),
    constraint FK_vita_sur_vitamin_TO_vita_survey
        foreign key (vino) references vita_sur_vitamin (vino)
);

create table vita_vita
(
    vno  int auto_increment
        primary key,
    name varchar(50)  not null,
    link varchar(255) not null
);

create table vita_file
(
    fno  int auto_increment
        primary key,
    path varchar(255) not null,
    vno  int          null,
    constraint FK_vita_vita_TO_vita_file
        foreign key (vno) references vita_vita (vno)
);

create table vita_formulation
(
    vno  int auto_increment
        primary key,
    cap  tinyint(1) default 0 null,
    pill tinyint(1) default 0 null,
    pow  tinyint(1) default 0 null,
    liq  tinyint(1) default 0 null,
    chew tinyint(1) default 0 null,
    jell tinyint(1) default 0 null,
    pho  tinyint(1) default 0 null,
    ball tinyint(1) default 0 null,
    constraint FK_vita_vita_TO_vita_formulation
        foreign key (vno) references vita_vita (vno)
);

create table vita_function
(
    vno    int auto_increment
        primary key,
    sc     tinyint(1) default 0 null,
    act    tinyint(1) default 0 null,
    eye    tinyint(1) default 0 null,
    joint  tinyint(1) default 0 null,
    oxy    tinyint(1) default 0 null,
    sight  tinyint(1) default 0 null,
    skin   tinyint(1) default 0 null,
    weight tinyint(1) default 0 null,
    imn    tinyint(1) default 0 null,
    jang   tinyint(1) default 0 null,
    gan    tinyint(1) default 0 null,
    prs    tinyint(1) default 0 null,
    bspd   tinyint(1) default 0 null,
    bone   tinyint(1) default 0 null,
    col    tinyint(1) default 0 null,
    vmid   tinyint(1) default 0 null,
    dang   tinyint(1) default 0 null,
    constraint FK_vita_vita_TO_vita_function
        foreign key (vno) references vita_vita (vno)
);

create table vita_prefer
(
    vno  int auto_increment
        primary key,
    mny  tinyint(1) default 0 null,
    src  tinyint(1) default 0 null,
    mtr  tinyint(1) default 0 null,
    mult tinyint(1) default 0 null,
    pakg tinyint(1) default 0 null,
    high tinyint(1) default 0 null,
    fit  tinyint(1) default 0 null,
    abrd tinyint(1) default 0 null,
    vday tinyint(1) default 0 null,
    constraint FK_vita_vita_TO_vita_prefer
        foreign key (vno) references vita_vita (vno)
);

create table vita_vitamin
(
    vno   int auto_increment
        primary key,
    e     decimal(5, 1) default 0.0 null,
    d     decimal(5, 1) default 0.0 null,
    a     decimal(5, 1) default 0.0 null,
    b1    decimal(5, 1) default 0.0 null,
    b2    decimal(5, 1) default 0.0 null,
    b3    decimal(5, 1) default 0.0 null,
    b5    decimal(5, 1) default 0.0 null,
    b4    decimal(5, 1) default 0.0 null,
    b9    decimal(5, 1) default 0.0 null,
    b12   decimal(5, 1) default 0.0 null,
    b7    decimal(5, 1) default 0.0 null,
    c     decimal(5, 1) default 0.0 null,
    cr    decimal(5, 1) default 0.0 null,
    mo    decimal(5, 1) default 0.0 null,
    i     decimal(5, 1) default 0.0 null,
    mn    decimal(5, 1) default 0.0 null,
    se    decimal(5, 1) default 0.0 null,
    cu    decimal(5, 1) default 0.0 null,
    zn    decimal(5, 1) default 0.0 null,
    fe    decimal(5, 1) default 0.0 null,
    mg    decimal(5, 1) default 0.0 null,
    ca    decimal(5, 1) default 0.0 null,
    lacto decimal(5, 1) default 0.0 null,
    constraint FK_vita_vita_TO_vita_vitamin
        foreign key (vno) references vita_vita (vno)
);

