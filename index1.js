function CheckStringAnagram(a,b){
    let len1=a.length;
    let len2=b.length;
    if(len1!==len2){
        console.log('the given string is invalid length')

    }
    let str1=a.split('').sort().join('');
    let str2=b.split('').sort().join('');
    if(str1===str2){
        console.log('the given string is anagram')
    }else{
        console.log('the given string is not angagram')
    }
}
CheckStringAnagram('wipro','rwipo')


function MaxElement(arr){
    let max = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=max){
            max=arr[i]
        }

    }
    console.log(max)
}
let arr=[1,2]
//console.log(max)
MaxElement(arr)