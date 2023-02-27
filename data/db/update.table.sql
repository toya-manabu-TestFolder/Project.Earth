-- テーブルへのフィールド改廃
--@block
-- フィールド追加
-- ALTER TABLE api.users ADD zipcode integer NOT NULL;

--@block
-- データ型変更
-- ALTER TABLE api.farmerData ALTER COLUMN carryr TYPE TEXT;
-- ALTER TABLE api.farmerData ALTER COLUMN representativename TYPE TEXT;

--@block
-- items comment追加
-- UPDATE api.items SET comment = '美味しいキャベツだよ' WHERE id = 1; 
-- UPDATE api.items SET comment = '美味しいキャベツだよ' WHERE id = 2; 

--@block
-- items itemsのimage追加
-- UPDATE api.items SET image = '/cabbage/cabbage1:2' WHERE id = 2; 
