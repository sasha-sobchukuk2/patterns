import React from 'react';

import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'

const Proxy = () => {

    class CarAccess {
        // оригінальний обєкт
        open(){
            console.log(`opening car door`)
        }
        close(){
            console.log(`Closing the car door`)
        }
    }

    class SecuritySystem{
        // проксі оюєкт
        door:any
        constructor(door:any) {
            this.door = door
        }
        open(password:string){
            if(this.authenticate(password)){
                this.door.open();
            }else{
                console.log(`Access denied`)
            }
        }
        authenticate(password:string){
            return password === `Ilon`
        }
        close(){
            this.door.close();
        }
    }

    const door = new SecuritySystem(new CarAccess())

    door.open('sasha')
    door.open('Ilon')
    door.close()


    return (
        <div>
            <h1>
                Proxy замісник
            </h1>
            <h2>
                структурний паттерн
                що замість реальних обєктів
                дає спеціальні обєкти замісники.
                ці обєкти перехоплюють виклик до оригіналів
                і дозволяють зробити щось до
                чи після звернення до оригінального обєкта.
                Прослойка що дозволяє провести додаткові
                маніпуляції, до того як віддати контроль.
                <span>наприклад авторизація</span>
            </h2>
            <h3>види проксі:
                <li>віртуальний -аналог лінивої загрузки </li>
                <li>логувальний проксі - збереження історії звернень</li>
                <li>захищаючий те що переглянули</li>
                <li>кешируючий - часткове кешування результатів запиту</li>
            </h3>
            <a href="https://www.youtube.com/watch?v=9GvBg7pTOUY&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=9">link</a>
            <div><img src={img} alt=""/></div>
            <div><img src={img_1} alt=""/></div>
            <div><img src={img_2} alt=""/></div>
            <div><img src={img_3} alt=""/></div>
            <div><pre>{`
    class CarAccess {
        // оригінальний обєкт
        open(){
            console.log(\`opening car door\`)
        }
        close(){
            console.log(\`Closing the car door\`)
        }
    }

    class SecuritySystem{
        // проксі оюєкт
        door:any
        constructor(door:any) {
            this.door = door
        }
        open(password:string){
            if(this.authenticate(password)){
                this.door.open();
            }else{
                console.log(\`Access denied\`)
            }
        }
        authenticate(password:string){
            return password === \`Ilon\`
        }
        close(){
            this.door.close();
        }
    }

    const door = new SecuritySystem(new CarAccess())

    door.open('sasha')
    door.open('Ilon')
    door.close()
            `}</pre></div>


        </div>
    );
};

export default Proxy;