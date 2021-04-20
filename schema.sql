DROP TABLE IF EXISTS user_role;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS borrowers CASCADE;
DROP TABLE IF EXISTS loans CASCADE;
DROP TABLE IF EXISTS lenders CASCADE;
DROP TABLE IF EXISTS borrows;
DROP TABLE IF EXISTS applies;
DROP TABLE IF EXISTS lends;

CREATE TABLE user_role (
role_id SERIAL PRIMARY KEY,
role_name VARCHAR(255) UNIQUE NOT NULL
);

INSERT INTO public.user_role(role_name) VALUES ('Lender');
INSERT INTO public.user_role(role_name) VALUES ('Borrower');

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_firstname VARCHAR(255) NOT NULL,
    user_lastname VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    role_id INT REFERENCES user_role (role_id)
);


CREATE TABLE borrowers (
    borrower_id int PRIMARY KEY NOT NULL,
    balance int
);

CREATE TABLE loans (
    loan_id int PRIMARY KEY NOT NULL,
    duration int,
    principal decimal NOT NULL,
    interest decimal NOT NULL
);

CREATE TABLE lenders (
    lender_id int PRIMARY KEY NOT NULL,
    bank_name varchar(45)
);

CREATE TABLE borrows (
    borrower_id int,
    loan_id int,
    amount_due decimal,
    CONSTRAINT loan_id FOREIGN KEY (loan_id) REFERENCES loans(loan_id) ON DELETE SET NULL,
    CONSTRAINT borrower_id FOREIGN KEY (borrower_id) REFERENCES borrowers(borrower_id) ON DELETE SET NULL
);

CREATE TABLE applies (
    borrower_id int,
    loan_id int,
    CONSTRAINT loan_id FOREIGN KEY (loan_id) REFERENCES loans(loan_id) ON DELETE SET NULL,
    CONSTRAINT borrower_id FOREIGN KEY (borrower_id) REFERENCES borrowers(borrower_id) ON DELETE SET NULL
);

CREATE TABLE lends (
    loan_id int,
    lender_id int,
    CONSTRAINT loan_id FOREIGN KEY (loan_id) REFERENCES loans(loan_id) ON DELETE SET NULL,
    CONSTRAINT lender_id FOREIGN KEY (lender_id) REFERENCES lenders(lender_id) ON DELETE SET NULL
);