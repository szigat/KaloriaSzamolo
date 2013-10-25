var Sex = {
	Man: 0,
	Woman: 1
}

var Acitivity = {
	Sendentary : 1.2,
	LightlyActive : 1.375,
	ModeratelyActive : 1.55,
	VeryActive : 1.7,
	ExtremlyActive : 1.9
}	

function Teszt()
{
	var sex = $("select[id*='flpSex']").val();
	var activity = $("select[id*='slctActivity']").val();
	
	var weight = $("input[id*='tbxWeight']").val();
	var age = $("input[id*='tbxAge']").val();
	var height = $("input[id*='tbxHeight']").val();
	
	var minimalCalory = CaloryCalculator.determineMinimalCalory(sex,weight,age,height);
	
	var optimalCalory = CaloryCalculator.determineOptimalCalory(activity,minimalCalory);
	
	var visibleValue = Math.round(optimalCalory);
	
	$("[id*='optimalCaloryResult']").text(visibleValue);
}

var CaloryCalculator = (function() {

	return {
	
		determineMinimalCalory : function(sex,weight,age,height){
			var calory = 0;
			
			if(sex == 0){
				calory = 66 + (13.735 * weight) + (4.961 * height) - (6.8 * age);
			}
			else{
				calory = 655 + (9.59 * weight) + (1.836 * height) - (4.7 * age);
			}
			
			return calory;
		},
		
		determineOptimalCalory : function(activity, minCalory){
			var calory = 0;
			
			calory = minCalory * activity;
			
			return calory;
		},
		
		determineBMINumber : function(weight, height){
			var result = 0;
			
			height = height/100;
			
			result = weight / (height*height);

			return result;
		},
		
		BMIStringResult:function(bmi)
        {
            var result = "";

            if (bmi < 18.5)
            {
                result = "Sovány";
            }
            else if(19<= bmi && bmi < 25)
            {
                result = "Normál testalkatú";
            }
            else if (25 <= bmi && bmi < 30)
            {
                result = "Túlsúlyos";
            }
            else
            {
                result = "Erősen túlsúlyos";
            }

            return result;
        }

	};

})();