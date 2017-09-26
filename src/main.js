'use strict';

module.exports ={
	aritGeo: (list) => {

		var init = list[0];
		var i = 1;
		var isArit = true;
		var isGeo = true;
		var quot = list[1] - list[0];
		var rate = list[1] / list[0];

		//Checking for invalid and empty inputs
		if(list == false || typeof list == 'boolean' || typeof list == 'number'){
			return 0;
		}

		else{
			//Handling Arithmetic Progression
			while(isArit && list[i] != undefined){

				if(list[i]-init == quot){
					init = list[i];
					i++;
				}

				else{
					isArit = false;
					init = list[0]
					i = 1;
				}

			}
			//Handling Geometric Progression
			while(isGeo && list[i] != undefined){

				if(list[i]/init == rate){
					init = list[i]
				}

				else{
					isGeo = false;
				}

				i++;

			}

		}

		//Handling return values...
		//for Arithmetic Progression
		if(isArit) {
			return "Arithmetic";
		}
		//for Geometric Progression
		else if(isGeo) {
			return "Geometric";
		}
		//for non-Progressive inputs
		else{
			return "-1";
		}
	}
}
