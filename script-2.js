const petsModule = (function(){
    const _data = [
        {
            image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
            name: "Sam",
            type: "Golden Retriever/St. Bernard Mix",
            sound: "bark",
            soundText: "Bark - type b"
        },
        {
            image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
            name: "Mellie",
            type: "Domestic Shorthair",
            sound: "meow",
            soundText: "Meow - type m"
        }
      
    ];
    const $tbodyEl = document.querySelector("tbody");
    const $buttons= document.querySelectorAll("button");
    const mainImage = document.querySelector(".main-image");
    
    const getPetRows = function(){
        return $tbodyEl.querySelectorAll("tr");
    }

    const getButtons = function(){
        return document.querySelectorAll("button");
    }
   
    const createPetElement = function(pet){
        return "<tr><td><img class='pet-image' src='"+pet.image+"' /></td><td>"+pet.name+"</td><td>"+pet.type+"</td><td><button data-sound='"+pet.sound+"'>"+pet.soundText+"</button></td></tr>"
    };

    const addToTable = function(content){
        $tbodyEl.innerHTML += content;
    }

    const putPetsInHtml = function(){
        for(let i=0; i< _data.length; i++){
            addToTable(createPetElement(_data[i]));
        }
    }

 // Seçilen pet fotoğrafının ekrana gelmesi ve satır renginin değişmesi
    const selectedPet = function () {
        const rows = getPetRows();
        for(let i= 0; i< rows.length; i++){
            rows[i].addEventListener("click", function(event){
                mainImage.setAttribute("src", _data[i].image);
                rows[i].style.background ="blue"
            });
        }
      }

// bark için b, meow için m
    const playWithKey = function(){
        document.addEventListener("keydown", function(e){
            if(e.keyCode == 66){
                document.getElementById('bark').play()
            }
            else if(e.keyCode == 77){
                document.getElementById('meow').play()
            }
        })
    }
 

    const bindEvents = function(){
        const buttons = getButtons();
        for(let i= 0; i< buttons.length; i++){
            buttons[i].addEventListener("click", function(event){
                event.stopPropagation();
                const soundId = this.dataset.sound;
                const soundElement = document.getElementById(soundId);
                if(soundElement){
                    soundElement.play();
                }
            });
        }
    }

    const init = function(){
        putPetsInHtml();
        bindEvents();
        playWithKey();
        selectedPet();
    }

    return {
        init: init
    }
})();
