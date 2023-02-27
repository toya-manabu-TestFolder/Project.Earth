--@block
-- テーブル作成サンプル
-- DROP TABLE IF EXISTS api.テーブル名;
-- CREATE TABLE api.テーブル名 (
-- );
-- GRANT SELECT ON api.テーブル名 TO web_anon;
-- GRANT ALL ON api.テーブル名 to api_user;

-- @block
-- 商品一覧テーブル
DROP TABLE IF EXISTS api.items;
CREATE TABLE api.items (
    id SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL,
    farmer_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    price INTEGER NOT NULL,
    image TEXT,
    comment TEXT,
    expaire TEXT
);
GRANT SELECT ON api.items TO web_anon;
GRANT ALL ON api.items to api_user;

-- @block
-- 商品カテゴリーテーブル
DROP TABLE IF EXISTS api.category;
CREATE TABLE api.category (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
GRANT SELECT ON api.category TO web_anon;
GRANT ALL ON api.category to api_user;

-- @block
-- 購入履歴テーブル
DROP TABLE IF EXISTS api.sales;
CREATE TABLE api.sales (
    id SERIAL PRIMARY KEY,
    use_id INTEGER NOT NULL,
    item_id INTEGER NOT NULL,
    farmer_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL
);
GRANT SELECT ON api.sales TO web_anon;
GRANT ALL ON api.sales to api_user;

--@block
-- 農家一覧テーブル◎
DROP TABLE IF EXISTS api.farmerData;

CREATE TABLE api.farmerData (
    id serial PRIMARY KEY,
    farmname varchar NOT NULL,
    representativeName text NOT NULL,
    year integer NOT NULL,
    carryr varchar NOT NULL,
    prefecture varchar NOT NULL,
    iconImageUrl text NOT NULL,
    coverImageUrl text NOT NULL,
    voiceUrl text NOT NULL
);

GRANT SELECT ON api.farmerData TO web_anon;
GRANT ALL ON api.farmerData to api_user;


--@block
-- ユーザー情報テーブル◎
DROP TABLE IF EXISTS api.users;

CREATE TABLE api.users (
    id serial PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL UNIQUE,
    prefecture text NOT NULL,
    city text NOT NULL,
    address text NOT NULL,
    otherAddress text NOT NULL,
    zipcode text NOT NULL
);

GRANT SELECT ON api.users TO web_anon;
GRANT ALL ON api.users to api_user;

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
-- カート履歴テーブル◎
DROP TABLE IF EXISTS api.cartItems;

CREATE TABLE api.cartItems (
    cartID integer NOT NULL,
    itemID integer NOT NULL,
    quantity integer NOT NULL
);

GRANT SELECT ON api.cartItems TO web_anon;
GRANT ALL ON api.cartItems to api_user;
