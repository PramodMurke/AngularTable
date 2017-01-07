//array of object for printing data
var tableData=[{"name":"Pramod Murke","bday":"1993-06-09T09:05:05.035Z","salary":6000,"city":"sangli"},
		               {"name":"abcd efghi","bday":"1994-09-06T09:05:05.035Z","salary":8000,"city":"pune"},
		               {"name":"jklm nopq","bday":"1995-02-11T09:05:05.035Z","salary":10000,"city":"mumbai"},
		               {"name":"rst uvwxyz","bday":"1994-03-05T09:05:05.035Z","salary":12000,"city":"solappur"}];
		
//creating module 
		angular.module("tblDemo",[])
		//controller 
		.controller("tblController",function($scope){
			$scope.table=tableData;
			$scope.order=false;
			//function for check on click it sort on ascending or descending order
			$scope.sortColumn=function(columnClicked)
			{	
				($scope.sortColNm==columnClicked &&$scope.order==false)? $scope.order=true:$scope.order=false;
				$scope.sortColNm=columnClicked;
			};
			//search function for the search in only name and city column  
			$scope.search=function(table){
				if($scope.searchText==undefined)return true;
				else{
					if(table.name.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1 || table.city.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1)
						return true;
				}
				return false;
			};
			//show arrow for sort type 
			 $scope.changeClass = function(columnName){
				    if ($scope.sortColNm == columnName)
				      {
				    	if($scope.order) return "arrow-down";
				    	else return "arrow-up";
				      }
				    else
				      return "";
			};
		});
