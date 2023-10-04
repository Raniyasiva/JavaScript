//container
let container=document.createElement('section');
container.id='container';
container.style.display='flex';
document.body.appendChild(container);
console.log(container);

//flex
let rows=document.createElement('div');
rows.className='rows';
rows.style.display='flex';
rows.style.paddingLeft='20px';

container.appendChild(rows);
console.log(rows);

//client rows
let client=document.createElement('div');
client.className='client';
rows.appendChild(client);

let client2=document.createElement('div');
client2.className='client';
rows.appendChild(client2);

let client3=document.createElement('div');
client3.className='client';
rows.appendChild(client3);

let bg=document.querySelectorAll('.client');
for(let i=0;i<bg.length;i++)
{
bg[i].style.backgroundColor="#dbf0f6";
bg[i].style.marginLeft='20px';
bg[i].style.width='190px';
bg[i].style.height='274px';
bg[i].style.padding='10px'
bg[i].style.borderRadius='6px 6px 0 0';
}
//clients images

let img=document.createElement('img');
img.setAttribute("class","pic");
img.src=("./images/boy-3.jpg");
client.appendChild(img);

let img2=document.createElement('img');
img2.setAttribute("class","pic");
img2.src=("./images/boy-7.jpg");
client2.appendChild(img2);

let img3=document.createElement('img');
img3.setAttribute("class","pic");
img3.src=("./images/boy-5.jpg");
client3.appendChild(img3);

let image=document.querySelectorAll('.pic');
let j;
for(j=0;j<image.length;j++)
{
    image[j].style.width='100%';
    image[j].style.height='60%';
    image[j].style.borderRadius='6px 6px 0 0';
}

//client-name

let strong=document.createElement('strong');
strong.innerHTML='Sarah';
client.appendChild(strong);

let strong2=document.createElement('strong');
strong2.innerHTML='David';
client2.appendChild(strong2);

let strong3=document.createElement('strong');
strong3.innerHTML='Ananya';
client3.appendChild(strong3);

let one=document.querySelectorAll('strong');
let k;
for(k=0;k<one.length;k++)
{
    one[k].style.display='block';
    one[k].style.paddingTop='5px';
    one[k].style.fontSize='20px';
    one[k].style.textAlign='center';
    one[k].style.color='#1717a1';
}
//designation

let span=document.createElement('span');
span.innerHTML='Web Developer';
client.appendChild(span);

let span2=document.createElement('span');
span2.innerHTML='Product Manager';
client2.appendChild(span2);

let span3=document.createElement('span');
span3.innerHTML='Frontend developer';
client3.appendChild(span3);

let role=document.querySelectorAll('span');
let l;
for(l=0;l<role.length;l++)
{
role[l].style.display='block';
role[l].style.textAlign='center';
role[l].style.color='darkBlue';
}

//description
let description =document.createElement('p');
description.innerHTML='Maintaining client records and documenting processes';
client.appendChild(description);

let description2 =document.createElement('p');
description2.innerHTML='Maintaining client records and documenting processes';
client2.appendChild(description2);

let description3 =document.createElement('p');
description3.innerHTML='Maintaining client records and documenting processes';
client3.appendChild(description3);

let describe=document.querySelectorAll('p');
let m;
for(m=0;m<describe.length;m++)
{
    describe[m].style.margin='10px 5px';
}