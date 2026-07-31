// Copy UPI ID
function copyUPI() {
    const upi = "aditikumari0365@okicici";

    navigator.clipboard.writeText(upi).then(() => {
        showToast("✅ UPI ID Copied Successfully");
    }).catch(() => {
        alert("UPI ID: " + upi);
    });
}

// Toast Message
function showToast(message) {

    let toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    },100);

    setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(()=>{
            toast.remove();
        },300);

    },2500);

}

// Fade Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{threshold:.15});

document.querySelectorAll(".box,.card,.hero").forEach(el=>{

observer.observe(el);

});

// Floating Effect

document.addEventListener("mousemove",(e)=>{

const hero=document.querySelector(".hero");

let x=(window.innerWidth/2-e.clientX)/40;

let y=(window.innerHeight/2-e.clientY)/40;

hero.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave",()=>{

document.querySelector(".hero").style.transform="rotateY(0deg) rotateX(0deg)";

});

// Glow Animation

setInterval(()=>{

document.querySelector(".donate").classList.toggle("pulse");

},1200);

// Hero Glow

setInterval(()=>{

document.querySelector(".hero").classList.toggle("activeHero");

},2500);
