--@block
-- テーブル作成サンプル
-- DROP TABLE IF EXISTS api.テーブル名;
-- CREATE TABLE api.テーブル名 (
-- );
-- GRANT SELECT ON api.テーブル名 TO web_anon;
-- GRANT ALL ON api.テーブル名 to api_user;

--@block
-- 農家一覧テーブル◎
DROP TABLE IF EXISTS api.farmer_data;

CREATE TABLE api.farmer_data (
    id serial PRIMARY KEY,
    farm_name text NOT NULL,
    representative_name text NOT NULL,
    year integer NOT NULL,
    carryr text NOT NULL,
    prefecture text NOT NULL,
    icon_imageurl text NOT NULL,
    cover_imageurl text NOT NULL,
    voiceurl text NOT NULL,
    comment text NOT NULL
);

GRANT SELECT ON api.farmer_data TO web_anon;
GRANT ALL ON api.farmer_data to api_user;
GRANT usage on sequence api.farmer_data_id_seq to api_user;

-- @block
-- 商品一覧テーブル
DROP TABLE IF EXISTS api.items;
CREATE TABLE api.items (
    id SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL,
    farmer_id INTEGER NOT NULL REFERENCES api.farmer_data(id),
    name TEXT NOT NULL,
    price INTEGER NOT NULL,
    image TEXT,
    comment TEXT,
    expaire TEXT
);
GRANT SELECT ON api.items TO web_anon;
GRANT ALL ON api.items to api_user;
GRANT usage on sequence api.items_id_seq to api_user;

-- @block
-- 商品カテゴリーテーブル
DROP TABLE IF EXISTS api.category;
CREATE TABLE api.category (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL
);
GRANT SELECT ON api.category TO web_anon;
GRANT ALL ON api.category to api_user;
GRANT usage on sequence api.category_id_seq to api_user;

--@block
-- ユーザー情報テーブル◎
DROP TABLE IF EXISTS api.users;

CREATE TABLE api.users (
    id serial PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    prefecture text NOT NULL,
    city text NOT NULL,
    address text NOT NULL,
    zipcode text NOT NULL
);

GRANT SELECT ON api.users TO web_anon;
GRANT ALL ON api.users to api_user;
GRANT usage on sequence api.users_id_seq to api_user;

-- @block
-- 購入履歴テーブル
DROP TABLE IF EXISTS api.sales;
CREATE TABLE api.sales (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES api.users(id),
    item_id INTEGER NOT NULL REFERENCES api.items(id),
    farmer_id INTEGER NOT NULL REFERENCES api.farmer_data(id),
    quantity INTEGER NOT NULL
    -- name,price
);
GRANT SELECT ON api.sales TO web_anon;
GRANT ALL ON api.sales to api_user;
GRANT usage on sequence api.sales_id_seq to api_user;

--@block
-- カート履歴テーブル◎
DROP TABLE IF EXISTS api.cartitems;

CREATE TABLE api.cartitems (
    id SERIAL PRIMARY KEY,
    user_id integer NOT NULL,
    item_id integer NOT NULL,
    quantity integer NOT NULL
);

GRANT SELECT ON api.cartitems TO web_anon;
GRANT ALL ON api.cartItems to api_user;
GRANT usage on sequence api.cartItems_id_seq to api_user;


--@block
-- カートIDテーブル◎
-- 一旦中止
-- DROP TABLE IF EXISTS api.cart;

-- CREATE TABLE api.cart (
--     id serial PRIMARY KEY,
--     user_id integer NOT NULL
-- );

-- GRANT SELECT ON api.cart TO web_anon;
-- GRANT ALL ON api.cart to api_user;
-- GRANT usage on sequence api.cart_id_seq to api_user;
