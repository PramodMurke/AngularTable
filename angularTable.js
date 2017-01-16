//array of object for printing data in table
var tableData=[{"name":"Pramod Murke","bday":"1993-06-09T09:05:05.035Z","salary":6000,"city":"sangli"},
		               {"name":"abcd efghi","bday":"1994-09-06T09:05:05.035Z","salary":8000,"city":"pune"},
		               {"name":"jklm nopq","bday":"1995-02-11T09:05:05.035Z","salary":10000,"city":"mumbai"},
		               {"name":"rst uvwxyz","bday":"1994-03-05T09:05:05.035Z","salary":12000,"city":"solapur"}];
		
//creating module of angular
		angular.module("tblDemo",[])
		//controller for table
		.controller("tblController",function($scope){
			//assing table data to controller table
			$scope.table=tableData;
			//set order false for ascending order
			$scope.order=false;
			//function for check on click it sort on ascending or descending order
			$scope.sortColumn=function(columnClicked)
			{	
				//check it previous column and clicked column is same or not and which order it column is sorted
				//if column is sorted then it reverse order sorted
				//else it sort ascending order clicked column
				($scope.sortColNm==columnClicked &&$scope.order==false)? $scope.order=true:$scope.order=false;//set sorting order
				$scope.sortColNm=columnClicked;//set sorting column
			};
			//search function for the search in only name and city column  
			$scope.search=function(table){
				//if search is not definded means no search or not typed any key in search box it return all
				if($scope.searchText==undefined)return true;
				//if any key typed in searchbox
				else{
					//to check search key is mach in table column if match it return true or false
					if(table.name.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1 || table.city.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1)
						return true;
				}
				return false;
			};
			//show arrow for sort type 
			 $scope.changeClass = function(columnName){
				 //for selected column it it show arrow as per sorting order
				    if ($scope.sortColNm == columnName)
				      {
				    	if($scope.order) return "arrow-down";
				    	else return "arrow-up";
				      }
				 //for other column it return null for nothing to print
				    else
				      return "";
			};
		});
