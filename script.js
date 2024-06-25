let div=document.getElementById("result");
random=()=>{
  let index=Math.floor(Math.random()*3)
  if(index==0) return "Rock"
  else if(index==1) return "Paper"
  else return "Scissor"
}
checkResult=(user,computer)=>{
  if(user==computer)
  {
      div.innerText="\nTie";
  }
  else if(user=="Paper" && computer=="Rock")
  {
    div.innerText="\nYou Won!!!";
  }
  else if(user=="Scissor" && computer=="Paper")
  {
    div.innerText="\nYou Won!!!";
  }
  else if(user=="Rock" && computer=="Scissor")
  {
    div.innerText="\nYou Won!!!";
  }
  else
  {
    div.innerText="\nComputer Won!!!";
  }
}
check1=()=>{
  let user="Rock";
  let computer=random();
  document.getElementById("hands").innerText=`Your choice is ${user} and Computer choice is ${computer}.`
  checkResult(user,computer)
}
check2=()=>{
  let user="Paper";
  let computer=random();
  document.getElementById("hands").innerText=`Your choice is ${user} and Computer choice is ${computer}.`
  checkResult(user,computer)
}
check3=()=>{
  let user="Scissor";
  let computer=random();
  document.getElementById("hands").innerText=`Your choice is ${user} and Computer choice is ${computer}.`
  checkResult(user,computer)
}

reset=()=>{
  document.getElementById("hands").innerText="";
  div.innerText="\n Restart Game";
}