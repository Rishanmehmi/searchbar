


//Data Structure----------------------------
var TrieNode = function (key) 
{
 this.key = key;
 this.parent = null;
 this.children = {};
 this.end = false;
 this.getWord = function() 
 {
  let output = [];
  let node = this;

  while (node !== null)
  {
  output.unshift(node.key);
  node = node.parent;
  }
  return output.join('');
  };
}
//operations on data structure---------------------
var Trie = function() 
{
  this.root = new TrieNode(null);
  this.insert = function(word)         //insert Operation
   {
    let node = this.root;
    for(let i = 0; i < word.length; i++) 
    {
    if (!node.children[word[i]]) 
    {
      node.children[word[i]] = new TrieNode(word[i]);
      node.children[word[i]].parent = node;
    }
  node = node.children[word[i]];
  if (i == word.length-1) 
  {
    node.end = true;
  }
}
};
this.contains = function(word)   //checking operation
 {
  let node = this.root;
  for(let i = 0; i < word.length; i++) 
  {
  if (node.children[word[i]])
   {
    node = node.children[word[i]];
    } 
  else
  {
    return false;
  }
}
return node;
};
this.find = function(prefix)          //search operation--startsWith..
 {
  let node = this.root;
  let output = [];   
  
    for(let i = 0; i < prefix.length; i++) 
  {
    
  if (node.children[prefix[i]]) 
  {
    node= node.children[prefix[i]];
    
  } 
  else 
  {
   
    return output;
  }
}
findAllWords(node, output);
return output;
};

var findAllWords = (node, arr) =>     //search operation --- word resultant
{
if (node.end) 
{
  arr.unshift(node.getWord());
}
for (let child in node.children) {
  findAllWords(node.children[child], arr);
}

}





this.remove = function (word) {         //delete operation
  let root = this.root;

  if(!word) return;

  var removeWord = (node, word) => {

      if (node.end && node.getWord() === word) {

          let hasChildren = Object.keys(node.children).length > 0;

          if (hasChildren) {
              node.end = false;
          } else {
            
              node.parent.children = {};
          }

          return true;
      }

     
      for (let key in node.children) {
          removeWord(node.children[key], word)
      }

      return false
  };

  
  removeWord(root, word);
};
}

 var  trie = new Trie ;
 
 //credits for optimization, can result in the same length as that of querry
 //space an d run time complexity
 //relevant corner cases use pattern to validate 

var text=[];
function getData(input)
{
 
  var X = input.files[0];
  console.log(X);
  var reader=new FileReader;
  var txt= reader.readAsText(X);
  console.log(txt);
  reader.onload = function()
  {
    var Z = reader.result;
    text = Z.toString().split('\r\n');
    console.log(text);
    for(var i =0;i<text.length;i++){
    trie.insert(text[i]);
  };
 
  console.log(trie);
}
}
 

console.log('....File Read');
   

    function SRC()
    {
        console.log('You Searched for..');
       
      
        var X = document.getElementById('SearchQuery').value;
       
        var Kritic = [];
        
         var countery = '';
         for(var i =0;i<X.length;i++)
        {
          Kritic.push(X.charCodeAt(i));
         } console.log(Kritic);
         for(var i =0; i <Kritic.length;i++)
         {
          if(Kritic[i]>64  && Kritic[i]<91)
          {
            Kritic[i] = Kritic[i]+32
          }
          else if(Kritic[i]>60 && Kritic[i]<123)
          {
            Kritic[i] = Kritic[i];
          }
          else
          {
            alert('Dictionary for alphabetic words ...');
          }
         }
         
        
          var constly = '';
        for(i=0;i<Kritic.length;i++)
        {
          constly = constly + String.fromCharCode(Kritic[i]);
        }
        X = constly;
        
      
       
        var counter=X;
        var Zen =[[]];
        const simple = X.length;
        for(var i =0;i<1500;i++)
        {
          
          Zen[i]=[i];
        }
      
       
       let ans =[[]];
       for(var i=0;i<12;i++)
       {
         ans[i]=[i];}
       
     
       
do {if (trie.contains(X))
      {
        console.log(X);
        var Tempo = trie.contains(X);
        if(Tempo.end==false)
        {
          X=X.substr(0,X.length-1); 
        }

       

        var temp = trie.find(X);
        const len = X.length
        temp.sort();
        for(i=0;i<temp.length;i++)
        {
        if (temp[i].length === len){
          ans[0].push(temp[i]);
          
        }
        if(temp[i].length === X.length+1)
        {
          ans[1].push(temp[i]);
        }
        if(temp[i].length === X.length+2)
        {
          ans[2].push(temp[i]);
        }
        if(temp[i].length === X.length +3)
        {
          ans[3].push(temp[i]);
        }
        if(temp[i].length === X.length+4)
        {
          ans[4].push(temp[i]);
        }
        if(temp[i].length === X.length +5)
        {
          ans[5].push(temp[i]);
        }
        if(temp[i].length === X.length +6)
        {
          ans[6].push(temp[i]);
        }
        if(temp[i].length === X.length +7)
        {
          ans[7].push(temp[i]);
        }
        if(temp[i].length === X.length +8)
        {
          ans[8].push(temp[i]);
        }
      }

      var final =  counter.length -X.length ;
     
      for(var i=1;i<ans[final].length;i++)
      {
        for(var j=0;j<simple;j++)
        {
          if(ans[final][i][j]===counter[j])
          { 
            Zen[i].push(1,ans[final][i][j]);
          }
          else
          {
            Zen[i].push(0,ans[final][i][j]);
          }
        }
      }var Xar=[];
      for(var i=0;i<Zen.length;i++)
      {
        if(Zen[i].length>1)
        {
          Xar.push(Zen[i]);
        }
        
      }
      Xar.forEach(array => array.splice(0,1));
    //optimize the code at the end 
      var maxim=[];
      for(var i=0;i<Xar.length;i++)
      {
        maxim[i]=0;
      }
      for(var i=0; i<Xar.length;i++)
      {
        for(var j=0;j<Xar[i].length;j++)
        {
          if(Xar[i][j]===1 )
          {
            maxim[i]=maxim[i]+1;
          }
        }
      }
    
      var indexation = [];
      var allindex =[];
      var savageindex =[];
      var maxmaxim = maxim[0];
      for(var i =1;i<maxim.length;i++)  //start from here and submit before 10
      {
        if(maxmaxim<maxim[i])
        {
            indexation.push(i);
            if(maxim[i]-1===maxmaxim)
            {
              maxmaxim=maxmaxim;
              
            }
            else if(maxim[i]-1>maxmaxim)
            {
              maxmaxim = maxim[i];
              indexation.push(i);
            }
            else if(maxim[i]=maxmaxim)
            {
                savageindex.push(i);
            }
        }
      }
   
      if(indexation.length!==0)
      {
      var suggestionss =[];
      var allsuggestions=[];
      for(i=0;i<indexation.length;i++){
      suggestionss[i]=ans[final][indexation[i]+1];
      }
     console.log(suggestionss);
        document.getElementById("solutions").innerHTML = ans[0];
        
     if(suggestionss!==null||suggestionss!==undefined){
       suggestionss.sort();
        document.getElementById('bettersuggestions').innerHTML = suggestionss ;
     }
    }
    else
    {
      
      document.getElementById('bettersuggestions').innerHTML = ans[final];
    }
    }  else 
        {
          X=X.substr(0,X.length-1);
          
          
          
          //here insert the value of the surrounding keys for every alphabetic key on keyboard and then get the most relative letter.
          //then display results with combinations.
          
        }
      }while(temp==null||temp ==undefined);
      if(ans[0].length ===1 )
      {
        document.getElementById('solutions').innerHTML= 'Word not found , below are the related words.' 
      }
      if(ans[0].length===2)
      {
        
        document.getElementById('solutions').innerHTML = ans[0][1];
      }
    }   
