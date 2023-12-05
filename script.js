/*Things to put the code through
1: https://www.toptal.com/developers/javascript-minifier
2: https://obfuscator.io/ 
And yea! add it into index.html!

Noice job being online hugo, noice job 😏 */

(function(window) {
  
  var links = [{
    
    name: 'Oj+',
    url: 'https://bit.ly/OJAPP'
  }, {
    name: 'Cube go spinny',
    url: 'https://cube.willemvan16.repl.co/'
  }];
  var props = {
    width: 500,
    height: 520,
    background: '#AAA',
    borderThickness: 3,
    headerHeight: 32,
    headerBackground: '#444',
    headerTitleColor: '#FFF',
    windowTitle: 'Radium V1'

  };
  var windowPosition = {
    left: ~~((document.documentElement.clientWidth / 2) - (props.width / 2)),
    top: ~~((document.documentElement.clientHeight / 2) - (props.height / 2)),
  }
  var btnSize = ~~(props.headerHeight * 0.6);
  var popupEl = document.createElement('DIV');
  Object.assign(popupEl.style, {
    position: 'absolute',
    left: windowPosition.left + 'px',
    top: windowPosition.top + 'px',
    zIndex: Number.MAX_SAFE_INTEGER,
    width: props.width + 'px',
    height: props.height + 'px',
    background: props.background,
    border: props.borderThickness + 'px solid black'
  });
  var popupHeader = document.createElement('DIV');
  Object.assign(popupHeader.style, {
    position: 'relative',
    width: (props.width) + 'px',
    height: props.headerHeight + 'px',
    background: props.headerBackground,
    borderBottom: props.borderThickness + 'px solid black'
  });
  var popupHeaderTitle = document.createElement('DIV');
  Object.assign(popupHeaderTitle.style, {
    position: 'relative',
    display: 'inline-block',
    left: 0,
    width: ~~(props.width - btnSize * 2) + 'px',
    lineHeight: props.headerHeight + 'px',
    color: props.headerTitleColor,
    fontSize: ~~(props.headerHeight * 0.667) + 'px',
    marginLeft: ~~(btnSize / 3) + 'px'
  });
  popupHeaderTitle.textContent = props.windowTitle;
  var closeButton = document.createElement('DIV');
  var margin = ~~((props.headerHeight - btnSize) / 2);
  Object.assign(closeButton.style, {
    position: 'relative',
    float: 'right',
    right: margin + 'px',
    top: margin + 'px',
    width: btnSize + 'px',
    height: btnSize + 'px',
    background: '#F00',
    border: props.borderThickness + 'px solid black',
    color: '#FFF',
    lineHeight: btnSize + 'px',
    textAlign: 'center',
    fontSize: btnSize + 'px',
    marginLeft: 'auto',
    marginRight: 0
  });
  var popupBody = document.createElement('DIV');
  Object.assign(popupBody.style, {
    padding: '1em'
  });
popupEl.style.borderRadius = "20px";
  popupHeader.style.borderRadius = "20px";
 
  var p = document.createElement('P');
  p.textContent = 'Click one of these options to change something on the page!';
  popupBody.appendChild(p);
  var listEl = document.createElement('UL');
    var colorButton = document.createElement('button');
    colorButton.textContent = 'Change Page Color to Red';
    colorButton.addEventListener('click', function() {
      document.body.style.backgroundColor = 'red';
    });
    popupBody.appendChild(colorButton);
      links.forEach(link => {
        var itemEl = document.createElement('LI');
        var anchorEl = document.createElement('A');
        anchorEl.setAttribute('href', link.url);
        anchorEl.setAttribute('target', '_blank');
        anchorEl.textContent = link.name;
        itemEl.appendChild(anchorEl);
        listEl.appendChild(itemEl);

  });var greenButton = document.createElement('button');
greenButton.textContent = 'Change Page Color to Green';
greenButton.addEventListener('click', function() {
  document.body.style.backgroundColor = 'green'; 
});
popupBody.appendChild(greenButton);
  var blueButton = document.createElement('button');
blueButton.textContent = 'Change Page Color to Blue';
blueButton.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
});
popupBody.appendChild(blueButton);
  var blackButton = document.createElement('button');
blackButton.textContent = 'Change Page Color to Black';
blackButton.addEventListener('click', function() {
  document.body.style.backgroundColor = 'black';
});
popupBody.appendChild(blackButton);
  var whiteButton = document.createElement('button');
whiteButton.textContent = 'Change Page Color to White';
whiteButton.addEventListener('click', function() {
  document.body.style.backgroundColor = 'white';
});
popupBody.appendChild(whiteButton);
  
var button = document.createElement('button');
button.textContent = 'Add 4 uwus to bottom of page';
button.addEventListener('click', function() {
  
  const textt = document.createElement('button');
  textt.textContent = 'uwu';
  document.body.appendChild(textt);
  const textt2 = document.createElement('button');
  textt2.textContent = 'uwu';
  document.body.appendChild(textt2);
  const textt3 = document.createElement('button');
  textt3.textContent = 'uwu';
  document.body.appendChild(textt3);
  const textt4 = document.createElement('button');
  textt4.textContent = 'uwu';
  document.body.appendChild(textt4);

});
  popupBody.appendChild(listEl);
  var comicSansButton = document.createElement('button');
comicSansButton.textContent = 'Set Text to Comic Sans MS';
comicSansButton.addEventListener('click', function() {
  var elements = document.querySelectorAll('*');
  elements.forEach(function(element) {
    element.style.fontFamily = 'Comic Sans MS';
  });
});
popupBody.appendChild(comicSansButton);
popupBody.appendChild(button);
  var aerialButton = document.createElement('button');
aerialButton.textContent = 'Set Text to Arial';
aerialButton.addEventListener('click', function() {
  var elements = document.querySelectorAll('*');
  elements.forEach(function(element) {
    element.style.fontFamily = 'Arial';
  });
});
popupBody.appendChild(aerialButton);

  var robotoMonoButton = document.createElement('button');
robotoMonoButton.textContent = 'Set text to Roboto Mono';
robotoMonoButton.addEventListener('click', function() {
  var elements = document.querySelectorAll('*');
  elements.forEach(function(element) {
    element.style.fontFamily = 'Roboto Mono';
  });
});
popupBody.appendChild(robotoMonoButton);
  var input = document.createElement('input');
input.setAttribute('type', 'text');
var sayButton = document.createElement('button');
sayButton.textContent = 'Say';

sayButton.addEventListener('click', function() {
  alert(input.value);
});


popupBody.appendChild(input);
  popupBody.appendChild(sayButton);
  var boldButton = document.createElement('button');
boldButton.textContent = 'Make Text Bold';
boldButton.addEventListener('click', function() {
  var elements = document.querySelectorAll('*');
  elements.forEach(function(element) {
    element.style.fontWeight = 'bold';
  });
});
popupBody.appendChild(boldButton);
  var normalButton = document.createElement('button');
normalButton.textContent = 'Set Text to Normal';
normalButton.addEventListener('click', function() {
  var elements = document.querySelectorAll('*');
  elements.forEach(function(element) {
    element.style.fontWeight = 'normal';
    element.style.fontStyle = 'normal';
  });
});
popupBody.appendChild(normalButton);
  
  var italicButton = document.createElement('button');
italicButton.textContent = 'Set Text to Italic';
italicButton.addEventListener('click', function() {
  var elements = document.querySelectorAll('*');
  elements.forEach(function(element) {
    element.style.fontStyle = 'italic';
  });
});
popupBody.appendChild(italicButton);

  const rainbowButton = document.createElement("button");
  rainbowButton.textContent = "Make it Rainbow";
  rainbowButton.addEventListener("click", () => {
    document.body.style.backgroundImage = "linear-gradient(to left, red, orange, yellow, green, blue, indigo, violet";
  });
  popupBody.appendChild(rainbowButton);
    function addCheeseButton() {
   
    var button = document.createElement("button");
    button.innerHTML = "Change Background to Cheese";
    button.addEventListener("click", function() {
      document.body.style.backgroundImage = "url('https://bookmarklet-thingy.hendrikvan2.repl.co/chese.jpg')";
    });
    popupBody.appendChild(button);
  }

  // Call the function to add the cheese button
  addCheeseButton();
  
  function addTrollButton() {

    var button = document.createElement("button");
    button.innerHTML = "Change Background to Troll face";
    button.addEventListener("click", function() {
      document.body.style.backgroundImage = "url('https://bookmarklet-thingy.hendrikvan2.repl.co/trolo.png')";
    });
    popupBody.appendChild(button);
  }

  // Call the function to add the troll button
  addTrollButton();

  function addInfiniteButton() {

    var button = document.createElement("button");
    button.innerHTML = "Give youself infinite cookies in cookie clicker (https://orteil.dashnet.org/cookieclicker/)";
    button.addEventListener("click", function() {
    
      var script = document.createElement('script');
      script.textContent = 'console.log(Game.cookies=Infinity);';
      document.body.appendChild(script);
    });
    popupBody.appendChild(button);
  }

  // Call the function to add the troll button
  addInfiniteButton();

  function addEditButton() {

    var button = document.createElement("button");
    button.innerHTML = "Make page editable";
    button.addEventListener("click", function() {
      document.body.contentEditable = true; void 0;
    });
    popupBody.appendChild(button);
  }

  // Call the function to add the troll button
  addEditButton();

  function addNonEditButton() {

    var button = document.createElement("button");
    button.innerHTML = "Make page Non editable";
    button.addEventListener("click", function() {
      document.body.contentEditable = false; void 0;
    });
    popupBody.appendChild(button);
  }

  // Call the function to add the troll button
  addNonEditButton();

  function addMeberButton() {

    var button = document.createElement("button");
    button.innerHTML = "Give yourself crazy things in cookie clicker";
    button.addEventListener("click", function() {
      var script = document.createElement('script');
      script.textContent = 'console.log(Game.RuinTheFun());';
      document.body.appendChild(script);
    });
    popupBody.appendChild(button);
  }

  // Call the function to add the troll button
  addMeberButton();

  function uwu() {

    var button = document.createElement("button");
    button.innerHTML = "Give yourself max towers in blooket tower defense 1";
    button.addEventListener("click", function() {
      alert("e")
    })
    
    popupBody.appendChild(button);
  }

  // Call the function to add the troll button
  uwu();


  closeButton.addEventListener('click', destroyWindow, false);
  closeButton.textContent = '×';
  closeButton.style.borderRadius = "20px";
  popupHeader.appendChild(popupHeaderTitle);
  popupHeader.appendChild(closeButton);
  popupEl.appendChild(popupHeader);
  popupEl.appendChild(popupBody);
  document.body.appendChild(popupEl);
  draggable(popupHeader);
  function destroyWindow(e) {
    closeButton.removeEventListener('click', destroyWindow, false);
    popupHeader.removeChild(closeButton);
    popupEl.removeChild(popupHeader);
    popupEl.removeChild(popupBody);
    document.body.removeChild(popupEl);
  }
  /* Source: https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/ */
  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  /* Source: https://gist.github.com/remarkablemark/5002d27442600510d454a5aeba370579 */
  function draggable(el) {
    var initialOffset = offset(el.parentElement);
    var isMouseDown = false;
    var currPos = { x : 0, y : 0 };
    var elPos = { x : initialOffset.left, y : initialOffset.top };
    el.parentElement.addEventListener('mousedown', onMouseDown);
    function onMouseDown(event) {
      isMouseDown = true;
      currPos.x = event.clientX;
      currPos.y = event.clientY;
      el.parentElement.style.cursor = 'move';
    }
    el.parentElement.addEventListener('mouseup', onMouseUp);
    function onMouseUp(event) {
      isMouseDown = false;
      elPos.x = parseInt(el.parentElement.style.left) || 0;
      elPos.y = parseInt(el.parentElement.style.top) || 0;
      el.parentElement.style.cursor = 'auto';
    }
    document.addEventListener('mousemove', onMouseMove);
    function onMouseMove(event) {
      if (!isMouseDown) return;
      var delta = { x : event.clientX - currPos.x, y: event.clientY - currPos.y };
      var pos = { x : elPos.x + delta.x, y : elPos.y + delta.y };
      if (pos.x < 0) {
        pos.x = 0;
      } else if (pos.x + el.parentElement.offsetWidth > document.documentElement.clientWidth) {
        pos.x = document.documentElement.clientWidth - el.parentElement.offsetWidth;
      }
      if (pos.y < 0) {
        pos.y = 0;
      } else if (pos.y + el.parentElement.offsetHeight > document.documentElement.clientHeight) {
        pos.y = document.documentElement.clientHeight - el.parentElement.offsetHeight;
      }
      el.parentElement.style.left = pos.x + 'px';
      el.parentElement.style.top = pos.y + 'px';
    }
  }
})(window);
