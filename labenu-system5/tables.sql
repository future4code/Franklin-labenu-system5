/*TABELA TURMA */

CREATE TABLE IF NOT EXISTS  schoolClass (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    module VARCHAR(255) NOT NULL DEFAULT 0
);

/*ESTUDANTE*/ 

CREATE TABLE IF NOT EXISTS student (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    birthDate DATE NOT NULL,
    class_id VARCHAR(100) NOT NULL,
    FOREIGN KEY (class_id) REFERENCES schoolClass(id)
);

CREATE TABLE IF NOT EXISTS hobby (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS student_hobby (
    id VARCHAR(100) PRIMARY KEY,
    student_id VARCHAR(100) NOT NULL,
    hobby_id VARCHAR(100) NOT NULL,
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (hobby_id) REFERENCES hobby(id)

);

CREATE TABLE IF NOT EXISTS teacher (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    birthDate DATE NOT NULL,
    class_id VARCHAR(100) NOT NULL,
    FOREIGN KEY (class_id) REFERENCES schoolClass(id)
);

CREATE TABLE IF NOT EXISTS specialty (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS  teacher_specialty (
    id VARCHAR(100) PRIMARY KEY,
    teacher_id VARCHAR(100) NOT NULL,
    specialty_id VARCHAR(100) NOT NULL,
    FOREIGN KEY(teacher_id) REFERENCES teacher(id),
    FOREIGN KEY(specialty_id) REFERENCES specialty(id)
);