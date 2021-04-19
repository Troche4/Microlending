
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
    PRIMARY KEY borrower_id int NOT NULL SERIAL,
    balance int,
);

CREATE TABLE borrows (
    borrower_id int,
    loan_id int,
    amount_due decimal,
    CONSTRAINT loan_id FOREIGN KEY (loan_id) REFERENCES loans(loan_id) ON DELETE SET NULL,
    CONSTRAINT borrower_id FOREIGN KEY (borrower_id) REFERENCES borrowers(borrower_id) ON DELETE SET NULL,
);

CREATE TABLE applies (
    borrower_id int,
    loan_id int,
    CONSTRAINT loan_id FOREIGN KEY (loan_id) REFERENCES loans(loan_id) ON DELETE SET NULL,
    CONSTRAINT borrower_id FOREIGN KEY (borrower_id) REFERENCES borrowers(borrower_id) ON DELETE SET NULL,
);

CREATE TABLE loans (
    PRIMARY KEY loan_id int NOT NULL SERIAL,
    duration int,
    principal decimal NOT NULL,
    interest decimal NOT NULL,
);

CREATE TABLE lends (
    loan_id int,
    lender_id int,
    CONSTRAINT loan_id FOREIGN KEY (loan_id) REFERENCES loans(loan_id) ON DELETE SET NULL,
    CONSTRAINT lender_id FOREIGN KEY (lender_id) REFERENCES lenders(lender_id) ON DELETE SET NULL,
);

CREATE TABLE lenders (
    PRIMARY KEY lender_id int NO NULL SERIAL,
    bank_name varchar(45)
);