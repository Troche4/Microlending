CREATE TABLE borrowers (
    PRIMARY KEY borrower_id int NOT NULL SERIAL,
    balance int,
);

CREATE TABLE borrows (
    borrower_id int,
    loan_id int,
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
    principal int NOT NULL,
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