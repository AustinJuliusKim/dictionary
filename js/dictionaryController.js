angular
	.module('dicionaryApp')
	.controller('DictionaryController', DictionaryController);

function DictionaryController(){
	var self = this;
	self.test = console.log("this is a test")

	var targetUrl = 'https://montanaflynn-dictionary.p.mashape.com/define?word='
	self.targetWord = 'irony'	
	var endpoint =targetUrl + self.targetWord;

	self.getJson = $http({
		method: 'GET',
		url: endpoint,
		headers: {
			"X-Mashape-Key": "",
			"Accept": "application/json'"
		}
	})
	.success(renderData)
	.error(errorMessage);

	function renderData(jsonWeGotBack) {
		self.data = jsonWeGotBack.definitions;
		console.log('success!');
	}

	function errorMessage() {
		console.log('something went wrong!');
	}

	self.getDefinition = function(value) {
		self.targetWord = value.toLowerCase();
		endpoint = targetUrl + self.targetWord;
		$http({
			method: 'Get',
			url: endpoint,
			headers: {
				"X-Mashape-Key": "",
				"Accept": "application/json"
			}
		})
		.success(renderData)
		.error(errorMessage);
	};
}