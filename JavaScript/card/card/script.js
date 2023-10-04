//container
let container=document.createElement('section');
container.id='container';
container.style.display='flex';
container.justifyContent='center';
document.body.appendChild(container);
console.log(container);

//flex
let rows=document.createElement('div');
rows.className='rows';
rows.style.display='flex';
container.appendChild(rows);
console.log(rows);

//client(david) 
let client=document.createElement('div');
client.className='client';
client.style.margin='10px';
client.style.backgroundColor="#dbf0f6";
client.style.width='190px';
client.style.height='274px';
client.style.padding='10px'
client.style.borderRadius='6px 6px 0 0';
rows.appendChild(client);
console.log(client);

//image
let img=document.createElement('img');
img.src=("./../images/boy-3.jpg");
client.appendChild(img);
img.style.width='100%';
img.style.height='60%';
img.style.borderRadius='6px 6px 0 0';
console.log(img);

//name

let strong=document.createElement('strong');
strong.innerHTML='Sarah';
strong.style.display='block';
strong.style.paddingTop='5px';
strong.style.fontSize='20px';
strong.style.textAlign='center';
strong.style.color='#1717a1';
client.appendChild(strong);

//break
// let br = document.createElement('br');
// client.appendChild(br);

//role
let span=document.createElement('span');
span.innerHTML='Web Developer';
span.style.display='block';
span.style.textAlign='center';
span.style.color='darkBlue'
client.appendChild(span);

//description
let description =document.createElement('p');
description.innerHTML='Maintaining client records and documenting processes';
description.style.margin='10px 5px';
client.appendChild(description);

//second
//client(sara)
let client2=document.createElement('div');
client2.className='client';
client2.style.margin='10px';
client2.style.backgroundColor="#e0f6e0";
client2.style.width='190px';
client2.style.height='274px';
client2.style.padding='10px'
client2.style.borderRadius='6px 6px 0 0';
rows.appendChild(client2);
console.log(client2);

//image
let img2=document.createElement('img');
img2.src=("./../images/boy-7.jpg");
client2.appendChild(img2);
img2.style.width='100%';
img2.style.height='60%';
img2.style.borderRadius='6px 6px 0 0'
console.log(img2);

//name
let strong2=document.createElement('strong');
strong2.innerHTML='David Dill';
strong2.style.display='block';
strong2.style.paddingTop='5px';
strong2.style.fontSize='20px';
strong2.style.textAlign='center';
strong2.style.color='green'
client2.appendChild(strong2);

//role
let span2=document.createElement('span');
span2.innerHTML='Product Manager';
span2.style.display='block';
span2.style.textAlign='center'
span2.style.color='#38973d'
client2.appendChild(span2);

//description
let description2 =document.createElement('p');
description2.innerHTML='Maintaining client records and documenting processes';
description2.style.margin='10px 5px';
client2.appendChild(description2);

//client(jasmine)
let client3=document.createElement('div');
client3.className='client';
client3.style.margin='10px';
client3.style.backgroundColor="#f7def8";
client3.style.width='190px';
client3.style.height='274px';
client3.style.padding='10px'
client3.style.borderRadius='6px 6px 0 0';
rows.appendChild(client3);
console.log(client3);

//image
let img3=document.createElement('img');
img3.src=("./../images/boy-5.jpg");
client3.appendChild(img3);
img3.style.width='100%';
img3.style.height='60%';
img3.style.borderRadius='6px 6px 0 0'
console.log(img3);

//name
let strong3=document.createElement('strong');
strong3.innerHTML='Ananya';
strong3.style.display='block';
strong3.style.paddingTop='5px';
strong3.style.fontSize='20px';
strong3.style.textAlign='center';
strong3.style.color='#d70663';
client3.appendChild(strong3);

//role
let span3=document.createElement('span');
span3.innerHTML='Web Developer';
span3.style.display='block';
span3.style.textAlign='center';
span3.style.color='#f5468f';
client3.appendChild(span3);

//description
let description3 =document.createElement('p');
description3.innerHTML='Maintaining client records and documenting processes';
description3.style.margin='10px 5px';
client3.appendChild(description3);

