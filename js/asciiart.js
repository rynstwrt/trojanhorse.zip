const fox1 = `  _,-=._              /|_/|
  \`-.}   \`=._,.-=-._.,  @ @._,
     \`._ _,-.   )      _,.-'
        \`    G.m-"^m\`m'       
`;

const fox2 = `   /\\   /\\   
  //\\\\_//\\\\     ____
  \\_     _/    /   /
   / * * \\    /^^^]
   \\_\\O/_/    [   ]
    /   \\_    [   /
    \\     \\_  /  /
     [ [ /  \\/ _/
    _[ [ \\  /_/`;

const fox3 = `                                                  ,-,
                                                             _.-=;~ /_
                                                          _-~   '     ;.
                                                      _.-~     '   .-~-~\`-._
                                                _.--~~:.             --.____88
                              ____.........--~~~. .' .  .        _..-------~~
                     _..--~~~~               .' .'             ,'
                 _.-~                        .       .     \` ,'
               .'                                    :.    ./
             .:     ,/          \`                   ::.   ,'
           .:'     ,(            ;.                ::. ,-'
          .'     ./'.\`.     . . /:::._______.... _/:.o/
         /     ./'. . .)  . _.,'               \`88;?88|
       ,'  . .,/'._,-~ /_.o8P'                  88P ?8b
    _,'' . .,/',-~    d888P'                    88'  88|
 _.'~  . .,:oP'        ?88b              _..--- 88.--'8b.--..__
:     ...' 88o __,------.88o ...__..._.=~- .    \`~~   \`~~      ~-._     _.
\`.;;;:='    ~~            ~~~                ~-    -       -   -
`;

const name1 = ` ********** 
/////**///  
    /**     
    /**     
    /**     
    /**     
    /**     
    //      
 *******    
/**////**   
/**   /**   
/*******    
/**///**    
/**  //**   
/**   //**  
//     //   
   *******  
  **/////** 
 **     //**
/**      /**
/**      /**
//**     ** 
 //*******  
  ///////   
      **    
     /**    
     /**    
     /**    
     /**    
 **  /**    
//*****     
 /////      
     **     
    ****    
   **//**   
  **  //**  
 ********** 
/**//////** 
/**     /** 
//      //  
 ****     **
/**/**   /**
/**//**  /**
/** //** /**
/**  //**/**
/**   //****
/**    //***
//      /// 
 **      ** 
/**     /** 
/**     /** 
/********** 
/**//////** 
/**     /** 
/**     /** 
//      //  
   *******  
  **/////** 
 **     //**
/**      /**
/**      /**
//**     ** 
 //*******  
  ///////   
 *******    
/**////**   
/**   /**   
/*******    
/**///**    
/**  //**   
/**   //**  
//     //   
  ********  
 **//////   
/**         
/*********  
////////**  
       /**  
 ********   
////////    
 ********   
/**/////    
/**         
/*******    
/**////     
/**         
/********   
////////    `;

const asciiArts = [fox1, fox2, fox3, name1];
const selected = asciiArts[Math.floor(Math.random() * asciiArts.length)];
console.log(selected);