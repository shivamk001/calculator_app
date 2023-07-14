var expression='', operation=''
function onClick(key){
    // console.log('Key:', key)
    if(key>=0 && key<=9){
        console.log('Key:', key)
        number=key
        document.getElementById('answer').children[0].innerHTML=number
        if(operation=='.'){
            number=parseInt(prev)+0.1*parseInt(number)
            console.log('Decimal number:', prev, number)
            document.getElementById('answer').children[0].innerHTML=number
            operation=''
        }
        prev=number
    }
    else if(key=='AC'){
        document.getElementById('answer').children[0].innerHTML='0'
        expression=''
    }
    else if(key=='='){
        expression+=number
        console.log('= expression:', expression)
        document.getElementById('answer').children[0].innerHTML= eval(expression)
        number=eval(expression)
        console.log('Final Express:', number)
        expression=''
        prev=number
    }
    else if(key=='+/-'){

    }
    else if(key=='.'){
        operation='.'
    }
    else{
        if(key=='%' || key=='/' || key=='*' || key=='-' || key=='+'){
            operation=key
        }
        console.log('Number:', number, operation)
        expression+=number+operation
        console.log("Expression:",expression)
    }
}