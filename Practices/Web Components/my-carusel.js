// export class MyCarusel extends HTMLElement {

//     constructor() {
//         super();
//     }

//     connectedCallback() {
//         this.root = this.attachShadow({ mode: 'open' });
//         this.root.innerHTML = `
//         <div>
//         <div style="color: red;">
//             <slot name="text"></slot>
//         </div>
//         <div style="color: blue;">
//             <slot name="name"></slot>
//         </div>
//     </div>`;
//     }

// }


///////////////////////////////////////////////////////

export class MyCarusel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = template;

        this.images = this.root.querySelector('slot[name="images"]').assignedElements();
        this.index = 0;
        this.images[this.index].style.display = 'block';

        this.root.getElementById('prev').addEventListener('click', () => {
            if (this.index >= 1) {
                this.images[this.index].style.display = 'none';
                this.index--;
                this.images[this.index].style.display = 'block';
            }
        });

        this.root.getElementById('next').addEventListener('click', () => {
            if (this.index < this.images.length - 1) {
                this.images[this.index].style.display = 'none';
                this.index++;
                this.images[this.index].style.display = 'block';
            }

        });
    }

}


let template = `
<style>
button {
    background-color: green;
    width: 100px;
    height: 50px;
}

::slotted(img){
    width: 100%;
    height: 300px; 
    object-fit: cover;
    display:none;
}
</style>
    <div>
    <div style="color: red;">
        <slot name="title"></slot>
    </div> 
    <button id="prev">◀</button>
    <button id="next">▶</button>
    <div style="color: blue;">
        <slot name="images"></slot>
    </div>
    
</div>`;