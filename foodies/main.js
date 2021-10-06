// active navbar

let nav = document.querySelector(".navigate-wrap");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}



// counter section

document.addEventListener("DOMContentLoaded", () => {
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increment = end > start ? 1 : -1,
        step = Math.abs (Math.floor(duration / range)),
        timer= setInterval(() =>{
            current += increment;
            obj.textContent = current;
            if(current==end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1" , 0, 1287,3000);
    counter("count2" , 120, 3280,4000);
    counter("count3" , 135, 4521,5000);
    counter("count4" , 205, 2341,6000);

});