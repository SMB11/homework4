//2.create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height.  So if we call your function with triangleStars(4)
const star = function(val){
	if (val===0) {
		return '';
	}
	return "*" + star(val-1);
}
const space = function(n){
	if(n===0){
		return '';
	}

	return " " + space(n-1);
}
const starsAndspaces = function(st, sp, n){
	console.log(space(sp) + star(st+1));
	starsAndspaces(st-2,sp+1,n-1);
}
const triangleStars = function(n){
	starsAndspaces((n-1)*2, 0, n);
}
triangleStars(4);

//3.Use recursion to create a function called pow which takes two arguments, base and n.  It should than return the result of multiplying the base times itself n time (that is to say, return base to the power of n)

const pow = function(base,n){
	if(n !== 1 || n < 0){
		return base * pow(base, n - 1);
	}
	else {
		return base;
	}
}
pow(2,3);
//4. 
const reverse = function(string){
	const ind = function(string1,index){
		if(index === 0){
			return '';
		}
		return string1[index-1] + ind(string1,index-1)
	}
	return ind(string,string.length)
}
const MyString = reverse("abcd");
console.log(MyString); 
//5. Create a function called checkerboard using recursion which, given a size argument, will draw an n by n checkerboard on the screen.  Example: checkerboard(5)
const line = function(n,arg1,arg2){
  if(n===0){
    return '';
  }
  return arg1 +arg2 + line(n-2,arg1,arg2);
}
const height = function(dot,len){
  if(dot===0) {
   return '';
}
  console.log(line(len,"*"," "));
  console.log(line(len," ", "*"));
  return height(dot-2,len);
}
const checkerBoard = function(val){
  height(val,val);
}
checkerBoard(8);