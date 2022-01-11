console.log('hi')
// sum pair is zero
//array = [-5,-4,-2,0,2,4,6,8]
//output is  -4,4
/*
function getSumPairZero(array){
    for(let number of array){
        for (j=1;j<array.length;j++){
            if (number+array[j] === 0){
                return [number,array[j]];
            }

        }
    }
}
const ans = getSumPairZero( [-5,-4,-3,-2,0,2,4,6,8])
console.log(ans);


function getSumpairzero(array){
    for(let i of array){
        for(j=1;j<array.length;j++){
            if (i+array[j] ===0 ){
                return [i,array[j]];
            }
        }
    }
}
var d = getSumpairzero( [-5,-4,-2,0,2,4,6,8])
console.log(d)










var str = 'wipro'
var output = str.split('').reverse().join('')
console.log(output);

function twoSumPair(array){
    for (let number of array){
        for (j=1;j<array.length;j++){
            if (number+array[j] === 0){
                return [number,array[j]]
            }
        }
    }
}
var op = twoSumPair([1,2,4,-4,6,9])
console.log(op)

 let b=89
function poo(){
     var  b=88
    console.log(b)
}
poo()


function checkStringReverse(str){
    var op = str.split('').reverse().join('');
    console.log(op);
}

checkStringReverse('indian')

function stringIsAnagram(a,b){
    let len1=a.length;
    let len2=b.length;
    if (len1 !== len2){
        console.log('invalid length ')
        return
    }
    let str1=a.split('').sort().join('');
    let str2=b.split('').sort().join('');
    if (str1===str2){
        console.log('the given string is anagram')
    } else{
        console.log('check the string is properly entered')
    }
}

stringIsAnagram('wipro','powri')


function maxSubarray(nums){
    cursum=-Infinity;
    maxsum=-Infinity;
    for(let i=0;i<nums.length;i++){
        cursum=Math.max(0,cursum);
        cursum+=nums[i];
    maxsum=Math.max(maxsum,cursum)
    }
    console.log(maxsum)
}
maxSubarray([-2,1,-3,4,-1,2,1,-5,4])

function ReverseArray(arr){
    var a=arr.reverse().join('');
    console.log(a)
}



function rotateArray(arr,k){
    for(let i=0;i<k;i++){
        let temp=arr[0]
        for(let j=0;j<arr.length;j++){
            arr[j]=arr[j+1]
        }
        arr[arr.length-1]=temp
    }
    return arr;
}

let arr=[1,2,3,4,5,6]
k=2
console.log(rotateArray(arr,k))
*/

