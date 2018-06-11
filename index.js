// document.body.innerHTML = "Hello world!";

let main = document.createElement('div');
main.className = 'divContainer';
document.body.appendChild(main);

for(let i=0;i<20;i++) {
    const rowDiv=document.createElement('div');
    rowDiv.className = 'rowDivContainer';
    main.appendChild(rowDiv);

    for(let j=0;j<20;j++) {
        const div=document.createElement('div');
        //div.innerHTML = 'red';
        div.className='divElem';
        div.addEventListener("click",(e)=>{
            e.target.className='colorChange';
            console.log('e------->',e.target.innerHTML);
        });
        rowDiv.appendChild(div);
    }
}
