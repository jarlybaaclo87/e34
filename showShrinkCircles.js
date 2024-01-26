window.onload = function(){
    //create a key value pair of colors
    const colors = {
        'orange':'rgb(232,109,22)',
        'green':'rgb(15,143,15)',
        'red':'rgb(249,0,0)'
    };
    //selecting a default background color
    var bg_color = colors['orange'];
    // console.log(bg_color);
    //create a function that will draw circle
    function create(event){
        // console.log('mouse click!');
        let el = document.createElement('p');
        let size = Math.floor(Math.random()*(200-10+1))+10;
        //add styles to el
        el.style.position='absolute';
        el.style.left = event.clientX+'px';

        el.style.width = size+'px';
        el.style.height = size+'px';
        el.style.backgroundColor = bg_color;
        el.style.borderRadius = Math.floor(size/2)+'px';
        //classname for the element that will be created
        el.className = 'round';
        //add el to the body after last child
        document.body.appendChild(el);
    }
    //create an eventlistener for click to call the function create
    document.addEventListener('click',create);
    //reload the page
    // document.getElementById('reset').addEventListener('click', function)
}