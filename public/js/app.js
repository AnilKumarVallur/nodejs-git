fetch('http://localhost:3000/weather?address=India').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})
