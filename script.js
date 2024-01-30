const dadjokes = () => {
    const jokesDisplay = document.getElementById('jokes')
    const btn = document.getElementById('btn')
   
    let joke = ""
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET','https://api.api-ninjas.com/v1/dadjokes?limit=1')
    xhr.setRequestHeader('X-Api-Key', 'g2XiD6MzNNOB+eZcvKAyHw==CD0DbzFPaaKwZ3bR');
    xhr.send();
    btn.innerText = "Please wait..."
    xhr.onload = function () {
        if(xhr.status === 200){
            const result = JSON.parse(xhr.responseText)
            jokesDisplay.innerText = result[0].joke
            btn.innerText = "TELL ME A JOKE"
        }
    }

    
}

btn.addEventListener('click', dadjokes)