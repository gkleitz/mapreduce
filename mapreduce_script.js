var input = document.getElementById("myInput");
var output = document.getElementById("myOutput");
var button = document.getElementById("myButton");
button.addEventListener("click",mapReduce,false);

function map(someText)
{
	var outputArray=[];
	var tmpArr = someText.split("\n");
	for(i=0;i<tmpArr.length;i++)
	{
		tmpArr[i] = tmpArr[i].split(" ");
	}
	for(i=0;i<tmpArr.length;i++)
	{
		if(tmpArr[i]!="")
		{
			outputArray = outputArray.concat(tmpArr[i]);
		}
	}
	outputArray = outputArray.filter(String);
	for(i=0;i<outputArray.length;i++)
	{
		outputArray[i] = outputArray[i].toLowerCase();
	}
	outputArray.sort();
	
	return outputArray;
}

function reduce(someArray)
{
	var outputArray=[];
	var count=0;
	someArray.sort();
	for(i=0;i<someArray.length;i++)
	{
		if(outputArray.indexOf(someArray[i])>=0)
		{
			outputArray[(2*count)-1] = outputArray[(2*count)-1]+1;
		}
		else
		{
			outputArray.push(someArray[i]);
			outputArray.push(1);
			count++;
		}
	}
	return outputArray;
}

function mapReduce()
{
	inputvalue = input.value.replace(/,/g,'');
	output.value = reduce(map(inputvalue)).toString().replace(/,/g, "\n");
}



