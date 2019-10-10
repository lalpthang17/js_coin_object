

let coinflip = document.querySelector ("#coinflip")
const coin = {
  
    state: 0,
    
    flip: function() {
        if (Math.random() > .5){
           this.state = 0;
        }
        else{
            this.state = 1;
        }
        
        // 1. Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
    },
    toString: function() {
        if (this.state===0){
            return "heads"
        }
        else{
            return "tails"
        }
        // 2. Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
    },
    toHTML: function() {
        const image = document.createElement('img');
        if (this.state===0) {
            image.src ="image/coinhead.png"
        }
        else {
            image.src ="image/cointail.jpg"
        }
        let containerElement = document.querySelector("#container")
        containerElement.appendChild(image)
        
        // 3. Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        return image;
    }
   
};
function display20Flips() {
    const results = [];
    for(let i=0; i <= 20; i++){
        coin.flip()
        container.innerHTML += coin.toString() + "<br>";
        results.push(coin.toString())
    }
       return results
    // 4. Use a loop to flip the coin 20 times, each time displaying the result 
    // of the flip as a string on the page.  After your loop completes, return an array with 
    // the result of each flip.
}
function display20Images() {
    const results = [];
    for(let i=0; i <= 20; i++){
        coin.flip()
        container.appendChild (coin.toHTML())
        results.push(coin.toHTML())
    }
    return results
    // 5. Use a loop to flip the coin 20 times, and display the results of each 
    // flip as an image on the page.  After your loop completes, return an array with result 
    // of each flip.
}




// coin.flip()
//console.log(coin.toString())
//coin.toHTML()

display20Images()
display20Flips()
