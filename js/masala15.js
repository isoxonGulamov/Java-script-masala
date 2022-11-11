let a = 70;
let b = 280;
let c = 100;
 
if(a >= b && a >= c){
  console.log(a)
}else if(a <= b && b >= c){
  console.log(b)
}else  if(c >= b && b <= c){
  console.log(c)
}

if(( b < a == c > a) || ( b > a == c < a)){
  console.log(a)
}else if((a > b == b > c) || ( b > a == c > b)){
  console.log(b) 
}else {
  console.log(c)
}