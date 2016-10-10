app.controller('HomeControllers', ['$scope', function($scope) { 
 	$scope.titles = { 
                    index: 'Shonen Bros',  
                  }
  $scope.products = [ 
                      { 
                        name: 'Dragon Ball Vol 1', 
                        price: 19, 
                        pubdate: new Date('1985', '08', '10'), 
                        cover: 'http://vignette4.wikia.nocookie.net/dragonball/images/0/0d/DBallv1.jpg/revision/latest/scale-to-width-down/300?cb=20100715065659', 
                        likes: 0,
                        dislikes: 0
                      }, 
                      { 
                        name: 'Full Metal Alchemist Vol 1', 
                        price: 8, 
                        pubdate: new Date('2002', '01', '22'), 
                        cover: 'https://images-na.ssl-images-amazon.com/images/I/515NBxCfA3L._SX330_BO1,204,203,200_.jpg',
                        likes: 0,
                        dislikes: 0
                      },
    									{
                        name: 'One Piece',
                        price: 11,
                        pubdate: new Date('1999', '12', '24'),
                        cover: 'http://vignette2.wikia.nocookie.net/onepiece/images/0/0e/Volume_1.png/revision/latest?cb=20130115020528',
                        likes: 0,
                        dislikes: 0
                      },
    									
    									{
                        name: 'Hunter X Hunter',
                        price: 11,
                        pubdate: new Date('1998', '03', '03'),
                        cover: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Hunter_x_Hunter_cover_-_vol1.jpg',
                        likes: 0,
                        dislikes: 0
                      }
                    ];
  $scope.plusOne = function(index) { 
  										$scope.products[index].likes += 1; 
										};
  $scope.minusOne = function(index) { 
  										$scope.products[index].dislikes += 1; 
										};
}]);app.controller('HomeController', ['$scope', function($scope) {
	$scope.helloWorld = "Hello, AngularJS";
}]);
      