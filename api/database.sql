DROP TABLE IF EXISTS user_role;
DROP TABLE IF EXISTS users;


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




