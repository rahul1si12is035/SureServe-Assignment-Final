function myFunction(){
				var event1 = new Date(document.getElementById("dateAdmission").value);
				var event2 = new Date(document.getElementById("dateDischarge").value);
				var claimId= document.getElementById("claim").value;
				var mediId= document.getElementById("mediassist").value;
				var wrong= document.getElementById("wrong");
				
				if(event1.valueOf() < event2.valueOf()) {
				  //console.log("date 2 is greater");
				  if(document.getElementById("dateAdmission").value) {
  				  if(claimId) {
  				    var myKeyVals = {claimNumber: claimId, date: event1.toISOString()}
  				    claimIDCall();
  				  }
  				  else if(mediId) {
  				    var myKeyVals = {maid: mediId, date: event1.toISOString()}
  				    mediIDCall();
  				  }
				  
				  }
				  else if(document.getElementById("dateDischarge").value) {
  				  if(claimId) {
  				    var myKeyVals = {claimNumber: claimId, date: event2.toISOString()}
  				    claimIDCall();
  				  }
  				  else if(mediId) {
  				    var myKeyVals = {maid: mediId, date: event2.toISOString()}
  				    mediIDCall();
  				  }
  				}
				}
				else {
				  wrong.textContent = "Date of Admission should not be less than Date of Discharge. Please enter Valid Dates";
				}
				
				
			  function claimIDCall() {
			    var saveData = $.ajax({
                  type: 'POST',
                  url: "https://www.medibuddy.in/WAPI//infiniti/track/ClaimWithClaimNumber.json",
                  data: myKeyVals,
                  dataType: "text",
                  success: function(resultData) {
					 var codes = jQuery.parseJSON(resultData);
					 console.log(codes);
					 document.getElementById("claim id").innerHTML = (codes.claimDetails["0"].claimDetails.claimId);
					 document.getElementById("claim amount").innerHTML = (codes.claimDetails["0"].claimDetails.clmAmount);
					 document.getElementById("hospital name").innerHTML = (codes.claimDetails["0"].claimDetails.hospitalName);
					 document.getElementById("beneficiary details").innerHTML = (codes.claimDetails["0"].beneficiaryDetails.benefName);
					 document.getElementById("claim status").innerHTML = (codes.claimDetails["0"].claimDetails.claimStatus);
                }
				  });
			    
			  }
			  function mediIDCall() {
			    var saveData = $.ajax({
                  type: 'POST',
                  url: "https://www.medibuddy.in/WAPI//infiniti/track/ClaimWithMAID.json",
                  data: myKeyVals,
                  dataType: "text",
                  success: function(resultData) {
        					 var codes = jQuery.parseJSON(resultData);
        					 console.log(codes);
        					 document.getElementById("claim id").innerHTML = (codes.claimDetails["0"].claimDetails.claimId);
        					 document.getElementById("claim amount").innerHTML = (codes.claimDetails["0"].claimDetails.clmAmount);
        					 document.getElementById("hospital name").innerHTML = (codes.claimDetails["0"].claimDetails.hospitalName);
        					 document.getElementById("beneficiary details").innerHTML = (codes.claimDetails["0"].beneficiaryDetails.benefName);
        					 document.getElementById("claim status").innerHTML = (codes.claimDetails["0"].claimDetails.claimStatus);
                }
				  });
			    
			  }
          
			}	