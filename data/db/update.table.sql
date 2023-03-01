-- テーブルへのフィールド改廃
--@block
-- フィールド追加
-- ALTER TABLE api.users ADD zipcode integer NOT NULL;
ALTER TABLE api.farmer_data ADD comment TEXT;

--@block
-- データ型変更
-- ALTER TABLE api.farmer_data ALTER COLUMN carryr TYPE TEXT NOT NULL
-- ALTER TABLE api.farmerData ALTER COLUMN representativename TYPE TEXT;

--@block
-- items comment追加
-- UPDATE api.items SET comment = '美味しいキャベツだよ' WHERE id = 1; 
-- UPDATE api.items SET comment = '美味しいキャベツだよ' WHERE id = 2; 

--@block
-- items itemsのimage追加
-- UPDATE api.items SET image = '/cabbage/cabbage1:2' WHERE id = 2; 

--@block
-- 外部キー追加
ALTER TABLE api.items 
ADD FOREIGN KEY (farmer_id) 
REFERENCES api.farmer_data (id);

--@block
ALTER TABLE api.items 
ADD FOREIGN KEY (category_id) 
REFERENCES api.category (id);
--@block
ALTER TABLE api.cartItems 
ADD FOREIGN KEY (user_id) 
REFERENCES api.users (id);
--@block
ALTER TABLE api.cartItems 
ADD FOREIGN KEY (item_id) 
REFERENCES api.items (id);
--@block
ALTER TABLE api.sales 
ADD FOREIGN KEY (use_id) 
REFERENCES api.users (id);
--@block
ALTER TABLE api.sales 
ADD FOREIGN KEY (farmer_id) 
REFERENCES api.users (id);
