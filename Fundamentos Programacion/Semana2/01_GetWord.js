// function getWord(text){

//     const lastSpacePosition = text.indexOf(" ");
//     const subText = text.substring(0, lastSpacePosition);
    
//     const lastSpaceSubtex = subText.indexOf(" ");
//     const word = subText.substring(lastSpaceSubtex +  1);
//     console.log(word);
    
    
//     }
    
    // getWord("Hola, me llamo Erik");


    function findLastLetter(text) {
      
        const phrase = text.indexOf(" ");
        const secondLetter = text.substring(phrase +1);
       
        const secondPhrase = secondLetter.indexOf(" ");
        const word = secondLetter.substring(0, secondPhrase);
         
        console.log(word);

    }
    findLastLetter("Me llamo Erik");