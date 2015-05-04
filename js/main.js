var stepInfo_china = {
    step01: {
        name: 'register_business',
		stepNumber_arr: ["1.Get a name and an agreement to operate","2.Apply for business license and register for tax","3. Make a company seal","4. Apply for the authorization to print financial invoice and Purchase uniform invoices","5.File for employpee recruitment and register for social insurance payment"],        
		details_arr: ["The applicant picks up the application for company name pre-approval from the local Administration of Industry and Commerce (AIC), or otherwise, downloads the form from AIC’s Web site. It will be approved or rejected on the spot.","In this stage, the applicant shall apply for registration certification 'business license of enterprise legal person' with SAIC,the organization code certificate issued by the Quality and Technology Supervision Bureau and registration for both state and local tax with the tax bureau.","The applicant needs to firstly obtain the approval to make a company seal from the police department, and then designate a company possessing a Shanghai Special Industry Permit (company seal carving) to make a company seal.","After registering for state or local taxes and obtaining the tax registration certificate, the company must apply separately to the relevant authorities for approval to purchase and issue financial invoices/receipts,andobtain and submit an application form to purchase uniform invoices.","Within 30 days of recruiting employees, a new company must register with the local career service center, sponsored by the local government, and meanwhile, register for the payment of employee social insurance with the local social insurance office by submitting a completed social insurance registration form and other documents."],
        story_arr:["It’s extremely frustrating. I applied nine times on my local AIC’s website in Suzhou and everything it said ‘name already exists’. I called to ask if I could go there in person to check, they said no.You have to wait two days between applications so it took me six whole days to get a name! My brain juice is completely dry after coming up with nine names! The new online application system is not at all convenient.","quote2","quote3","quote4","quote5"],        
        day:[1,12,16,27,29],
        cost:[0,0,300,402,402]
    },
    step02: {
        name: 'Deal with construction permits',
		stepNumber_arr:["1.Request and obtain an environmental evaluation","2.Hire an authorized supervision agency","3. Request and obtain building permit","4. Receive all forms of inspection and obtain certification","5.Receive Environmental Protection inspection of the completed construction","6.Receive water and sewage inspection, and get water connection"],
	   	details_arr: ["In the case considered here, BuildCo must submit an environmental impact assessment. The following documents are required for application:application form for environmental impact assessment; business license;filing opinion and statement of situation,topographical map,Ichonographical map and etc.","BuildCo must hire a supervision agency to supervise and ensure the quality and safety of the construction.There is no uniform price for hiring a supervisor. The cost should be calculated as designing step, building and repairing step.","To request a building permit, BuildCo must file the following documents: application form for building construction permit;IC Card of Shanghai Construction Project;Land use permit for construction purpose or title certificates of land or property;Planning permit for the construction project and etc. The BuildCo must request inspections from fire department,'Four-Party',the Shanghai Bureau of Planning Land and Resources, and reuqest opinion on whether construction project is lightning-proof","The agency in charge of the inspection is the Environmental Protection Department","BuildCo must first apply for a water connection inquiry from the Municipal Water Bureau. Afterwards, BuildCo may apply for the water connection.Upon receiving the water supply application the water service crew conducts on-site surveys. After completing the inspection and trial operation, the bureau will examine the results of the facility and grant approval."],
	   story_arr:["","","","","",""],
	   day:[30,87,140,195,225,274],
	   cost:[0,156021,156021,157272,157272,157272]
    },
    step03: {
    	name: 'Get Electricity',
		stepNumber_arr: ["1.Apply with state-owned electric power company wait for power supply plan and external site inspection","2.Submit estimate payment and get project design plans","3.Purchase material and conduct installation","4.Submit report and wait for final external inspection","5. Receive installation of meter and connection to grid"],
        details_arr: ["Documents to be submitted along with application - One copy of each business license, tax registration certificate and organizational code registration certificate, Clearance certificate from Planning Authority.","Costs include - cable-laying work: 3-phase and 5-level Y, voltage 220/380V, 140 kVA, normally need 4×70+1×35 bus, YJV200 Model armored installation.","Materials to be purchased by customer include Transformer, high-voltage switch cabinet, low-voltage switch cabinet, wires, cable and other accessories.	Shanghai Municipal Electric Power Company staff provides internal wiring inspection and inspection of external installation.","Shanghai Municipal Electric Power Company provides meter installation and connection to grid.",],
        story_arr:["","","","",""],
        day:[60,74,124,138,141],
        cost:[0,3600,192700,1927000,1927000]
	},

    step04: {
		name: 'Register Property',
        stepNumber_arr: ["1.Parties enter into contract and pay tax","2.Parties file the application at the Real Estate Registry","3. Parties pay registration fee","4. Parties pick up new title certificate"],
        details_arr: ["The parties negotiate and sign a sale and purchase contract relating to the transfer of property.Deed tax: 3% of property value to be paid by the buyer Stamp duty: 0.05％ of property value to be paid by buyer and seller separately (total 0.1%)","Private ownership of land is not permitted in China; all land is subject to either State ownership or collective ownership. However, a private party is entitled to obtain the right to use the land.","The registration fee is decided by piece, not value of the property. The transaction handling fee of 0.5% of the transaction price shall by paid by the buyer, together with registration fees.	","After paying the registration fee, along with the receipt, the buyer obtains the new Real Estate Title Certificate."],
        story_arr:["quote1","quote2","quote3","quote4"],
        day:[0,27,28,29],
        cost:[0,0,550,550]
    }
};

var stepInfo_us = {
    step01: {
        name: 'register business',
        stepNumber_arr: ["1.Get a name and an agreement to operate","2.Register to pay federal and state tax","3. Register as an employer","4. Notify the public"],
        details_arr: ["The company founders may reserve the name of the company with the New York State Department of State Division of Corporations prior to filing the company's articles of organization.The company name must contain the words ", "Limited Liability Company,L.L.C., or LLC.","Apply for federal identification number (EIN) for tax and employer purposes,and register to collect state sales tax ","egister as an employer with the Unemployment Insurance Division at the State Labor Department and arrange for workers' compensation and disability insurance","Arrange for publication and submit certificate and affidavits of publication New York State Department of State, Division of Corporations"],
        story_arr:["","","",""],
        day:[1,3,5,6],
        cost:[275,275,275,475]
    },
    step02: {
	   name:'Deal with construction permits',
	   stepNumber_arr:["1.Request and obtain an environmental evaluation","2.Hire an authorized supervision agency","3. Request and obtain building permit","4. Receive all forms of inspection and obtain certification","5.Receive Environmental Protection inspection of the completed construction","6.Receive water and sewage inspection, and get water connection"],
	   details_arr: ["In the case considered here, BuildCo must submit an environmental impact assessment. The following documents are required for application:application form for environmental impact assessment; business license;filing opinion and statement of situation,topographical map,Ichonographical map and etc.","BuildCo must hire a supervision agency to supervise and ensure the quality and safety of the construction.There is no uniform price for hiring a supervisor. The cost should be calculated as designing step, building and repairing step.","To request a building permit, BuildCo must file the following documents: application form for building construction permit;IC Card of Shanghai Construction Project;Land use permit for construction purpose or title certificates of land or property;Planning permit for the construction project and etc.	The BuildCo must request inspections from fire department,'Four-Party',the Shanghai Bureau of Planning Land and Resources, and reuqest opinion on whether construction project is lightning-proof","The agency in charge of the inspection is the Environmental Protection Department","BuildCo must first apply for a water connection inquiry from the Municipal Water Bureau. Afterwards, BuildCo may apply for the water connection.Upon receiving the water supply application the water service crew conducts on-site surveys. After completing the inspection and trial operation, the bureau will examine the results of the facility and grant approval."],
	   story_arr:["","","","","",""],
	   day:[30,87,140,195,225,274],
	   cost:[0,156021,156021,157272,157272,157272]
    },
    step03: {
		name: 'Get Electricity',
        stepNumber_arr: ["1.Electrician files contractor work request","2.Electrician submits final checklist","3.Electrician receives inspection from NY Buildings Dept.","4.Customer requests meter installation"],
        details_arr: ["Electrician files contractor work request with Con Edison (Coned) and receives service layout from them","Electrician submits final checklist to Coned and security deposit (online), requests and receives external works from Coned","The NY Building Dept Electric division inspector does the internal and external wiring inspection once all wiring and connections are final.","The electrician contacts the utility to inform them that the certificate of completion has been obtained, gives them the Dept of Buildings Control Number, and requests the utility to turn electricity on."],
 		story_arr:["","","",""],
 		day:[16,46,52,59],
        cost:[7500,7500,7880,7880]
    },
    step04: {
        name: 'Register Property',
        stepNumber_arr: ["1.Obtain a title report","2.Conduct an environmental review","3. The buyer obtains and fills the forms needed for the transfer","4. The title is recorded with the County Clerk"],
        details_arr: ["A title report is obtained from one of many competing private companies, regulated by the state.", "The environmental review is typically conducted by a private firm specializing in the field. It is not technically mandatory, but a prudent investor will routinely require an environmental review and no bank would ever advance a commercial mortgage without conducting an environmental review.","All NYC transfers should be done using ACRIS system. It generates all of the required transfer tax forms, i.e. NYS Transfer Tax Form TP-584 regarding real estate transfer tax, and the NYS Real Property Transfer Report (Equalization) Form RP-5217, as well as necessary documents as smoke detector's affidavit, customer registration, etc.","The transfer deed (together with the applicable tax forms and payment) is then presented to the applicable public official, e.g. county clerk, for recordation in the public records of the jurisdiction."],
		story_arr:["","","",""],
		day:[10,10,11,12],
        cost:[9500,9500,9500,9500]
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

//An Extremely ugly and inefficient way to make the stars turn red on click 

$('#star1').on('click', function(){

	$('#path1_').attr('fill',"#ec3b45");
	$('#path2_').attr('fill',"none");
	$('#path3_').attr('fill',"none");
	$('#path4_').attr('fill',"none");
});
$('#star2').on('click', function(){

	$('#path2_').attr('fill',"#ec3b45");
	$('#path1_').attr('fill',"none");
	$('#path3_').attr('fill',"none");
	$('#path4_').attr('fill',"none");

});
$('#star3').on('click', function(){

	$('#path3_').attr('fill',"#ec3b45");
	$('#path2_').attr('fill',"none");
	$('#path1_').attr('fill',"none");
	$('#path4_').attr('fill',"none");
});

$('#star4').on('click', function(){

	$('#path4_').attr('fill',"#ec3b45");
	$('#path2_').attr('fill',"none");
	$('#path3_').attr('fill',"none");
	$('#path1_').attr('fill',"none");
});

//The following part deals with progress bar update 

$('.procedure').on('click', function(){
	
	//var svg_id = $(this).attr('data-which');
	// get the element of svg
    //var elem_svg = document.getElementById(svg_id);
	//$(elem_svg path fill).
	// document.getElementById("path1_").fill = "red";
	// $('#path2_').attr('fill',"#ec3b45");
	// $('#path3_').attr('fill',"#ec3b45");
	// $('#path4_').attr('fill',"#ec3b45");
var progressBar = setInterval(function(){

	document.getElementById("redlineChina").style.width = "100px";
	setInterval(function(){
		document.getElementById("redlineChina").style.width = "200px";
			setInterval(function(){
				document.getElementById("redlineChina").style.width = "400px";
					setInterval(function(){
						document.getElementById("redlineChina").style.width = "500px";},1000)
			},1000)
		},1000)
	},1000)



//The following part deals with content update
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
	},1000)

	
})



