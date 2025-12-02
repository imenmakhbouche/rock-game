let pick_section=document.getElementsByClassName("pick")[0]
let lobby_section=document.getElementsByClassName("lobby")[0]

let circle=document.getElementsByClassName("circle")


// Rules Modal
let rules_btn=document.getElementsByClassName("rules")[0]
let rules_modal=document.getElementsByClassName("rules_modal")[0]
let close_modal=document.getElementById("close_modal")
rules_btn.addEventListener("click", function(){
  rules_modal.style.left="0"
})
close_modal.addEventListener("click", function(){
  rules_modal.style.left="100%"
})




let your_pick=document.getElementById("your_pick")
let house_pick=document.getElementById("house_pick")
const randomPicks=["./images/icon-paper.svg","./images/icon-scissors.svg","./images/icon-rock.svg"]
let res=document.getElementsByClassName("res")[0]
let score=document.getElementById("score")
let my_pick_circle=document.getElementsByClassName("my_pick_circle")[0]

for (let i = 0; i < 3; i++) {
    circle[i].addEventListener("click", function() {
      var randomNumber=Math.floor(Math.random() * 3)
      house_pick.src=randomPicks[randomNumber]
      let house_pick_text=randomPicks[randomNumber]
      your_pick.src=randomPicks[i]
      let your_pick_text=randomPicks[i]
      
      if(house_pick_text===your_pick_text){
        res.textContent="DRAW";
      }
      else if ((your_pick_text===randomPicks[0])&&(house_pick_text===randomPicks[1])){
        res.textContent="YOU LOSE";
        score.textContent=Number(score.textContent)-1
      }
      else if ((your_pick_text===randomPicks[0])&&(house_pick_text===randomPicks[2])){
        res.textContent="YOU WIN";
        score.textContent=Number(score.textContent)+1
      }
      else if ((your_pick_text===randomPicks[1])&&(house_pick_text===randomPicks[0])){
        res.textContent="YOU WIN";
        score.textContent=Number(score.textContent)+1
      }
      else if ((your_pick_text===randomPicks[1])&&(house_pick_text===randomPicks[2])){
        res.textContent="YOU LOSE";
        score.textContent=Number(score.textContent)-1
      }
      else if ((your_pick_text===randomPicks[2])&&(house_pick_text===randomPicks[0])){
        res.textContent="YOU LOSE";
        score.textContent=Number(score.textContent)-1
      }
      else if ((your_pick_text===randomPicks[2])&&(house_pick_text===randomPicks[1])){
        res.textContent="YOU WIN";
        score.textContent=Number(score.textContent)+1
      }
      pick_section.style.display = "none";
      lobby_section.style.display = "flex";
    });
    
  }

// Play again button configuration
let play_again=document.getElementById("play_again")
play_again.addEventListener("click", function(){
  pick_section.style.display="flex";
  lobby_section.style.display="none";
})







