// Character object definition
const character = {
    name: "Snortleblat",
    class: "Forest Creature",
    level: 1,
    health: 100,
    
    image: "images/snortleblat.webp", 
   
// Method to handle being attacked
    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
            if (this.health <= 0) {
                this.health = 0;
                alert(`${this.name} has died!`);
            }
        }
        renderCharacter(this);
    },

    levelUp: function() {
        this.level++;
        renderCharacter(this);
    }
};

// Function to render (display) character data in the HTML
function renderCharacter(char) {
    document.querySelector("#charName").textContent = char.name;
    document.querySelector("#charClass").textContent = char.class;
    document.querySelector("#charLevel").textContent = char.level;
    document.querySelector("#charHealth").textContent = char.health;
    
    const imgElement = document.querySelector("#charImage");
    imgElement.setAttribute("src", char.image);
    imgElement.setAttribute("alt", char.name);
}

// Event Listeners for the buttons
document.querySelector("#btnAttack").addEventListener("click", () => {
    character.attacked();
});

document.querySelector("#btnLevel").addEventListener("click", () => {
    character.levelUp();
});

// Initialize
renderCharacter(character);