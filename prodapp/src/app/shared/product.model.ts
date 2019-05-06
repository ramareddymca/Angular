export class Product {

 constructor(
        public id: number,
        public name: string = '',
        public prodDesc: string = '',
        public rating: number = 0,
        public price: number = 0,
        public prodImg: string = '') { }
}