console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;

var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg'
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg'
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg'
    },
    orange: {
      icecream: 'img/OrangeIceCream.jpg',
      cake: 'img/OrangeCake.jpg',
      pie: 'img/OrangePie.jpg'
    },
    banana: {
      icecream: 'img/BananaIceCream.jpeg',
      cake: 'img/BananaCake.jpg',
      pie: 'img/BananaPie.jpg'
    }
  }
};

var ingredients = {
  apple:  {
    buttonDiv: document.querySelector('.Fruit--apple'),
    name: "apple"
  },
  banana: {
    buttonDiv: document.querySelector('.Fruit--banana'),
    name: "banana"
  },
  orange: {
    buttonDiv: document.querySelector('.Fruit--orange'),
    name: "orange"
  },
  cake: {
    buttonDiv: document.querySelector('.Dessert--cake'),
    name: "cake"
  },
  pie: {
    buttonDiv: document.querySelector('.Dessert--pie'),
    name: "pie"
  },
  icecream: {
    buttonDiv: document.querySelector('.Dessert--icecream'),
    name: "icecream"
  }
};

var fruitholder = document.querySelector('.Holder--fruit');
var dessertholder = document.querySelector('.Holder--dessert');
var resultholder = document.querySelector('.Holder--result');
var reset = document.querySelector('.Reset');

var currentButton, currentName;
for (var i in ingredients) {
    pickDessert(ingredients[i]);
};

function pickDessert(ingredient) {
  ingredient.buttonDiv.addEventListener('click', function(e){
    currentButton = ingredient.buttonDiv;
    currentName = ingredient.name;
    if (e.target.classList.contains('Fruit')) {
      currentFruit = currentName;
      fruitholder.innerHTML = "<img src='" + images.fruits[currentFruit] + "'>";
    } else {
      currentDessert = currentName;
      dessertholder.innerHTML = "<img src='" + images.desserts[currentDessert] + "'>";
    };
    if (currentFruit != null && currentDessert != null) {
      resultholder.innerHTML = "<img src='" + images.mixes[currentFruit][currentDessert] + "'>";
    }
  })
}

reset.addEventListener('click', function(){
  fruitholder.innerHTML = "";
  dessertholder.innerHTML = "";
  resultholder.innerHTML = "";
  currentFruit = null;
  currentDessert = null;
})
