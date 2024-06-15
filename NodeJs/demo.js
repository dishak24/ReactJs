exports.myfun=function()
                {
                    console.log("Hello");
                }

exports.addition=function(a,b,...c)
                {
                  var sum=a+b
                  for(var i of c)
                    {
                        sum=sum+i;
                    } 
                    return sum; 
                }