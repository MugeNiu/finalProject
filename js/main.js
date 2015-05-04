var stepInfo_china = {
    step01: {
        name: 'register_business',
        stepNumber_arr: ["1","2","3","4"],
        details_arr: ["a","b","c","d"],
        story_arr:["quote1","quote2","quote3","quote4"],
        day:[1,3,6,9],
        cost:[12,15,18,130]
    },
    step02: {
        name: 'Getting Electricity',
        stepNumber_arr: ["first small step in step 2","second small step in step 2","third small step in step 2","fourth small step in step 2"],
        details_arr: ["e","f","g","h"],
        story_arr:["quote1","quote2","quote3","quote4"],
        day:[1,3,6,9],
        cost:[12,15,18,130]
    },
    step03: {
        name: 'Registering Property',
        stepNumber_arr: ["","","",""],
        details_arr: ["","","",""],
        story_arr:["quote1","quote2","quote3","quote4"],
        day:[1,3,6,9],
        cost:[12,15,18,130]
	},
    step04: {
        name: 'Paying Taxes',
        stepNumber_arr: ["","","",""],
        details_arr: ["","","",""],
        story_arr:["quote1","quote2","quote3","quote4"],
        day:[1,3,6,9],
        cost:[12,15,18,130]
    }
};

var stepInfo_us = {
    step01: {
        name: 'register_business',
        stepNumber_arr: ["1","2","3","4","5"],
        details_arr: ["a","b","c","d","e"],
        story_arr:["quote1","quote2","quote3","quote4"],
        day:[1,3,6,9,14],
        cost:[12,15,18,130,150]
    },
    step02: {
        name: 'Getting Electricity',
		stepNumber_arr: ["first small step in step 3","second small step in step 3","third small step in step 3","fourth small step in step 3"],     
		details_arr: ["i","j","k","l"],
        story_arr:["quote1","quote2","quote3","quote4"],
        day:[1,3,6,9],
        cost:[12,15,18,130]
    },
    step03: {
        name: 'Registering Property',
        stepNumber_arr: ["","","",""],
        details_arr: ["","","",""],
 		story_arr:["quote1","quote2","quote3","quote4"],
 		day:[1,3,6,9],
        cost:[12,15,18,130]
    },
    step04: {
        name: 'Paying Taxes',
        stepNumber_arr: ["","","",""],
        details_arr: ["","","",""],
		story_arr:["quote1","quote2","quote3","quote4"],
		day:[1,3,6,9],
        cost:[12,15,18,130]
    }
};

// function showText(stepNumber_arr, details_arr, id1, id2){
// 	var len = stepNumber_arr.length;
// 	var elem_stepNumber = document.getElementById(id1);
// 	var elem_detail = document.getElementById(id2);
// 	var i;
// 	for(i = 0; i < len; i++){
// 		setTimeout($(elem_stepNumber).html(stepNumber_arr[i]), 3000);
// 		setTimeout($(elem_detail).html(details_arr[i]), 3000);
// 	}
// };



$('.procedure').on('click', function(){
	
	// var svg_id = $(this).attr('data-which');
	// //get the element of svg
	// var elem_svg = document.getElementById(svg_id);
	// $('.starchange').removeClass('active');
	// $(elem_svg).addClass('active');


	var stepNumber = $(this).attr('data-key');
	//for china part
	//extract related info regarding stepNumber
	var stepNumber_china = stepInfo_china[stepNumber].stepNumber_arr;
	var details_china = stepInfo_china[stepNumber].details_arr;
	var story_china = stepInfo_china[stepNumber].story_arr;
	var time_china = stepInfo_china[stepNumber].day;
	var cost_china = stepInfo_china[stepNumber].cost;

	var stepNumber_us = stepInfo_us[stepNumber].stepNumber_arr;
	var details_us = stepInfo_us[stepNumber].details_arr;
	var story_us = stepInfo_us[stepNumber].story_arr;
	var time_us = stepInfo_us[stepNumber].day;
	var cost_us = stepInfo_us[stepNumber].cost;

	//find the right location of div to update content
	var div_stepNumber_china = document.getElementById("stepName China");
	var div_detail_china = document.getElementById("details China");
	var div_day_china = document.getElementById("dayChina");
	var div_story_china= document.getElementById("story China");
	var div_cost_china = document.getElementById("RMB");

	var div_stepNumber_us = document.getElementById("stepName us");
	var div_detail_us = document.getElementById("details us");
	var div_story_us= document.getElementById("story US");
	var div_day_us = document.getElementById("dayUS");
	var div_cost_us = document.getElementById("dollar");


	//default to show the first small step
	$(div_stepNumber_china).html(stepNumber_china[0]);
	$(div_detail_china).html(details_china[0]);
	$(div_story_china).html(story_china[0]);
	$(div_day_china).html(time_china[0]);
	$(div_cost_china).html(cost_china[0]);

	$(div_stepNumber_us).html(stepNumber_us[0]);
	$(div_detail_us).html(details_us[0]);
	$(div_story_us).html(story_us[0]);
	$(div_day_us).html(time_us[0]);
	$(div_cost_us).html(cost_us[0]);

	var len = stepNumber_china.length;
	if(len < stepNumber_us.length){
		len = stepNumber_us.length;
	};

	var i = 1;
	var interval = setInterval(function(){
		if(i < stepNumber_china.length){
			$(div_stepNumber_china).html(stepNumber_china[i]);
		 	$(div_detail_china).html(details_china[i]);
		 	$(div_story_china).html(story_china[i]);
		 	$(div_cost_china).html(cost_china[i]);
		 	$(div_day_china).html(time_china[i]);
		}

		if(i < stepNumber_us.length){
		 	$(div_stepNumber_us).html(stepNumber_us[i]);
		 	$(div_detail_us).html(details_us[i]);
		 	$(div_story_us).html(story_us[i]);
		 	$(div_cost_us).html(cost_us[i]);
		 	$(div_day_us).html(time_us[i]);
		}

		i++;

		if(i >= len){
			clearInterval(interval);
		}

	console.log("len="+len);
	console.log(i);
	},1000)

	
})



