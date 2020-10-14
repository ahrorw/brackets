module.exports = function check(str, bracketsConfig) {
  // your solution
  let opn=[];
  let cls=[];
  bracketsConfig.forEach((it)=> {
    opn.push(it[0]);  
    cls.push(it[1]);
  });
  let stk="";
 // console.log(str);
  for (let i=0;i<str.length;i++){
    

    if((cls.indexOf(str[i])!=-1)&&(cls.indexOf(str[i])==opn.indexOf(str[i]))){
    if ((opn.indexOf(str[i])==cls.indexOf(stk[0]))){
      
      if (stk.length==0){return false;}
      stk=stk.substring(1);
    }else{
      stk=str[i]+stk;
      
    }//console.log(stk); 
    continue;
    }

    if ((opn.indexOf(str[i])!=-1)){
      stk=str[i]+stk;
      continue;
    }
   // if((cls.indexOf(str[i])!=-1)){
    if (stk.length==0){return false;}
    if ((cls.indexOf(str[i])==opn.indexOf(stk[0]))){
      if (stk.length==0){return false;}
      stk=stk.substring(1);
      continue;
    } 
   // }
  }
  return stk.length==0;
}