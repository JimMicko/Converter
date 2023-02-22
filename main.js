const inputData = document.getElementById("inputData")
const outputData = document.getElementById("outputData")
const unitInput = document.getElementById("unitInput")
const unitOutput = document.getElementById("unitOutput")


function calculate(){

    if(unitInput.value=="mm" && unitOutput.value=="mm"){
        var result = 0
        result = inputData.value * 1
        outputData.value = result
    }
    else if(unitInput.value=="mm" && unitOutput.value=="cm"){
        var result = 0
        result = inputData.value / 10
        outputData.value = result
    }
    else if(unitInput.value=="mm" && unitOutput.value=="m"){
        var result = 0
        result = inputData.value / 1000
        outputData.value = result
    }
    else if(unitInput.value=="mm" && unitOutput.value=="km"){
        var result = 0
        result = inputData.value / 1000000
        outputData.value = result
    }    
    if(unitInput.value=="mm" && unitOutput.value=="in"){
        var result = 0
        result = inputData.value / 25.4
        outputData.value = result
    }
    else if(unitInput.value=="mm" && unitOutput.value=="ft"){
        var result = 0
        result = inputData.value / 304.8
        outputData.value = result
    }
    else if(unitInput.value=="mm" && unitOutput.value=="yd"){
        var result = 0
        result = inputData.value / 914.4
        outputData.value = result
    }
    else if(unitInput.value=="mm" && unitOutput.value=="mi"){
        var result = 0
        result = inputData.value / 1609344
        outputData.value = result
    }
    else if(unitInput.value=="cm" && unitOutput.value=="mm"){
        var result = 0
        result = inputData.value * 10
        outputData.value = result
    }
    else if(unitInput.value=="cm" && unitOutput.value=="cm"){
        var result = 0
        result = inputData.value * 1
        outputData.value = result
    }
    else if(unitInput.value=="cm" && unitOutput.value=="m"){
        var result = 0
        result = inputData.value / 100
        outputData.value = result
    }
    else if(unitInput.value=="cm" && unitOutput.value=="km"){
        var result = 0
        result = inputData.value / 100000
        outputData.value = result
    }
    if(unitInput.value=="cm" && unitOutput.value=="in"){
        var result = 0
        result = inputData.value / 2.54
        outputData.value = result
    }
    else if(unitInput.value=="cm" && unitOutput.value=="ft"){
        var result = 0
        result = inputData.value / 30.48
        outputData.value = result
    }
    else if(unitInput.value=="cm" && unitOutput.value=="yd"){
        var result = 0
        result = inputData.value / 91.44
        outputData.value = result
    }
    else if(unitInput.value=="cm" && unitOutput.value=="mi"){
        var result = 0
        result = inputData.value / 160934.4
        outputData.value = result
    }
    else if(unitInput.value=="m" && unitOutput.value=="mm"){
        var result = 0
        result = inputData.value * 1000
        outputData.value = result
    }
    else if(unitInput.value=="m" && unitOutput.value=="cm"){
        var result = 0
        result = inputData.value * 100
        outputData.value = result
    }
    else if(unitInput.value=="m" && unitOutput.value=="m"){
        var result = 0
        result = inputData.value * 1
        outputData.value = result
    }
    else if(unitInput.value=="m" && unitOutput.value=="km"){
        var result = 0
        result = inputData.value / 1000
        outputData.value = result
    }
    if(unitInput.value=="m" && unitOutput.value=="in"){
        var result = 0
        result = inputData.value / 0.0254
        outputData.value = result
    }
    else if(unitInput.value=="m" && unitOutput.value=="ft"){
        var result = 0
        result = inputData.value / 0.3048
        outputData.value = result
    }
    else if(unitInput.value=="m" && unitOutput.value=="yd"){
        var result = 0
        result = inputData.value / 0.9144
        outputData.value = result
    }
    else if(unitInput.value=="m" && unitOutput.value=="mi"){
        var result = 0
        result = inputData.value / 1609.344
        outputData.value = result
    }
    else if(unitInput.value=="km" && unitOutput.value=="mm"){
        var result = 0
        result = inputData.value * 1000000
        outputData.value = result
    }
    else if(unitInput.value=="km" && unitOutput.value=="cm"){
        var result = 0
        result = inputData.value * 100000
        outputData.value = result
    }
    else if(unitInput.value=="km" && unitOutput.value=="m"){
        var result = 0
        result = inputData.value * 1000
        outputData.value = result
    }
    else if(unitInput.value=="km" && unitOutput.value=="km"){
        var result = 0
        result = inputData.value * 1
        outputData.value = result
    }
    if(unitInput.value=="km" && unitOutput.value=="in"){
        var result = 0
        result = inputData.value / 0.0000254
        outputData.value = result
    }
    else if(unitInput.value=="km" && unitOutput.value=="ft"){
        var result = 0
        result = inputData.value / 0.0003048
        outputData.value = result
    }
    else if(unitInput.value=="km" && unitOutput.value=="yd"){
        var result = 0
        result = inputData.value / 0.0009144
        outputData.value = result
    }
    else if(unitInput.value=="km" && unitOutput.value=="mi"){
        var result = 0
        result = inputData.value / 1.609344
        outputData.value = result
    }
    else if(unitInput.value=="in" && unitOutput.value=="mm"){
        var result = 0
        result = inputData.value * 25.4
        outputData.value = result
    }
    else if(unitInput.value=="in" && unitOutput.value=="cm"){
        var result = 0
        result = inputData.value * 2.54
        outputData.value = result
    }
    else if(unitInput.value=="in" && unitOutput.value=="m"){
        var result = 0
        result = inputData.value * 0.0254
        outputData.value = result
    }
    else if(unitInput.value=="in" && unitOutput.value=="km"){
        var result = 0
        result = inputData.value * 0.0000254
        outputData.value = result
    }
    if(unitInput.value=="in" && unitOutput.value=="in"){
        var result = 0
        result = inputData.value * 1
        outputData.value = result
    }
    else if(unitInput.value=="in" && unitOutput.value=="ft"){
        var result = 0
        result = inputData.value / 12
        outputData.value = result
    }
    else if(unitInput.value=="in" && unitOutput.value=="yd"){
        var result = 0
        result = inputData.value / 36
        outputData.value = result
    }
    else if(unitInput.value=="in" && unitOutput.value=="mi"){
        var result = 0
        result = inputData.value / 63360
        outputData.value = result
    }
    else if(unitInput.value=="ft" && unitOutput.value=="mm"){
        var result = 0
        result = inputData.value * 304.8
        outputData.value = result
    }
    else if(unitInput.value=="ft" && unitOutput.value=="cm"){
        var result = 0
        result = inputData.value * 30.48
        outputData.value = result
    }
    else if(unitInput.value=="ft" && unitOutput.value=="m"){
        var result = 0
        result = inputData.value * 0.3048
        outputData.value = result
    }
    else if(unitInput.value=="ft" && unitOutput.value=="km"){
        var result = 0
        result = inputData.value * 0.0003048
        outputData.value = result
    }
    if(unitInput.value=="ft" && unitOutput.value=="in"){
        var result = 0
        result = inputData.value * 12
        outputData.value = result
    }
    else if(unitInput.value=="ft" && unitOutput.value=="ft"){
        var result = 0
        result = inputData.value * 1
        outputData.value = result
    }
    else if(unitInput.value=="ft" && unitOutput.value=="yd"){
        var result = 0
        result = inputData.value / 3
        outputData.value = result
    }
    else if(unitInput.value=="ft" && unitOutput.value=="mi"){
        var result = 0
        result = inputData.value / 5280
        outputData.value = result
    }
    else if(unitInput.value=="yd" && unitOutput.value=="mm"){
        var result = 0
        result = inputData.value * 914.4
        outputData.value = result
    }
    else if(unitInput.value=="yd" && unitOutput.value=="cm"){
        var result = 0
        result = inputData.value * 91.44
        outputData.value = result
    }
    else if(unitInput.value=="yd" && unitOutput.value=="m"){
        var result = 0
        result = inputData.value * 0.9144
        outputData.value = result
    }
    else if(unitInput.value=="yd" && unitOutput.value=="km"){
        var result = 0
        result = inputData.value * 0.0009144
        outputData.value = result
    }
    if(unitInput.value=="yd" && unitOutput.value=="in"){
        var result = 0
        result = inputData.value * 36
        outputData.value = result
    }
    else if(unitInput.value=="yd" && unitOutput.value=="ft"){
        var result = 0
        result = inputData.value * 3
        outputData.value = result
    }
    else if(unitInput.value=="yd" && unitOutput.value=="yd"){
        var result = 0
        result = inputData.value * 1
        outputData.value = result
    }
    else if(unitInput.value=="yd" && unitOutput.value=="mi"){
        var result = 0
        result = inputData.value / 1760
        outputData.value = result
    }
    else if(unitInput.value=="mi" && unitOutput.value=="mm"){
        var result = 0
        result = inputData.value * 1609344
        outputData.value = result
    }
    else if(unitInput.value=="mi" && unitOutput.value=="cm"){
        var result = 0
        result = inputData.value * 160934.4
        outputData.value = result
    }
    else if(unitInput.value=="mi" && unitOutput.value=="m"){
        var result = 0
        result = inputData.value * 1609.344
        outputData.value = result
    }
    else if(unitInput.value=="mi" && unitOutput.value=="km"){
        var result = 0
        result = inputData.value * 1.609344
        outputData.value = result
    }
    if(unitInput.value=="mi" && unitOutput.value=="in"){
        var result = 0
        result = inputData.value * 63360
        outputData.value = result
    }
    else if(unitInput.value=="mi" && unitOutput.value=="ft"){
        var result = 0
        result = inputData.value * 5280
        outputData.value = result
    }
    else if(unitInput.value=="mi" && unitOutput.value=="yd"){
        var result = 0
        result = inputData.value * 1760
        outputData.value = result
    }
    else if(unitInput.value=="mi" && unitOutput.value=="mi"){
        var result = 0
        result = inputData.value * 1
        outputData.value = result
    }
}

function clearData(){
    inputData.value = ""
    unitInput.value = ""
    outputData.value = ""
    unitOutput.value = ""
}