
class UI{
    hidePreloader() {
        document.querySelector('.preloader').style.display="none";
    }
    showNav() {
        document.querySelector('.nav').classList.toggle('nav--show')
    }
    }
    
    
    eventListeners();
    
    function eventListeners() {
        const ui = new UI()
        window.addEventListener('load', () => ui.hidePreloader())
    
        document.querySelector('.navbtn').addEventListener('click', () =>
        ui.showNav())
    }
    
    document.querySelector('.video__switch').addEventListener('click',function(){
        const ui = new UI()
        ui.videoControls()
    })
    
    UI.prototype.videoControls = function(){
        let btn = document.querySelector('.video__switch-btn');
        if(!btn.classList.contains('btnSlide')){
            btn.classList.add('btnSlide')
            document.querySelector('.video__item').pause()
        }
        else{
            btn.classList.remove('btnSlide')
            document.querySelector('.video__item').play()
    }
    }
    
    
    function displayFullName() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var fullName = firstName + " " + lastName;
        document.getElementById("result").textContent = "Full Name: " + fullName;
    }