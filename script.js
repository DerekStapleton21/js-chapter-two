
// practice 1

const petObject = {
    petName: "Luna",
    petSpecies: "Cat",
    nickNames: ["cat", "small cat", "kitty"],
    age: 1,
    favoriteToy: [],


    purr: function(item) {

        console.log("I'm happy.")
    },
    meow: function(){
        window.alert("MEOW!")
    },
    
    scratch: function(item){
        console.log("I'm an asshole")
    },

    play: function(toy){
        
            if(toy.includes("fuzzy")){
                this.favoriteToy.push(toy)
                 console.log("Luna likes to play with it")
            }else{
                console.log("Luna won't play with it.")
            }

        

    }
        
    
}


petObject.purr()
petObject.meow()
petObject.scratch()
petObject.play("fuzzy ball")
petObject.play("bottle cap")
console.log(petObject.favoriteToy)

