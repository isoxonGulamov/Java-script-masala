let a = 110;
let b = 10;
let c = 150;
if(( b < a == c > a) || ( b > a == c < a)){
  console.log(a)
}else if((a > b == b > c) || ( b > a == c > b)){
  console.log(b) 
}else {
  console.log(c)
}