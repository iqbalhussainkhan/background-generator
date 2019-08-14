

const check = (arr,num) => {

	for(let i = 0; i<arr.length-1; i++){
		for(item of arr){
			if(item != arr[i]){
				if(arr[i] + item == num){
					return newArr = [arr[i],item];
				}
			}
		}
	}
	return 'not numbers not matched';
}

let result = check([19,21,100,500,900],1000);
console.log(result);