//welcome message when open the page..

window.alert('welcome my friend toma world(*-*)');

//record the time and date when opening the page ..
const currentDate = new Date ()
console.log ("you opened the page in" ,currentDate)

//change the title of page based on time ..
const currentHour = currentDate.getHours();
if(currentHour >= 6 && currentHour < 12)
{
    document.title = 'good morning!'
}else if (currentHour >= 12  && currentHour <18)
{
    document.title ='good evening! (*-*)';
}else
{
    document.title ='good night!'
}