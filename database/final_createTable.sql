create table vita_member
(
    id    varchar(50)                          not null
        primary key,
    name  varchar(50)                          not null,
    pwd   varchar(100)                         not null,
    jdate datetime default current_timestamp() null,
    phn   varchar(30)                          not null,
    bth   date                                 not null,
    gen   int      default 0                   not null
);

create index IX_vita_member
    on vita_member (name);

create table vita_naver_result
(
    nno      int auto_increment
        primary key,
    title    varchar(50)  default 'title' not null,
    link     varchar(255) default 'link'  not null,
    img      varchar(255) default 'img'   not null,
    lprice   int          default 0       not null,
    mallName varchar(255)                 null,
    maker    varchar(255)                 null,
    brand    varchar(255)                 null,
    cat1     varchar(255)                 null,
    cat2     varchar(255)                 null,
    cat3     varchar(255)                 null,
    cat4     varchar(255)                 null
);

create table vita_recommend
(
    e            float null,
    d            float null,
    a            float null,
    b1           float null,
    b2           float null,
    b3           float null,
    b5           float null,
    b9           float null,
    b12          float null,
    b7           float null,
    c            float null,
    cr           float null,
    mo           float null,
    i            float null,
    mn           float null,
    se           float null,
    cu           float null,
    zn           float null,
    fe           float null,
    mg           float null,
    ca           float null,
    lacto        float null,
    lutein       float null,
    milk_thistle float null,
    omega3       float null,
    msm          float null,
    propolis     float null,
    collagen     float null,
    theanine     float null
);

create table vita_search
(
    SKNO       int auto_increment
        primary key,
    KWD        varchar(50)                          not null,
    SCDATETIME datetime default current_timestamp() not null
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
    id    varchar(50)          not null,
    constraint foreign_key_name_for_member
        foreign key (id) references vita_member (id)
);

create table vita_sur_function
(
    funno int auto_increment
        primary key,
    sc    tinyint(1) default 0 null,
    act   tinyint(1) default 0 null,
    eye   tinyint(1) default 0 null,
    joint tinyint(1) default 0 null,
    oxy   tinyint(1) default 0 null,
    sight tinyint(1) default 0 null,
    skin  tinyint(1) default 0 null,
    imn   tinyint(1) default 0 null,
    jang  tinyint(1) default 0 not null,
    gan   tinyint(1) default 0 null,
    prs   tinyint(1) default 0 null,
    bone  tinyint(1) default 0 null,
    col   tinyint(1) default 0 null,
    vmid  tinyint(1) default 0 null,
    id    varchar(50)          not null,
    constraint foreign_key_name_member
        foreign key (id) references vita_member (id)
);

create table vita_survey
(
    survey_no int auto_increment
        primary key,
    forno     int null,
    funno     int null,
    constraint FK_vita_sur_formulation_TO_vita_survey
        foreign key (forno) references vita_sur_formulation (forno),
    constraint FK_vita_sur_function_TO_vita_survey
        foreign key (funno) references vita_sur_function (funno)
);

create table vita_vita
(
    vno         int auto_increment
        primary key,
    name        varchar(255)                         not null,
    link        varchar(255)                         not null,
    img_path    varchar(255)                         not null,
    cat1        varchar(255)                         null,
    cat2        varchar(255)                         null,
    cat3        varchar(255)                         null,
    cat4        varchar(255)                         null,
    insert_date datetime default current_timestamp() not null,
    constraint key_name
        unique (name)
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
    constraint FK_vita_vita_TO_vita_formulation
        foreign key (vno) references vita_vita (vno)
);

create table vita_function
(
    vno   int auto_increment
        primary key,
    sc    tinyint(1) default 0 null,
    act   tinyint(1) default 0 null,
    eye   tinyint(1) default 0 null,
    joint tinyint(1) default 0 null,
    oxy   tinyint(1) default 0 null,
    sight tinyint(1) default 0 null,
    skin  tinyint(1) default 0 null,
    imn   tinyint(1) default 0 null,
    jang  tinyint(1) default 0 null,
    gan   tinyint(1) default 0 null,
    prs   tinyint(1) default 0 null,
    bone  tinyint(1) default 0 null,
    col   tinyint(1) default 0 null,
    vmid  tinyint(1) default 0 null,
    constraint FK_vita_vita_TO_vita_function
        foreign key (vno) references vita_vita (vno)
);

create table vita_like
(
    like_no int auto_increment
        primary key,
    status  tinyint(1) default 0 not null,
    id      varchar(50)          not null,
    vno     int                  not null,
    constraint foreign_key_name_id
        foreign key (id) references vita_member (id),
    constraint foreign_key_name_vno
        foreign key (vno) references vita_vita (vno)
);

create table vita_vitamin
(
    vdno         int auto_increment
        primary key,
    e            decimal(5, 1) default 0.0 null,
    d            decimal(5, 1) default 0.0 null,
    a            decimal(5, 1) default 0.0 null,
    b1           decimal(5, 1) default 0.0 null,
    b2           decimal(5, 1) default 0.0 null,
    b3           decimal(5, 1) default 0.0 null,
    b5           decimal(5, 1) default 0.0 null,
    b9           decimal(5, 1) default 0.0 null,
    b12          decimal(5, 1) default 0.0 null,
    b7           decimal(5, 1) default 0.0 null,
    c            decimal(5, 1) default 0.0 null,
    cr           decimal(5, 1) default 0.0 null,
    mo           decimal(5, 1) default 0.0 null,
    i            decimal(5, 1) default 0.0 null,
    mn           decimal(5, 1) default 0.0 null,
    se           decimal(5, 1) default 0.0 null,
    cu           decimal(5, 1) default 0.0 null,
    zn           decimal(5, 1) default 0.0 null,
    fe           decimal(5, 1) default 0.0 null,
    mg           decimal(5, 1) default 0.0 null,
    ca           decimal(5, 1) default 0.0 null,
    lacto        decimal(5, 1) default 0.0 null,
    vno          int                       not null,
    lutein       decimal(5, 1) default 0.0 null,
    milk_thistle decimal(5, 1) default 0.0 null,
    omega3       decimal(5, 1) default 0.0 null,
    msm          decimal(5, 1) default 0.0 not null,
    propolis     decimal(5, 1) default 0.0 not null,
    collagen     decimal(5, 1) default 0.0 null,
    theanine     decimal(5, 1) default 0.0 null,
    constraint key_name
        unique (vno),
    constraint foreign_key_name
        foreign key (vno) references vita_vita (vno)
);

