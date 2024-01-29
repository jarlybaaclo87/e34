window.onload = function(){
    //create a key value pair of colors
    const colors = {
        'orange':'rgb(232, 109, 22)',
        'green':'rgb(15, 143, 15)',
        'red':'rgb(249, 8, 8)'
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
        el.style.top = event.clientY+'px';
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
    document.getElementById('reset').addEventListener('click', function(){
        window.location.reload();
    });
    //process the selected/clicked color and assigned it as background color
    var button = document.getElementsByClassName('btn');
    for (let i = 0; i < 3; i++) {
        button[i].onclick = function(e){
            e.stopPropagation();
            highlight(colors[this.innerText]);
        }
    }
    function highlight(color){
        bg_color = color;
        //set a highlight using shadow
        nodes = document.getElementsByClassName('round');
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].style.boxShadow='10px 20px 30px black'; 
        }
    }
}

// shrink = function(){



//     setInterval(shrink, 75);
// }