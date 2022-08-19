const entpass=document.querySelector('.entpass')
const confpass=document.querySelector('.confpass')
const form=document.querySelector('.form')
const errmess=document.querySelector('.errmess')
form.addEventListener('submit', submitted)
confpass.addEventListener('change', changed)
let validpass=false
function changed(e)
{
    if((confpass.value===entpass.value))
        {
            if(confpass.value!=="")
            {
                validpass=true
                confpass.classList.remove('invalid')
                entpass.classList.remove('invalid')
                
                confpass.classList.add('valid')
                entpass.classList.add('valid')
                console.log("none")
                errmess.style.display="none"
            }
            else
            {
            validpass=false
            confpass.classList.remove('valid')
            entpass.classList.remove('valid')
            
            console.log("block")
            errmess.style.display="block"
            confpass.classList.add('invalid')
            entpass.classList.add('invalid')
            }
        }
    else
        {
            validpass=false
            confpass.classList.remove('valid')
            entpass.classList.remove('valid')
            
            errmess.style.display="block"
            console.log("block")    
            confpass.classList.add('invalid')
            entpass.classList.add('invalid')
        }
}

function submitted(e)
{
    if(confpass!==entpass)
    {
        e.preventDefault();
        alert('Your form is invalid. Please check and try again.');
        return;
    }
    console.log("submitted")
    
}