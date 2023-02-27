-- テーブルへのフィールド改廃
--@block
ALTER TABLE api.users ADD zipcode integer NOT NULL;

--@block
ALTER TABLE api.farmerData ALTER COLUMN carryr TYPE TEXT;
-- ALTER TABLE api.farmerData ALTER COLUMN representativename TYPE TEXT;
