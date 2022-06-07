const favButtons = document.querySelectorAll('.fav-button')
for(btn of favButtons) {
    btn.addEventListener('click', async (e)=>{
        console.log('HEART ID', e.currentTarget.dataset.id)
        try {
            const res = await fetch (`/user/fav/${e.currentTarget.dataset.id}`, {
                method: 'post', 
                headers: {
                    'Content-Type': 'application/json'
                    
                  },
              
                body:JSON.stringify({image:e.currentTarget.dataset.image, id:e.currentTarget.dataset.id, title:e.currentTarget.dataset.title})
            })
            const data = res.json()
            console.log('FAV BUTTON DATE: ', data)
            // fetch (`/recipes${location.search}`)
            location.reload();
        } catch (error) {
            console.log(error)

        }

    } )
}