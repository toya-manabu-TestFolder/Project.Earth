DROP TABLE IF EXISTS api.テーブル名;
-- CREATE TABLE api.テーブル名 (
-- );
GRANT SELECT ON api.テーブル名 TO web_anon;
GRANT ALL ON api.テーブル名 to api_user;


--@block
-- 農家一覧テーブル◎
DROP TABLE IF EXISTS api.farmerData;

CREATE TABLE api.farmerData (
    id serial PRIMARY KEY,
    name varchar NOT NULL,
    carryr varchar NOT NULL,
    year integer NOT NULL,
    prefecture varchar NOT NULL,
    comment text NOT NULL,
    iconImageUrl text NOT NULL,
    coverImageUrl text NOT NULL,
    voiceUrl text NOT NULL
)

GRANT SELECT ON api.farmerData TO web_anon;
GRANT ALL ON api.farmerData to api_user;


--@block
-- ユーザー情報テーブル◎
DROP TABLE IF EXISTS api.users;

CREATE TABLE api.users (
    id serial PRIMARY KEY,
    name varchar NOT NULL,
    postcode varchar NOT NULL,
    email varchar NOT NULL,
    password varchar,
    prefecture varchar ,
    city varchar ,
    address varchar ,
    otherAddress varchar
);

GRANT SELECT ON api.users TO web_anon;
GRANT ALL ON api.users to api_user;
GRANT usage on sequence api.users_id_seq to api_user;

--@block
-- カートIDテーブル◎
DROP TABLE IF EXISTS api.cart;

CREATE TABLE api.cart (
    id serial PRIMARY KEY,
    userID integer NOT NULL
);

GRANT SELECT ON api.cart TO web_anon;
GRANT ALL ON api.cart to api_user;

--@block
-- カートIDテーブル◎
DROP TABLE IF EXISTS api.cartItems;

CREATE TABLE api.cartItems (
    cartID integer NOT NULL,
    itemID integer NOT NULL,
    quantity integer NOT NULL
);

GRANT SELECT ON api.cartItems TO web_anon;
GRANT ALL ON api.cartItems to api_user;
