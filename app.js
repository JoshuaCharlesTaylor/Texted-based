var input = document.getElementById("input");
var output = document.getElementById("output");
var paraBreak = document.createElement("br");
var gamever = 0;
var clear = 0;
var next = 0;
var cheat = -1;
var characterClass = 0;
var name = 0;

//Enter key submit
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("enter").click();
    }
});

//after you hit enter
function submitInput(){
    //newline "words" +"\nwords on new line"
    if (gamever == 0){
        if(next == 0){
        output.value = "Aaaahhh, that horrid smell of the steam boat." 
        + "You just hate it. It's a perfect blend of sweat, rusting metal, suflur, coal, and who wants to know what else. You have been on this scrap for several days now."
        + "The endless expance of blue is not helping your antsyness to get off this vessel. Hopefully the island is not too much further. And hopefully what ever is on that island is worth it."
        + "\n \nSailor - \"Hey you!\"\n \n-Write a name in text area.";
        };
        console.log(next);
        console.log(name);
        if(next == 1){
            cheat = input.value.search("Superfries");
            if(cheat > -1){
                alert("You dirty cheater");
                cheat = -1;
            }else{
                name = input.value;
                output.value = output.value + "\n \nYou - \"The name is " + name + "\"" 
                +"\n \nSailor - \"Alright. " + name 
                +", I was just curious why you were goin' to that cursed island.\""
                +"\n \n-To select an option write the number or words that appear before the -"
                +"\n \n Treasure Hunter - You came seeking long lost treasure."
                +"\n \n Archaeologist - You came seeking ancient artifacts."
                +"\n \n Cursed One - You came seeking a way to remove a vile curse that is upon you."
                +"\n \n Hunter - You have heard of extremely rare game was on this island."
                +"\n \n - add \"need to know\" at the end to keep this secret";
                name = name;
            }
        }
        if(next == 2){
            var treasureHunter = input.value.search("Treasure Hunter");
            var archaeologist = input.value.search("Archaeologist");
            var cursedOne = input.value.search("Cursed One");
            var hunter = input.value.search("Hunter");
            var villain = input.value.search("Villain");
            var ntk = input.value.search("need to know");
            if(treasureHunter > -1){
                characterClass = "treasureHunter";
                if(ntk > -1){
                    output.value = output.value + "\n \nYou - \"It is none of your business\""
                    +"\n \nSailor - \"Alright, that is totally cool.\" \n \nThe sailor leaves you alone to observe the vast expanse of blue."
                    +"\n \n- Hit enter to contuine"
                }else{
                    output.value = output.value + "\n \nYou - \"There is legendary treasure on that island, and I plan to claim it.\"\n \nSailor - \"As many have, I hope you have better luck then they did\"\n \nThe sailor leaves you alone to observe the vast expanse of blue."
                    +"\n \n- Hit enter to contuine"
                }
            }
            if(archaeologist > -1){
                characterClass = "archaeologist";
                if(ntk > -1){
                    output.value = output.value + "\n \nYou - \"It is none of your business\""
                    +"\n \nSailor - \"Alright, that is totally cool.\" \n \nThe sailor leaves you alone to observe the vast expanse of blue."
                    +"\n \n- Hit enter to contuine."
                }else{
                    output.value = output.value + "\n \nYou - \"I came to find artifacts that are rumored to be here.\""
                    +"\n \nSailor - \"You aren't the only one. Good luck with that.\" \n \nThe sailor leaves you alone to observe the vast expanse of blue."
                    +"\n \n- Hit enter to contuine."
                }
            }
            if(cursedOne > -1){
                characterClass = "cursedOne";
                if(ntk > -1){
                    output.value = output.value + "\n \nYou - \"It is none of your business\""
                    +"\n \nSailor - \"Alright, that is totally cool.\" \n \nThe sailor leaves you alone to observe the vast expanse of blue."
                    +"\n \nHit enter to contuine"
                }else{
                    output.value = output.value + "\n \nYou - \"I am cursed, and this island, I believe, will cure me.\""
                    +"\n \nSailor - \"You're cursed! Get off this vessel now! I ain't dealin' with the devil today!\""
                    +"\n \nMore sailors appear, a few of the are armed. A row boat is lowered into the ocean for you."
                    +"\n \n  Obey - Take the boat.\n \n  Fight - Throw a fist at the sailor.\n \n  Verbal - Convice them that they aren't in danger."
                }
            }
            if(hunter > -1 && hunter < 9){
                characterClass = "hunter";
                if(ntk > -1){
                    output.value = output.value + "\n \nYou - \"It is none of your business\""
                    +"\n \nSailor - \"Alright, that is totally cool.\" \n \nThe sailor leaves you alone to observe the vast expanse of blue."
                    +"\n \n- Hit enter to contuine"
                }else{
                    output.value = output.value + "\n \nYou - \"There is rare game on that island, and I am going get it.\""
                    +"\n \nSailor - \"Ah, a hunter. A man I can respect. I would try to talk you out of this venture, but I could never convice an Ahab. May luck be with you!"
                    +"\" \n \nThe sailor leaves you alone to observe the vast expanse of blue."
                    +"\n \n- Hit enter to contuine"
                }
            }
            if(villain > -1){
                characterClass = "villain";
                if(ntk > -1){
                    output.value = output.value + "\n \nYou grab the sailor's mouth and break his neck. You throw his body overboard. No one is gonna miss that guy. You are alone now, observing the expanse of blue"
                }else{
                    output.value = output.value + "\n \nYou slam the sailors head into the railing several times. You toss the body across the deck. More are coming at you."
                    +"\n \n Charge - Charge at them.\n \n Taunt - Let them come at you.\n \n Jump - Into the ocean"
                }
            }
            if(villain <= -1 && hunter <= -1 && cursedOne <= -1 && archaeologist <= -1 && treasureHunter <= -1){
               --next;
               alert("invalid response");
            }
        }
        if(next == 3){
            if(characterClass == "treasureHunter"){
                output.value = output.value + "\n \nYou are awaken to the sound of a horn and rushing sailors. You walk out onto the deck and behold the island. It was a massive jungle, with on large montain at its core. There was no hints that man ever was here, but you know better."
                +"There is defiently a rare treasure here."
                +"\n \nThey take you to the island by row boat, dropping you off on a beach. The rocky sand leads into a large jungle. The beach goes only a mile or two in either direction before it turns into massive cliffs."
                +"\n \nSailor-\"We'll be back here in two weeks. Until then, good luck.\""
                +"\n \nYou watch them row towards the steam boat, leaving you alone on the beach, hopefully you packed well."
                +"\n \n Walk the beach - Travel the beach, perhaps there is treasure on this beach."
                +"\n \n Go for a swim - Swim into the ocean, leaving your pack behind. Maybe you'll find treasure under the sea."
                +"\n \n Walk into the jungle - Start the search for treasure in the dense jungle."
                +"\n \n Set up camp - Though you still have several hours before dark, might as well set up a base of operations."
            }
            if(characterClass == "archaeologist"){
                
            }
            if(characterClass == "cursedOne"){
                
            }
            if(characterClass == "hunter"){
                
            }
            if(characterClass == "villain"){
                
            }
        }
        if(next == 4){
            if(characterClass == "treasureHunter"){
                var beach = input.value.search("Walk the beach");
                var swim = input.value.search("Go for a swim");
                var jungle = input.value.search("Walk into the jungle");
                var camp = input.value.search("Set up camp");
                if(beach > -1){
                    output.value = output.value + "\n \nYou walk the beach, find a few shells, but no treasure. Your not surprised, treasure hardly washes up on the shore."
                    +"\n \n Rest on the beach - The breeze feels nice and thee sun isn't baking you."
                    +"\n \n Go for a swim - See if your luck changes in the ocean. Leaves your pack behind."
                    +"\n \n Walk into the jungle - The jungle has to be where the treasure is."
                    +"\n \n Climb the cliffs - Since you are by the cliffs anyway, would it hurt to climb them?"
                }
                if(swim > -1){
                    output.value = output.value + "\n \nThe ocean was rather pleasant. The water was refreshingly cold, and the wind was fair. Under the water, you can see beautiful unspoiled coral reefs."
                    +"It is perfect. You pop your head out of the water, after just having watched a seaturtle. You can see the island, but it is a couple miles away. You must have been enjoying the water a bit much."
                    +"As you swim back, you notice a glimmer of coins."
                    +"\n \n Treasure! - get those coins!"
                    +"\n \n Swim to the beach - swim back to the beach, leaving those coins."
                }
                if(jungle > -1){
                    output.value = output.value + "\n \n"
                }
                if(camp > -1){
                    output.value = output.value + "\n \nYou set up camp, creating a kind of HQ. You set it up pretty quickly, meaning there is still time to do something else"
                    +"\n \n Walk into the jungle - To the jungle for treasure."
                    +"\n \n Go for a swim - dive for treaure!"
                    +"\n \n Walk the beach - explore the surrounding area."
                }
                if(camp <= -1 && jungle <= -1 && swim <= -1 && beach <= -1){
                    --next;
                    alert("invalid response");
                }
            }
        }
        ++next;
    }
    //clears outputtext
    if(clear == 1){
        output.value = "";
        clear = 0
    }
    input.value = "";
}