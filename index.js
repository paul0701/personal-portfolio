//This changes the <p> with id="conversion-value" to a variable JS can understand "conversionValue" (in camelCase)
let conversionValueFive = document.getElementById("conversion-value-five")
let conversionValueSeventeen = document.getElementById("conversion-value-seventeen")
let conversionValueTwenty = document.getElementById("conversion-value-twenty")
//End of variable assignment code

function converterFive(ivFive) 

//Here we invoke the converter(this.value) function from the input tag
{
    let fiveNum=(ivFive * 1.05).toFixed(2)
    conversionValueFive.textContent= "5% VAT on your purchase means a total price of" + " " + "£" + fiveNum + "p"
      
    }
    //The above code allows JS to concatenate the output for the data

    function converterSeventeen(ivSeventeen) 

    //Here we invoke the converter(this.value) function from the input tag
    {
        let seventeenNum=(ivSeventeen * 1.175).toFixed(2)
        conversionValueSeventeen.textContent= "17.5% VAT on your purchase means a total price of" + " " + "£" + seventeenNum + "p"
          
        }
        //The above code allows JS to concatenate the output for the data


        function converterTwenty(ivTwenty) 

        //Here we invoke the converter(this.value) function from the input tag
        {
            let twentyNum=(ivTwenty * 1.2).toFixed(2)
            conversionValueTwenty.textContent= "20% VAT on your purchase means a total price of" + " " + "£" + twentyNum + "p"
              
            }
            //The above code allows JS to concatenate the output for the data