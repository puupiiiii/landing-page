//style nav bar
const navBar = document.getElementById('navbar');
navBar.style.cssText = 'background-color: #333; cursor: pointer; width: 100%; position: fixed; top: 0; z-index: 2; opacity: 0';

//show and hide navbar on scrolling
const scrollingShowNav;
window.addEventListener('scroll', function ( event ) {
    navBar.style.opacity = 1;
	window.clearTimeout( scrollingShowNav );
	scrollingShowNav = setTimeout(function() {
        navBar.style.opacity = 0;
	}, 1000);
}, false);

// show and hide navbar on hover
function showNavbar(x) {
    x.style.opacity = 1;
}

function hideNavbar(x) {
    x.style.opacity = 0;
}

//create the menu (ul) 
const menu = document.createElement('ul');
menu.classList = 'menu';

// create ul (li)s and (a)s
const menuItems = ['First Sec', 'Second Sec', 'Third Sec', 'Forth Sec'];
const linksId = ['firstSec', 'secondSec', 'thirdSec', 'forthSec'];

for (let i = 0; i < menuItems.length; i++) {
    const item = document.createElement('li');
    const link = document.createElement('a');

    if (i === 0) {
        link.textContent = menuItems[i];
        link.setAttribute('href', '#' + linksId[i]);
        link.setAttribute('class', 'click active');
    } else {
        link.textContent = menuItems[i];
        link.setAttribute('href', '#' + linksId[i]);
        link.setAttribute('class', 'click');
    }
    
    //append (a)s to (li)s
    item.appendChild(link);

    //append (li)s to ul
    menu.appendChild(item);
}

//appent menu to the nav bar
navBar.appendChild(menu);


// add class active to each clicked nav bar link and remove from siblings
// add class active to active section and remove from siblings
const sections = document.getElementsByClassName('section');
const links = document.getElementsByClassName('click');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', ()=> {
        if (links[i].classList.contains('active') && sections[i].classList.contains('active')) {
            links[i].classList.remove('active');
            sections[i].classList.remove('active');
        } else {
            for (let x = 0; x < links.length; x++) {
                links[x].classList.remove('active');
                sections[x].classList.remove('active');
            }
            links[i].classList.add('active');
            sections[i].classList.add('active');
        }
    });
}

//smooth scrolling to taget section when click on navbar links
// (function() {
// 	scrollTo();
// })();

// function scrollTo() {
// 	const linksA = document.querySelectorAll('.link');
// 	linksA.forEach(each => (each.onclick = scrollAnchors));
// }

// function scrollAnchors(e, respond = null) {
// 	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
// 	e.preventDefault();
// 	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
// 	const targetAnchor = document.querySelector(targetID);
// 	if (!targetAnchor) return;
// 	const originalTop = distanceToTop(targetAnchor);
// 	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
// 	const checkIfDone = setInterval(function() {
// 		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
// 		if (distanceToTop(targetAnchor) === 0 || atBottom) {
// 			targetAnchor.tabIndex = '-1';
// 			targetAnchor.focus();
// 			window.history.pushState('', '', targetID);
// 			clearInterval(checkIfDone);
// 		}
// 	}, 100);
// }

function scrollTo() {
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		if ((link.href && link.href.indexOf('#') != -1) && ((link.pathname == location.pathname) || ('/' + link.pathname == location.pathname)) && (link.search == location.search)) {
			link.onclick = scrollAnchors;
		}
	}
}


//scrolling activate the nav bar links and sections
window.addEventListener('scroll', () => {
    for (let m=0 ; m<sections.length ; m++) {
        if (sections[m].getBoundingClientRect().top <= 200 ) {
            sections[m].classList.add('active');
            if(links[m].classList.contains('active')){
                links[m].classList.remove('active');
            } else {
                for (let x = 0; x < links.length; x++){
                    links[x].classList.remove('active');
                }
                links[m].classList.add('active');
            }
            links[m].classList.add('active');
        } else {
            sections[m].classList.remove('active');
            links[m].classList.remove('active');
        }
    }
});

//show and hide scroll up btn on scrolling
const scrollUpBtn = document.getElementById('scroll-up');
window.addEventListener('scroll', ()=> {
    if (window.pageYOffset > 400) {
        scrollUpBtn.style.display='block';
    } else {
        scrollUpBtn.style.display='none';
    }
});

//scroll up the window by clicking on scrollup btn
scrollUpBtn.addEventListener('click' , ()=> {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

//collapse and uncollapse sections
const collapseIcons = document.getElementsByClassName('collapse');
const secContents = document.getElementsByClassName('section-content');
const uncollapseIcons = document.getElementsByClassName('uncollapse')

for (let c = 0; c < collapseIcons.length; c++) {
    collapseIcons[c].addEventListener('click', ()=> {
        secContents[c].style.display= 'none';
        collapseIcons[c].style.display='none';
        uncollapseIcons[c].style.display='block';
    });
}

for (let u = 0; u < uncollapseIcons.length; u++) {
    uncollapseIcons[u].addEventListener('click', ()=> {
        secContents[u].style.display = 'block';
        uncollapseIcons[u].style.display='none';
        collapseIcons[u].style.display='block';
    });
    
}
