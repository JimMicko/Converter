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
        result = inputData.value * 10
        outputData.value = result
    }
    else if(unitInput.value=="mm" && unitOutput.value=="m"){
        var result = 0
        result = inputData.value * 1000
        outputData.value = result
    }
    else if(unitInput.value=="mm" && unitOutput.value=="km"){
        var result = 0
        result = inputData.value * 1000000
        outputData.value = result
    }
    else if(unitInput.value=="cm" && unitOutput.value=="mm"){
        var result = 0
        result = inputData.value / 10
        outputData.value = result
    }
    else if(unitInput.value=="cm" && unitOutput.value=="cm"){
        var result = 0
        result = inputData.value * 1
        outputData.value = result
    }
    else if(unitInput.value=="cm" && unitOutput.value=="m"){
        var result = 0
        result = inputData.value * 100
        outputData.value = result
    }
    else if(unitInput.value=="cm" && unitOutput.value=="km"){
        var result = 0
        result = inputData.value * 100000
        outputData.value = result
    }
    else if(unitInput.value=="m" && unitOutput.value=="mm"){
        var result = 0
        result = inputData.value / 1000
        outputData.value = result
    }
    else if(unitInput.value=="m" && unitOutput.value=="cm"){
        var result = 0
        result = inputData.value / 100
        outputData.value = result
    }
    else if(unitInput.value=="m" && unitOutput.value=="m"){
        var result = 0
        result = inputData.value * 1
        outputData.value = result
    }
    else if(unitInput.value=="m" && unitOutput.value=="km"){
        var result = 0
        result = inputData.value * 1000
        outputData.value = result
    }
    else if(unitInput.value=="km" && unitOutput.value=="mm"){
        var result = 0
        result = inputData.value / 1000000
        outputData.value = result
    }
    else if(unitInput.value=="km" && unitOutput.value=="cm"){
        var result = 0
        result = inputData.value / 100000
        outputData.value = result
    }
    else if(unitInput.value=="km" && unitOutput.value=="m"){
        var result = 0
        result = inputData.value / 1000
        outputData.value = result
    }
    else if(unitInput.value=="km" && unitOutput.value=="km"){
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