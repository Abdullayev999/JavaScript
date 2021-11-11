// export class MyTime extends HTMLElement {

//     constructor() {
//         super();
//         console.log('Constructor');
//     }

//     connectedCallback() {
//             console.log('Connected');
//             this.hour12 = JSON.parse(this.getAttribute('hour12'));
//             this.StartTimer();





//             //  this.innerHTML = new Date().toTimeString();
//             //is.innerHTML = new Date().toLocaleTimeString( );
//             //     this.innerHTML = new Date().toLocaleTimeString('en-US', { hour12: true });
//             //this.innerHTML = new Date().toLocaleTimeString('en-US', { hour12: false });
//             //  this.innerHTML = new Date().toLocaleString();
//         }
//         //tipa destructora
//     disconnectedCallback() {
//         clearInterval(this.timerId);
//     }

//     //reakciya posle izmineniye atributa
//     attributeChangedCallback(name, oldValue, newValue) {
//         if (name == 'hour12') {
//             this.hour12 = JSON.parse(newValue);
//             clearInterval(this.timerId);
//             this.StartTimer();
//         }
//     }

//     StartTimer() {
//         this.timerId = setInterval(() => {
//             this.innerHTML = `Time : ${new Date().toLocaleTimeString('en-US', { hour12: this.hour12 })}`;
//         }, 1000);
//     }

//     //sledit za izmenennimi atributami
//     static get observedAttributes() {
//         return ['hour12'];
//     }
// }


// //registraciya novoqo komponentsa
// // kak v html nazivaetsa / i klass kotoriy budet im upravlyat
// //customElements.define('my-time', MyTime);



// //////////////////////////////////////////////////////


// export class MyTime extends HTMLElement {

//     constructor() {
//         super();
//     }

//     connectedCallback() {
//         this.hour12 = JSON.parse(this.getAttribute('hour12'));

//         //open -- druqim js mojno scitivat
//         //close -- druqim js nelzya scitivat
//         this.root = this.attachShadow({ mode: 'open' });
//     }

//     disconnectedCallback() {
//         clearInterval(this.timerId);
//     }

//     //reakciya posle izmineniye atributa
//     attributeChangedCallback(name, oldValue, newValue) {
//         if (name == 'hour12') {
//             this.hour12 = JSON.parse(newValue);
//             clearInterval(this.timerId);
//             this.StartTimer();
//         }
//     }

//     StartTimer() {
//         this.timerId = setInterval(() => {
//             this.root.innerHTML = `Time : ${new Date().toLocaleTimeString('en-US', { hour12: this.hour12 })}`;
//         }, 1000);
//     }

//     //sledit za izmenennimi atributami
//     static get observedAttributes() {
//         return ['hour12'];
//     }
// }


//////////////////////////////////////////////////////


export class MyTime extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.hour12 = JSON.parse(this.getAttribute('hour12'));
        this.root = this.attachShadow({ mode: 'open' });


        this.root.innerHTML = `  <p>Current time : </p>
        <p id="time">Loading. . .</p>`;
        //toje samoe
        // document.querySelector('#myTimeTemplate').innerHTML;
    }

    disconnectedCallback() {
        clearInterval(this.timerId);
    }


    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'hour12') {
            this.hour12 = JSON.parse(newValue);
            clearInterval(this.timerId);
            this.StartTimer();
        }
    }

    StartTimer() {
        this.timerId = setInterval(() => {
            this.root.getElementById('time').innerText = new Date().toLocaleTimeString('en-US', { hour12: this.hour12 });
            //this.root.innerHTML = `Time : ${new Date().toLocaleTimeString('en-US', { hour12: this.hour12 })}`;
        }, 1000);
    }


    static get observedAttributes() {
        return ['hour12'];
    }
}