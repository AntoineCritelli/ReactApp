// TODO better way to handle datas


class Products {

    constructor() {
        this.products = [
            {
                "id": 1,
                "type": "pants",
                "name": "Pantalon",
                "prix": 39.99,
                "image1": "Pants1.jpg",
                "image2": "Pants2.jpg"
            },
            {
                "id": 2,
                "type": "pants",
                "name": "Pantalon type 1",
                "prix": 19.99,
                "image1": "Pants1.jpg",
                "image2": "Pants2.jpg"
            },
            {
                "id": 3,
                "type": "pants",
                "name": "Pantalon type 2",
                "prix": 29.99,
                "image1": "Pants1.jpg",
                "image2": "Pants2.jpg"
            },
            {
                "id": 4,
                "type": "pants",
                "name": "Pantalon type 3",
                "prix": 89.99,
                "image1": "Pants1.jpg",
                "image2": "Pants2.jpg"
            },
            {
                "id": 5,
                "type": "pants",
                "name": "Pantalon type 4",
                "prix": 129.99,
                "image1": "Pants1.jpg",
                "image2": "Pants2.jpg"
            },
            {
                "id": 6,
                "type": "pants",
                "name": "Pantalon type 5",
                "prix": 139.99,
                "image1": "Pants1.jpg",
                "image2": "Pants2.jpg"
            },
            {"id": 7, "type": "shirt", "name": "Chemise", "prix": 39.99, "image1": "Shirt1.jpg", "image2": "Shirt2.jpg"},
            {
                "id": 8,
                "type": "shirt",
                "name": "Chemise type 1",
                "prix": 19.99,
                "image1": "Shirt1.jpg",
                "image2": "Shirt2.jpg"
            },
            {
                "id": 9,
                "type": "shirt",
                "name": "Chemise type 2",
                "prix": 29.99,
                "image1": "Shirt1.jpg",
                "image2": "Shirt2.jpg"
            },
            {
                "id": 10,
                "type": "shirt",
                "name": "Chemise type 3",
                "prix": 89.99,
                "image1": "Shirt1.jpg",
                "image2": "Shirt2.jpg"
            },
            {
                "id": 11,
                "type": "shirt",
                "name": "Chemise type 4",
                "prix": 129.99,
                "image1": "Shirt1.jpg",
                "image2": "Shirt2.jpg"
            },
            {
                "id": 12,
                "type": "shirt",
                "name": "Chemise type 5",
                "prix": 139.99,
                "image1": "Shirt1.jpg",
                "image2": "Shirt2.jpg"
            },
            {
                "id": 13,
                "type": "sportShirt",
                "name": "T-shirt de sport",
                "prix": 39.99,
                "image1": "SportShirt1.jpg",
                "image2": "SportShirt2.jpg"
            },
            {
                "id": 14,
                "type": "sportShirt",
                "name": "T-shirt de sport type 1",
                "prix": 19.99,
                "image1": "SportShirt1.jpg",
                "image2": "SportShirt2.jpg"
            },
            {
                "id": 15,
                "type": "sportShirt",
                "name": "T-shirt de sport type 2",
                "prix": 29.99,
                "image1": "SportShirt1.jpg",
                "image2": "SportShirt2.jpg"
            },
            {
                "id": 16,
                "type": "sportShirt",
                "name": "T-shirt de sport type 3",
                "prix": 89.99,
                "image1": "SportShirt1.jpg",
                "image2": "SportShirt2.jpg"
            },
            {
                "id": 17,
                "type": "sportShirt",
                "name": "T-shirt de sport type 4",
                "prix": 129.99,
                "image1": "SportShirt1.jpg",
                "image2": "SportShirt2.jpg"
            },
            {
                "id": 18,
                "type": "sportShirt",
                "name": "T-shirt de sport type 5",
                "prix": 139.99,
                "image1": "SportShirt1.jpg",
                "image2": "SportShirt2.jpg"
            },
            {
                "id": 19,
                "type": "sportShort",
                "name": "short de sport",
                "prix": 39.99,
                "image1": "SportShort1.jpg",
                "image2": "SportShort2.jpg"
            },
            {
                "id": 20,
                "type": "sportShort",
                "name": "short de sport type 1",
                "prix": 19.99,
                "image1": "SportShort1.jpg",
                "image2": "SportShort2.jpg"
            },
            {
                "id": 21,
                "type": "sportShort",
                "name": "short de sport type 2",
                "prix": 29.99,
                "image1": "SportShort1.jpg",
                "image2": "SportShort2.jpg"
            },
            {
                "id": 22,
                "type": "sportShort",
                "name": "short de sport type 3",
                "prix": 89.99,
                "image1": "SportShort1.jpg",
                "image2": "SportShort2.jpg"
            },
            {
                "id": 23,
                "type": "sportShort",
                "name": "short de sport type 4",
                "prix": 129.99,
                "image1": "SportShort1.jpg",
                "image2": "SportShort2.jpg"
            },
            {
                "id": 24,
                "type": "sportShort",
                "name": "short de sport type 5",
                "prix": 139.99,
                "image1": "SportShort1.jpg",
                "image2": "SportShort2.jpg"
            },
            {
                "id": 25,
                "type": "sportShoe",
                "name": "chaussure de sport",
                "prix": 39.99,
                "image1": "SportShoe1.jpg",
                "image2": "SportShoe2.jpg"
            },
            {
                "id": 26,
                "type": "sportShoe",
                "name": "chaussure de sport type 1",
                "prix": 19.99,
                "image1": "SportShoe1.jpg",
                "image2": "SportShoe2.jpg"
            },
            {
                "id": 27,
                "type": "sportShoe",
                "name": "chaussure de sport type 2",
                "prix": 29.99,
                "image1": "SportShoe1.jpg",
                "image2": "SportShoe2.jpg"
            },
            {
                "id": 28,
                "type": "sportShoe",
                "name": "chaussure de sport type 3",
                "prix": 89.99,
                "image1": "SportShoe1.jpg",
                "image2": "SportShoe2.jpg"
            },
            {
                "id": 29,
                "type": "sportShoe",
                "name": "chaussure de sport type 4",
                "prix": 129.99,
                "image1": "SportShoe1.jpg",
                "image2": "SportShoe2.jpg"
            },
            {
                "id": 30,
                "type": "sportShoe",
                "name": "chaussure de sport type 5",
                "prix": 139.99,
                "image1": "SportShoe1.jpg",
                "image2": "SportShoe2.jpg"
            }
        ]
    }

    getProduct = (producttype, productid) => {
        for (let i=0;i<this.products.length;i++)
            if (this.products[i].type === producttype && this.products[i].id === productid)
                return this.products[i];
        return null;
    }

    getProductsByType = (type) => {
        let res = []
        for (let i=0;i<this.products.length;i++)
            if (this.products[i].type === type)
                res.push(this.products[i]);
        return res;
    }

}

export default new Products();