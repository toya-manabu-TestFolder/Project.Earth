-- INSERT INTO api.items (id,farmer_id,category_id,name, price,expaire) VALUES 
--     (1,1,1,'男前キャベツ 1/4個','50','5日以内'),
--     (2,1,1,'男前キャベツ1/2個','70','5日以内'),
--     (3,1,1,'男前キャベツ1個','100','5日以内'),
--     (4,1,1,'男前キャベツ1㎏','100','5日以内')
--     (5,1,2,'みよばぁの人参1/2個','40','5日以内'),
--     (6,1,2,'みよばぁの人参1個','60','5日以内'),
--     (7,1,2,'みよばぁの人参3個','180','5日以内'),
--     (8,1,2,'みよばぁの人参1㎏','300','5日以内'),
--     (9,1,3,'男前トマト1/2個','60','5日以内'),
--     (10,1,3,'男前トマト1個','80','5日以内'),
--     (11,1,3,'男前トマト3個','240','5日以内'),
--     (12,1,3,'男前トマト1㎏','400','5日以内'),
--     (13,1,4,'たつじぃのかぼちゃ1/4個','180','5日以内'),
--     (14,1,4,'たつじぃのかぼちゃ1/2個','250','5日以内'),
--     (15,1,4,'たつじぃのかぼちゃ1個','500','5日以内'),
--     (16,1,4,'たつじぃのかぼちゃ1㎏','500','5日以内'),
--     (17,1,7,'男前大根1/4個','80','5日以内'),
--     (18,1,7,'男前大根1/2個','100','5日以内'),
--     (19,1,7,'男前大根1個','150','5日以内'),
--     (20,1,7,'男前大根1㎏','150','5日以内')

--@block
-- INSERT INTO api.items (id,farmer_id,category_id,name, price,expaire) VALUES 
--     (21,2,5,'GODナス1個','80','3日以内'),
--     (22,2,5,'GODナス2個','150','3日以内'),
--     (23,2,5,'GODナス4個','300','3日以内'),
--     (24,2,5,'GODナス1㎏','800','3日以内'),
--     (25,2,6,'GODほうれん草1/2束','80','3日以内'),
--     (26,2,6,'GODほうれん草1束','150','3日以内'),
--     (27,2,6,'GODほうれん草2束','300','3日以内'),
--     (28,2,6,'GODほうれん草1K','500','3日以内'),
--     (29,2,7,'GOD大根1/4個','80','3日以内'),
--     (30,2,7,'GOD大根1/2個','100','3日以内'),
--     (31,2,7,'GOD大根1個','150','3日以内'),
--     (32,2,7,'GOD大根1kg','150','3日以内'),
--     (33,2,3,'GODトマト1/2個','60','3日以内'),
--     (34,2,3,'GODトマト1個','80','3日以内'),
--     (35,2,3,'GODトマト3個','240','3日以内'),
--     (36,2,3,'GODトマト1kg','400','3日以内'),
--     (37,2,3,'GOD人参1/2個','40','3日以内'),
--     (38,2,3,'GOD人参1個','60','3日以内'),
--     (39,2,3,'GOD人参3個','180','3日以内'),
--     (40,2,3,'GOD人参1kg','300','3日以内')


--@block
-- UPDATE api.items SET comment = '美味しいよ' WHERE id = 1; 


--@block
-- UPDATE api.items SET image = '/cabbage/cabbage1:2' WHERE id = 2; 


-- @block
SELECT * FROM api.items;
-- @block
-- DELETE FROM api.items;






-- @block
-- INSERT INTO api.category (id,name) VALUES
--  (1,'cabbage'),
--  (2,'carrot'),
--  (3,'tomato'),
--  (4,'pumpkin'),
--  (5,'eggplant'),
--  (6,'spinach'),
--  (7,'radish'),
--  (8,'potato')


-- @block
SELECT * FROM api.category;

-- @block
-- DELETE FROM api.category;
