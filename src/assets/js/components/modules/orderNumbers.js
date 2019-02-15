class Order {
  constructor(vet, type, orderWords) {
    this.vet = vet;
    this.type = type;
    this.orderWords = orderWords;
    this.setup();
    return this.vet;
  }

  setup() {
    this.chooseOrder();
  }

  chooseOrder() {
    if (this.orderWords === undefined) {
      if (this.type === 'crescent') { this.orderCrescent(); } else if (this.type === 'descreasing') { this.orderDescreasing(); }
    } else if (this.orderWords !== undefined) {
      this.organizerWords();
    }
  }

  organizerWords() {
    console.log(this.type);
  }

  orderCrescent() {
    for (let i = 0; i < this.vet.length; i += 1) {
      for (let j = 0; j < this.vet.length; j += 1) {
        if (this.vet[i] < this.vet[j]) {
          const aux = this.vet[i];
          this.vet[i] = this.vet[j];
          this.vet[j] = aux;
        }
      }
    }
  }


  orderDescreasing() {
    for (let i = 0; i < this.vet.length; i += 1) {
      for (let j = 0; j < this.vet.length; j += 1) {
        if (this.vet[i] > this.vet[j]) {
          const aux = this.vet[j];
          this.vet[j] = this.vet[i];
          this.vet[i] = aux;
        }
      }
    }
  }
}

export default{
  create(vet, type, orderWords) {
    return new Order(vet, type, orderWords);
  },
};

export const Class = Order;
