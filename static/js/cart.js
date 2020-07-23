const updateBtns=document.getElementsByClassName("update-cart")

for (let i=0 ;i<updateBtns.length;i++){
    updateBtns[i].addEventListener("click",function(){
        const productId=this.dataset.product
        const action=this.dataset.action
        console.log(productId,action)

        console.log(user)
        if(user ==="AnonymousUser"){
            console.log("Not logged in")
        }
        else{
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId,action){
    console.log("User is logged in ,sending data...")
    const url="/update_item/"

    fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "X-CSRFToken":csrftoken,
        },
        body:JSON.stringify({"productId":productId,"action":action})
    })
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log("Data",data)
       location.reload()
    })
}