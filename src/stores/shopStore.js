import { makeObservable, action, observable } from "mobx";

class ShopStore {
  initialGoodsList = require("./goodsList.json");
  goodsList = [];
  goodsListInCart = [];

  constructor() {
    makeObservable(this, {
      goodsList: observable,
      goodsListInCart: observable,

      decreaseGoodsById: action,
      increaseGoodsById: action,
      fetchGoods: action,
      fetchGoodsInCart: action,
    });
  }

  fetchGoods = () => {
    this.goodsList = this.initialGoodsList;
  };

  fetchGoodsInCart = () => {
    const goodsList = this.initialGoodsList;
    this.goodsListInCart = goodsList.filter((good) => {
      return good.countInCart > 0;
    });
  };

  decreaseGoodsById = (id) => {
    const goodIndex = this.goodsList.findIndex((good) => good.id === id);
    if (this.goodsList[goodIndex].countInCart === 0) {
      return;
    }

    this.goodsList[goodIndex].countInCart--;
    this.initialGoodsList = this.goodsList;
  };

  increaseGoodsById = (id) => {
    const goodIndex = this.goodsList.findIndex((good) => good.id === id);
    if (this.goodsList[goodIndex].countInCart === 99) {
      return;
    }

    this.goodsList[goodIndex].countInCart++;
    this.initialGoodsList = this.goodsList;
  };
}

export default new ShopStore();
