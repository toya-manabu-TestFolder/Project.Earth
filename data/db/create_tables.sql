-- @block
DROP TABLE IF EXISTS api.items;
CREATE TABLE api.items (
    id SERIAL PRIMARY KEY,
    farmer_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    price INTEGER NOT NULL,
    image TEXT,
    comment TEXT,
    expaire TEXT
);
GRANT SELECT ON api.items TO web_anon;
GRANT ALL ON api.items to api_user;

-- @block
DROP TABLE IF EXISTS api.category;
CREATE TABLE api.category (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
GRANT SELECT ON api.category TO web_anon;
GRANT ALL ON api.category to api_user;

-- @block
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
