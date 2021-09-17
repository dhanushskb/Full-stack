var country1="us"
var country2="IND"
var country3="ger"

var country= ["us","IND","ger"]
alert (country);

console.log (country[1])

var fruits=["mango","apple","banana"]
alert (fruits);

console.log(fruits[0])

fruits.push("jackfruits")
console.log(fruits)


fruits.push("fromo")
console.log(fruits)

fruits.push("kiwi")
console.log(fruits)

fruits.push("orange")
console.log(fruits)


fruits.splice(1,1)
console.log(fruits)

var s=fruits.slice()
console.log(s)


var mystring="javascript"
for (var i=0; i<mystring.length;i++)
{console.log(mystring[i])}

var arr=['A','B','C']
for(letters in arr)
{alert(letters)}


var arr=['j','h','k','g','r']
for(letters of arr)
{alert(letters)}
