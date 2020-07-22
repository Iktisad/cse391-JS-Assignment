document.querySelector('.button-container').addEventListener('click',(e)=>{
	const btnIds = ['clear','capital', 'sort', 'reverse', 'strip','add','shuffle'] ;

	if (btnIds.includes(e.target.id)) {
		let textarea= document.getElementById("textarea");
		if ( btnIds[0] == e.target.id ) {
			
			textarea.value = textarea.value.replace(textarea.value, "");

		}
		else if ( btnIds[1] == e.target.id ) {
			
			textarea.value = textarea.value.toUpperCase();

		}
		else if ( btnIds[2] == e.target.id ) {
			var arr=textarea.value.split('\n').map(e => e.trim()).filter(e => e);
			arr.sort();
			textarea.value = arr.join("\n\n");
			console.log(arr);

		}
		else if(btnIds[3]==e.target.id){
			var arr=textarea.value.split('\n').map(e => e.trim()).filter(e => e);
			textarea.value=arr.reverse().join("\n\n");
		}

		else if(btnIds[4]==e.target.id){
		var stringArray = textarea.value.split('\n');

		//console.log(stringArray);
        var temp = [""];
        var x = 0;

        for (var i = 0; i < stringArray.length; i++) {
	        if (stringArray[i].trim() != "") {
		        temp[x] = stringArray[i];
		        x++;
	        }
        }

     
        temp = temp.join('\n');
        textarea.value = temp;
      }

      else if(btnIds[5]==e.target.id){

      	var stringArray = textarea.value.split('\n');

		//console.log(stringArray);
        var temp = [""];
        var x = 0;
        let newPos,trimmed;

        for (var i = 0; i < stringArray.length; i++) {
	        if (stringArray[i].trim() != "") {

		        temp[x] = stringArray[i];
		        num=x+1;
		        temp[x]=(x+1)+"."+temp[x];
		        x++;
	        }
        }

     
        temp = temp.join('\n');
        textarea.value = temp;
        const btnDisable = document.getElementById('add');
        btnDisable.disabled = true;
      }

      else if(btnIds[6]==e.target.id){

      	var stringArray = textarea.value.split('\n');

		//console.log(stringArray);
        var temp = [""];
        var x = 0;

        for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i].trim() != "") {
        temp[x] = stringArray[i];
        x++;
        }
        }
        //console.log(temp.length);

     for(var i=temp.length-1;i>0;i--){
         newPos=Math.floor(Math.random()*(i+1));
             trimmed=temp[i];
             temp[i]=temp[newPos];
             temp[newPos]=trimmed;
        
     }

      temp = temp.join('\n');
        textarea.value = temp;

//console.log(temp);
  
     
      }
     
		}

});
		

