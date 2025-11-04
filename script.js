const sidebarBtns = document.querySelectorAll('.openSideBar');
const sideBar = document.querySelector('.sideNav');
const closeBtn = document.querySelector('li.closeBtn');

function showSideBar() {
    sideBar.style.display = 'flex';
}
function closeSideBar() {
    sideBar.style.display = 'none';
}

sidebarBtns.forEach((sidebarBtn)=>sidebarBtn.onclick = showSideBar);
closeBtn.onclick = closeSideBar;


function animateScrollToView(elements, animateClassName, needSeperate){
        // Create the observer like the examples above 
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    if(needSeperate){
                        entry.target.style.animationDelay = `${index*0.5}s`;
                    }
                    // observer.unobserve(entry.target);
                    entry.target.classList.add(animateClassName);
                    return;
            }  
                entry.target.classList.remove(animateClassName);
            });
        });
        elements.forEach((element) => {
            observer.observe(element);
            
        });
}

let needSeperate = true;
const socialIcons = document.querySelectorAll('.social-icon');
const sideBarSocialIcons = document.querySelectorAll('.sideBarSocialIcon');
const texts = document.querySelectorAll('.text');
const projectBox = document.querySelectorAll('.projectBox');
document.addEventListener('DOMContentLoaded', 
        animateScrollToView(sideBarSocialIcons, 'iconAnimate', needSeperate),
        animateScrollToView(texts, 'text-transition', !needSeperate),
        animateScrollToView(projectBox, 'projectBox-transition', !needSeperate)
);

//copy email addr to clipboard 
const emailBtns = document.querySelectorAll('.emailBtn');
const confirmCopyBox = document.querySelector('.confirmCopyBox');
emailBtns.forEach((emailBtn)=>{
    emailBtn.addEventListener("click", () => {
        copyToClipboard("rilakkuma71945@gmail.com");
        confirmCopyBox.classList.remove('confirmCopyBoxFade');
    });
    }
);
async function copyToClipboard(text){
    try {
        await navigator.clipboard.writeText(text);
        let posY = document.documentElement.scrollTop || document.body.parentElement.scrollTop;
        let posX = document.documentElement.offsetWidth;
        confirmCopyBox.style.top = `${posY + 20}px`;
        confirmCopyBox.style.left = `${posX/2}px`;
        confirmCopyBox.classList.add('confirmCopyBoxFade');
    } catch (err) {
        console.log('failed');
        alert.error('Failed to copy: ', err);
    }
}

const openResume = document.querySelector('.resumeBtn');
function openPDF() {
    window.open('https://Michelle0106.github.io/portfolio/myResume.pdf', '_blank');
}
openResume.onclick = openPDF;