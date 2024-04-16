let stars= document.getElementsByClassName('one');
console.log(stars);
for(let star of stars){
star.addEventListener("click",greenMaker);
}
function greenMaker(range) {
    const stars = document.querySelectorAll('.star .one');
    for (let i = 0; i < stars.length; i++) {
        if(i<range){
            if(!stars[i].classList.contains("green")){
                stars[i].classList.add("green");
            }
            else{
                continue;
            }
        }

            if(stars[i].classList.contains("green") && i>=range){
                stars[i].classList.remove("green")
            }
        
    }
}
