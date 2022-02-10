document.getElementById('submit-btn').addEventListener('click', function (){
    // Get user email 
    const showEmail = document.getElementById('user-mail');
    const userEmail = showEmail.value;
    // Get user passwords 
    const showPass = document.getElementById('user-pass');
    const userPass = showPass.value;
    // If else conditions 
    if(userEmail=='sontan@baap.com' && userPass=='ullash'){
        window.location.href='bank.html';
    }
    else{
        alert('who are you')
    }
});

