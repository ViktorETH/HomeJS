let app = angular.module('app', []);

app.controller('ReviewController', function () {
    this.review = {};
    this.addReview = function (product) {
        this.review = {};
        this.review.date = new Date();
        product.reviews.push(this.review);
    };
});

app.controller('DescriptionController', function () {
    this.tab = 1;

    this.selectTab = function (tab) {
        this.tab = tab;
    };

    this.isSelected = function (tab) {
        return this.tab === tab;
    };
});

app.controller('ProductsController', function ($scope) {
    $scope.Myprice = "price";
});

app.controller('PageController', function ($scope) {
    $scope.layout = 'grid';
});

app.controller('StoreController', function () {
    this.products = [
        {
            photo: "http://i.piccy.info/i9/9bdf4fc0dcb120fa055a23b3acafa164/1526490314/8507/1244709/Chef11_240.jpg",
            name: "Napoleon",
            price: 5.30,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            reviews: [],
            canPurchase: true
        },
        {
            photo:"http://i.piccy.info/i9/3a754b59261e7c30e52d776f241e30e9/1526490639/8701/1244709/Freddyart_freddy_krueger_tux_1822_240.jpg",
            name: "Freddy",
            price: 2.00,
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum.",
            reviews: [],
            canPurchase: true
        },
        {
            photo: "http://i.piccy.info/i9/5af5af449af74997c5d3f200382adab1/1526488670/9610/1244709/hell_boy_tux_by_monkrymonkry_240.jpg",
            name: "HellBoy",
            price: 5.55,
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            reviews: [],
            canPurchase: true
        },
        {
            photo: "http://i.piccy.info/i9/d94c321d9c0c9455606385b780c87e7b/1526490890/12122/1244709/Tux_Avatar_3__240.jpg",
            name: "Templar",
            price: 8.30,
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            reviews: [],
            canPurchase: true
        },
        {
            photo: "http://i.piccy.info/i9/fe1eb19fce937da2c07c2d3fd133c2c5/1526490989/10004/1244709/Tux_Jack_Sparow_240.jpg",
            name: "Jack Sparow",
            price: 7.20,
            description: "Some text goes here.Some text goes here. Some text goes here",
            reviews: [],
            canPurchase: true
        },
        {
            photo: "http://i.piccy.info/i9/519669bfaf62d9147feac089279c5a9c/1526490798/7658/1244709/Tux_Avatar_2__240.jpg",
            name: "Matrix",
            price: 5.30,
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            reviews: [],
            canPurchase: true
        }
    ];
});