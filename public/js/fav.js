const favButtons = document.querySelectorAll('.fav-button')
for(btn of favButtons) {
    btn.addEventListener('click', async ()=>{

        try {
            const res = await fetch (`/user/fav/${btn.dataset.id}`, {
                method: 'post', 
                headers: {
                    'Content-Type': 'application/json'
                    
                  },
              
                body:JSON.stringify({image:btn.dataset.image, id:btn.dataset.id, title:btn.dataset.title})
            })
            const data = res.json()
            console.log('FAV BUTTON DATE: ', data)
        } catch (error) {
            console.log(error)

        }

    } )
}