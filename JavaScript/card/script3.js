   //container
   let container = document.createElement('section');
   container.id = 'container';
   document.body.appendChild(container)

   function content() {
       let a = document.querySelector('#container');
       a.style.display = 'flex';
       a.style.justifyContent = 'center';
       a.style.marginTop = '100px'
   }

   //flex
   let rows = document.createElement('div');
   rows.className = 'rows';
   container.appendChild(rows);
   rows.style.display = 'flex';

   //client(david) 
   function card() {
       let client = document.createElement('div');
       client.className = 'client';
       rows.appendChild(client);
       client.style.margin = '20px';
       client.style.width = '218px';
       client.style.height = '232px';
       client.style.borderRadius = '0 0 20px 20px';
       client.style.border = '3px solid #f3b7dc';
       client.style.cursor='pointer'

       // let hover=document.querySelectorAll('.client');
       // for(let i=0;i<hover.length;i++){
       //     hover[i].addEventListener('mouseover',()=>(hover[i].style.transform='scale(1.1)'),(hover[i].style.transition='1.5s'));
       //     hover[i].addEventListener('mouseout', () =>hover[i].style.transform = 'initial');
       // }

       //mouseover
         let mouse=document.querySelectorAll('.client');
         for(let i=0;i<mouse.length;i++){
         mouse[i].addEventListener('mouseover',()=>mouse[i].classList.add('client-2'));
         mouse[i].addEventListener('mouseout',()=>mouse[i].classList.remove('client-2'));
         }
        
       //parent
       let parent = document.createElement('div');
       parent.setAttribute("class", "first");
       parent.style.backgroundColor = "#fff";
       client.appendChild(parent);

       //image
       let img = document.createElement('img');
       parent.appendChild(img);

       //parent2
       let parent2 = document.createElement('div');
       parent2.setAttribute("class", "second");
       parent2.style.borderRadius = '0px 0px 20px 20px';
       parent2.style.backgroundColor = "rgb(196 98 167)";
       client.appendChild(parent2);
       //name
       let strong = document.createElement('strong');
       parent2.appendChild(strong);

       //role
       let span = document.createElement('span');
       parent2.appendChild(span);

       //description
       let description = document.createElement('p');
       description.innerHTML = 'Maintaining client records and documenting processes';
       description.style.margin = '10px 5px';
       description.style.paddingBottom = '12px';
       description.style.color = '#fff'
       description.style.textAlign = 'center'
       parent2.appendChild(description);
   }
   function names() {
       let f = document.querySelectorAll('strong');
       let b;
       for (b = 0; b < f.length; b++) {
           f[0].innerHTML = 'Sarah';
           f[1].innerHTML = 'David';
           f[2].innerHTML = 'Jessey';
           f[b].style.color = '#fff';
           f[b].style.display = 'block';
           f[b].style.paddingTop = '5px';
           f[b].style.fontSize = '20px';
           f[b].style.textAlign = 'center';
       }
   }

   function picture() {
       let g = document.querySelectorAll('img');
       let c;
       for (c = 0; c < g.length; c++) {
           g[0].src = ("./images/boy-5.jpg");
           g[1].src = ("./images/boy-7.jpg");
           g[2].src = ("./images/boy-3.jpg");
           g[c].style.width = ("50%");
           g[c].style.borderRadius = ('50%');
           g[c].style.marginLeft = '25%';
           g[c].style.marginTop = '5px';
           g[c].style.border = '5px solid #f3b7dc';
       }
   }

   function role() {
       let f = document.querySelectorAll('span');
       let b;
       for (b = 0; b < f.length; b++) {
           f[0].innerHTML = 'Product Manager';
           f[1].innerHTML = 'Web Developer';
           f[2].innerHTML = 'Software Developer';
           f[b].style.display = 'block';
           f[b].style.textAlign = 'center';
           f[b].style.color = '#fff';
       }
   }
   content();
   card();
   card();
   card();
   names();
   picture();
   role();