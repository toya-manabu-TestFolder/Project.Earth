import { render, screen } from "@testing-library/react";
import { TotalPlice } from "@/components/TotalPlice";

describe("購入者の情報と購入金額を表示する", () => {
  describe("debugの確認", () => {
    render(<TotalPlice />);

    screen.debug();
  });
  it.todo("正しい購入者情報を表示しているか");
  it.todo("正しい合計金額が表示されているか");
});
