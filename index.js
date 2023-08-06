function submitData (userName , userEmail){
    const curl = 
    {
    name: userName,
    email: userEmail,
        
    }
    
   const poststh = 
   {
        method: "POST",
        body: JSON.stringify(curl),
        headers: {
            "Content-type":"application/json",
            accept:"application/json"
        }
    
    }
    return fetch("http://localhost:3000/users" , poststh)
    .then(function (res) 
    {
        return res.json();
    })
    .then(function(curl) 
    {
        // return curl;
        document.querySelector("body").textContent = curl.id 
    })
    .catch((err) => 
    {
        document.querySelector("body").textContent = err.message;
      });

}