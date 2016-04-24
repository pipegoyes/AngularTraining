// some directives
// ng-show, ng-hide mit {{
// ng - repeat ng-repeat="product in store.products"

(function () {
	var inscrtion1 = new Inscription("pipe@gmail.com");
	var inscrtion2 = new Inscription("pipe@gmail.com");
	var allIncriptions = [inscrtion1, inscrtion2];

    var app = angular.module("mainModule", []);
    app.controller("RegisterController", function () {
        this.inscriptions = allIncriptions;
    });

    app.directive("registerForm", function(){
    	return {
    		restrict: "E",
    		templateUrl: "snippets/register-form.html",
    		replace: true,
    		controller: function(){
    			this.inscription = {};
    			this.addInscription = function(form){
    				this.inscription.createAt = new Date();
    				this.inscription.browserName = "Chrome";
    				allIncriptions.push(this.inscription);
    				this.inscription = {};
    				form.$setPrestine();
    			};
    		},
    		controllerAs: "registerFormCtrl",
    		scope: {
    			allIncriptions: "="
    		}
    	};
    })

})();
