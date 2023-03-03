--@block farmer_data情報追加
INSERT INTO api.farmer_data (id	,	farm_name	,	representative_name	,	year 	,	carryr	,	prefecture	,	icon_imageurl	,	cover_imageurl	,	voiceurl,comment) VALUES
(	1	,	
'七瀬ファーム'	,	
'七瀬 獅童'	,	
24	,	
'夫婦で農業を始め、はや24年
同い年の二人は、今年で64歳
会社員だった旦那さんは、管理職まで上り詰めたものの、日々の激務で疲弊
40歳の頃、自給自足の生活に憧れを持ち一念発起し、夫婦で北海道へ移住
現在、有機野菜の世界では知らない人がいないとまで言われる存在に
夫婦それぞれの名前がついた野菜たちは、道の駅に並べば1時間で売り切れるほどの人気ぶり'	
,	'静岡県'	
,	'/farmerImages/farmer1.jpg'	
,	'/farmerImages/farmerCover1.jpg'	
,	''	,''),
(	2	,	
'溝口ファクトリー'	,	
'溝口 由宇'	,	
4	,	
'23歳
東京でアパレル店員
高校時代の友人と群馬へ旅行に行った際に、キャベツの美味しさに感動
農家の方と意気投合し、21歳の頃勢いで農家で働くことに
令和の「ギャル農家」として一躍話題に
自ら考案し命名した「GODキャベツ」は味も見た目も神クラスとのこと'	,	
'兵庫県'	,	
'/farmerImages/farmer2.jpg'	,	
'/farmerImages/farmerCover2.jpg'	,	
'',''	)

--@block
-- items情報追加
INSERT INTO api.items (id,category_id,farmer_id,name, price,image,comment,expaire,items_search) VALUES 
(	1	,	1	,	1	,	'惣菜キャベツピクルス'	,	70	,	''	,	''	,	'5日以内', 'きゃべつ, キャベツ, cabbage, kyabetu, kyabetsu'),
(	2	,	1	,	1	,	'男前キャベツ1/2個'	,	100	,	''	,	''	,	'5日以内', 'きゃべつ, キャベツ, cabbage, kyabetu, kyabetsu'),
(	3	,	1	,	1	,	'男前キャベツ1個'	,	100	,	''	,	''	,	'5日以内', 'きゃべつ, キャベツ, cabbage, kyabetu, kyabetsu'),
(	4	,	1	,	1	,	'男前キャベツ1㎏'	,	40	,	''	,	''	,	'5日以内', 'きゃべつ, キャベツ, cabbage, kyabetu, kyabetsu'),
(	5	,	2	,	1	,	'みよばぁの人参1/2個'	,	60	,	''	,	''	,	'5日以内', '人参, にんじん, ニンジン, carrot, ninzin, ninjin, ninnzinn, ninnjinn'),
(	6	,	2	,	1	,	'みよばぁの人参1個'	,	180	,	''	,	''	,	'5日以内', '人参, にんじん, ニンジン, carrot, ninzin, ninjin, ninnzinn, ninnjinn'),
(	7	,	2	,	1	,	'みよばぁの人参3個'	,	300	,	''	,	''	,	'5日以内', '人参, にんじん, ニンジン, carrot, ninzin, ninjin, ninnzinn, ninnjinn'),
(	8	,	2	,	1	,	'みよばぁの人参1㎏'	,	60	,	''	,	''	,	'5日以内', '人参, にんじん, ニンジン, carrot, ninzin, ninjin, ninnzinn, ninnjinn'),
(	9	,	3	,	1	,	'男前トマト1/2個'	,	80	,	''	,	''	,	'5日以内', 'とまと, トマト, tomato,'),
(	10	,	3	,	1	,	'男前トマト1個'	,	240	,	''	,	''	,	'5日以内', 'とまと, トマト, tomato,'),
(	11	,	3	,	1	,	'男前トマト3個'	,	400	,	''	,	''	,	'5日以内', 'とまと, トマト, tomato,'),
(	12	,	3	,	1	,	'男前トマト1㎏'	,	180	,	''	,	''	,	'5日以内', 'とまと, トマト, tomato,'),
(	13	,	4	,	1	,	'たつじぃのかぼちゃ1/4個'	,	250	,	''	,	''	,	'5日以内', '南瓜, かぼちゃ, カボチャ, pumpkin, kabotya, kabocha'),
(	14	,	4	,	1	,	'たつじぃのかぼちゃ1/2個'	,	500	,	''	,	''	,	'5日以内', '南瓜, かぼちゃ, カボチャ, pumpkin, kabotya, kabocha'),
(	15	,	4	,	1	,	'たつじぃのかぼちゃ1個'	,	500	,	''	,	''	,	'5日以内', '南瓜, かぼちゃ, カボチャ, pumpkin, kabotya, kabocha'),
(	16	,	4	,	1	,	'たつじぃのかぼちゃ1㎏'	,	80	,	''	,	''	,	'5日以内', '南瓜, かぼちゃ, カボチャ, pumpkin, kabotya, kabocha'),
(	17	,	7	,	1	,	'男前大根1/4個'	,	100	,	''	,	''	,	'5日以内', '大根, だいこん, ダイコン, radish, daikon, daikonn'),
(	18	,	7	,	1	,	'男前大根1/2個'	,	150	,	''	,	''	,	'5日以内', '大根, だいこん, ダイコン, radish, daikon, daikonn'),
(	19	,	7	,	1	,	'男前大根1個'	,	150	,	''	,	''	,	'5日以内', '大根, だいこん, ダイコン, radish, daikon, daikonn'),
(	20	,	7	,	1	,	'男前大根1㎏'	,	150	,	''	,	''	,	'5日以内', '大根, だいこん, ダイコン, radish, daikon, daikonn'),
(	21	,	5	,	2	,	'GODナス1個'	,	80	,	''	,	''	,	'5日以内', '茄子, なす, ナス, eggplant, nasu'),
(	22	,	5	,	2	,	'GODナス2個'	,	150	,	''	,	''	,	'5日以内', '茄子, なす, ナス, eggplant, nasu'),
(	23	,	5	,	2	,	'GODナス4個'	,	300	,	''	,	''	,	'5日以内', '茄子, なす, ナス, eggplant, nasu'),
(	24	,	5	,	2	,	'GODナス1kg'	,	800	,	''	,	''	,	'5日以内', '茄子, なす, ナス, eggplant, nasu'),
(	25	,	6	,	2	,	'GODほうれん草1/2束'	,	80	,	''	,	''	,	'5日以内', 'ほうれん草, ほうれんそう, ホウレンソウ, spinach, hourensou, hourennsou'),
(	26	,	6	,	2	,	'GODほうれん草1束'	,	150	,	''	,	''	,	'5日以内', 'ほうれん草, ほうれんそう, ホウレンソウ, spinach, hourensou, hourennsou'),
(	27	,	6	,	2	,	'GODほうれん草2束'	,	300	,	''	,	''	,	'5日以内', 'ほうれん草, ほうれんそう, ホウレンソウ, spinach, hourensou, hourennsou'),
(	28	,	6	,	2	,	'GODほうれん草1K'	,	500	,	''	,	''	,	'5日以内', 'ほうれん草, ほうれんそう, ホウレンソウ, spinach, hourensou, hourennsou'),
(	29	,	7	,	2	,	'GOD大根1/4個'	,	80	,	''	,	''	,	'5日以内', '大根, だいこん, ダイコン, radish, daikon, daikonn'),
(	30	,	7	,	2	,	'GOD大根1/2個'	,	100	,	''	,	''	,	'5日以内', '大根, だいこん, ダイコン, radish, daikon, daikonn'),
(	31	,	7	,	2	,	'GOD大根1個'	,	150	,	''	,	''	,	'5日以内', '大根, だいこん, ダイコン, radish, daikon, daikonn'),
(	32	,	7	,	2	,	'GOD大根1kg'	,	150	,	''	,	''	,	'5日以内', '大根, だいこん, ダイコン, radish, daikon, daikonn'),
(	33	,	3	,	2	,	'GODトマト1/2個'	,	60	,	''	,	''	,	'5日以内', 'とまと, トマト, tomato,'),
(	34	,	3	,	2	,	'GODトマト1個'	,	80	,	''	,	''	,	'5日以内', 'とまと, トマト, tomato,'),
(	35	,	3	,	2	,	'GODトマト3個'	,	240	,	''	,	''	,	'5日以内', 'とまと, トマト, tomato,'),
(	36	,	3	,	2	,	'GODトマト1kg'	,	400	,	''	,	''	,	'5日以内', 'とまと, トマト, tomato,'),
(	37	,	2	,	2	,	'GOD人参1/2個'	,	40	,	''	,	''	,	'5日以内', '人参, にんじん, ニンジン, carrot, ninzin, ninjin, ninnzinn, ninnjinn'),
(	38	,	2	,	2	,	'GOD人参1個'	,	60	,	''	,	''	,	'5日以内', '人参, にんじん, ニンジン, carrot, ninzin, ninjin, ninnzinn, ninnjinn'),
(	39	,	2	,	2	,	'GOD人参3個'	,	180	,	''	,	''	,	'5日以内', '人参, にんじん, ニンジン, carrot, ninzin, ninjin, ninnzinn, ninnjinn'),
(	40	,	2	,	2	,	'GOD人参1kg'	,	300	,	''	,	''	,	'5日以内', '人参, にんじん, ニンジン, carrot, ninzin, ninjin, ninnzinn, ninnjinn')


--@block
INSERT INTO api.category (id,name,image) VALUES
(	1	,	'キャベツ'	,	'/categoryImages/キャベツ.jpg'),
(	2	,	'人参'	,	'/categoryImages/人参.jpg'),
(	3	,	'トマト'	,	'/categoryImages/トマト.jpg'),
(	4	,	'かぼちゃ'	,	'/categoryImages/かぼちゃ.jpg'),
(	5	,	'なす'	,	'/categoryImages/なす.jpg'),
(	6	,	'チンゲン菜'	,	'/categoryImages/チンゲン菜.jpg'),
(	7	,	'大根'	,	'/categoryImages/大根.jpg'),
(	8	,	'じゃがいも'	,	'/categoryImages/じゃがいも.jpg')

--@block
-- users情報追加
INSERT INTO api.users (id,name,email,password,prefecture,city,address,zipcode) VALUES 
(1,'田中角栄','kakuei@example.com','kakuei','新潟県','柏崎市','54-2','')


--@block
INSERT INTO api.cartitems (id,user_id,item_id,quantity) VALUES
(1,1,1,0),
(2,1,8,0),
(3,1,16,0)
-- (4,2,16,0),
-- (5,3,16,0)

-- --@block
-- -- cart情報追加
-- 一旦中止
-- INSERT INTO api.cart (id,user_id) VALUES
-- (	1	,	1)

--@block
INSERT INTO api.sales (id,user_id,item_id,farmer_id,quantity) VALUES
(1,1,1,1,1),
(2,1,2,2,1)
