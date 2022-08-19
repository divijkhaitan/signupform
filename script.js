const entpass=document.querySelector('.entpass')
const confpass=document.querySelector('.confpass')
const btn=document.querySelector('.submitbutton')
btn.addEventListener('click', clicked)
confpass.addEventListener('focus', focused)
let validpass=false
function focused(e)
{
    let confpassFocused=(document.activeElement===confpass)
    while(confpassFocused)
    {
        confpassFocused=(document.activeElement===confpass)
        if(confpass.value!=="")
        {
            if(!(confpass.value===entpass.value))
            {
                validpass=false
                confpass.classList.remove('valid')
                entpass.classList.remove('valid')
                
                confpass.classList.add('invalid')
                entpass.classList.add('invalid')
                btn.type="submit"
            }
            else
            {
                validpass=true
                confpass.classList.remove('valid')
                entpass.classList.remove('valid')
                
                confpass.classList.add('invalid')
                entpass.classList.add('invalid')
                btn.type="button"
            }
        }
    }
}

function clicked(e)
{
 if (btn.type="button")
 {
    alert('Your form is invalid. Please check and try again.')
 }   
}