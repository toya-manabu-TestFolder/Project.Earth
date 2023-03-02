const purchaseConfirmed = () => {
  return (
    <>
      <div>
        {/* 左カラム */}
        <div>
          {/* お届け先情報 */}
          <div>
            <h2>お届け先情報</h2>
            <ul>
              <li>お客様氏名:</li>
              <li>郵便番号:</li>
              <li>住所:</li>
            </ul>
          </div>
          {/* 支払い方法 */}
          <div>
            <h2>お支払方法</h2>
          </div>
        </div>
        {/* 右カラム */}
        <div>
          {/* 送料/お届け期間/小計 */}
          <div>
            <h2>注文内容</h2>
            <ul>
              <li>商品の小計</li>
              <li>配送料</li>
            </ul>
            <h2>ご請求額:</h2>
          </div>
          {/* 注文確定ボタン */}
          <div>
            <button>注文を確定する</button>
          </div>
        </div>
      </div>
      {/* 注文商品一覧 */}
      <div></div>
    </>
  );
};

export default purchaseConfirmed;
