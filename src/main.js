'use strict';

module.exports ={
aritGeo: (list) => {
	var i = 1;
	var isArit = true;
	var isGeo = true;
	var diff = list[1] - list[0];
	var rate = list[1] / list[0];
	var init = list[0];

	if(list == false || typeof list== 'boolean' || typeof list == 'number'){
			return 0;
	}else{
		while(isArit == true && list[i] != undefined){
			if(list[i]-init == diff){
				init = list[i];
				i++;
			}else{
				isArit = false;
				init = list[0]
				i = 1;
			}
		}
		 while(isGeo == true && list[i] != undefined){
			if(list[i]/init == rate){
				init = list[i]
			}else{
				isGeo = false;
			}
			i++
		}
	}
	if(isArit) {
		return "Arithmetic";
	} else if(isGeo) {
		return "Geometric";
	}else{
		return "-1";
	}
}
}
