import React from 'react';


import img  from './img.png'
import img_1  from './img_1.png'
import img_2  from './img_2.png'
import img_3  from './img_3.png'
import img_4  from './img_4.png'
import img_5  from './img_5.png'

const Decorator = () => {

    class Car {
        price: number;
        model: string

        constructor() {
            this.price = 1000;
            this.model = 'Car';
        }

        getPrice() {
            return this.price;
        }

        getDescription() {
            return this.model;
        }
    }

    class Tesla extends Car {
        price: number
        model: string

        constructor() {
            super();
            this.price = 1;
            this.model = 'Tesla';
        }
    }

    class Autopilot extends Car {
        car: any

        constructor(car: any) {
            super()
            this.car = car
        }

        getPrice() {
            return this.car.getPrice() + 5000;
        }

        getDescription() {
            return `${this.car.getDescription()} with autopilot`
        }
    }

    class Packtronic extends Car {
        car: any

        constructor(car: any) {
            super()
            this.car = car
        }

        getPrice() {
            return this.car.getPrice() + 3000
        }

        getDescription() {
            return `${this.car.getDescription()} with packtronic`
        }
    }

    let tesla = new Tesla();
    tesla = new Autopilot(tesla)
    tesla = new Packtronic(tesla)

    console.log(tesla.getPrice(), tesla.getDescription())

    // let tesla = new Tesla()

    return (
        <div>
            <h1>декоратор</h1>
            <h2>вроді струкурний</h2>
            <h2>
                 з його допомогою можемо добавляти до обєктів
                нові властивості та методи, і тим самим розширювати
                його можливості

            </h2>
            <a href="https://www.youtube.com/watch?v=gXvKHKQB2DI&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=7">link</a>
            <div><img src={img} alt=""/></div>
            <div><img src={img_1} alt=""/></div>
            <div><img src={img_2} alt=""/></div>
            <div><img src={img_3} alt=""/></div>
            <div><img src={img_4} alt=""/></div>
            <div><img src={img_5} alt=""/></div>
            <pre>
                {`
    class Car {
        price: number;
        model: string

        constructor() {
            this.price = 1000;
            this.model = 'Car';
        }

        getPrice() {
            return this.price;
        }

        getDescription() {
            return this.model;
        }
    }

    class Tesla extends Car {
        price: number
        model: string

        constructor() {
            super();
            this.price = 1;
            this.model = 'Tesla';
        }
    }

    class Autopilot extends Car {
        car: any

        constructor(car: any) {
            super()
            this.car = car
        }

        getPrice() {
            return this.car.getPrice() + 5000;
        }

        getDescription() {
            return \`{this.car.getDescription()} with autopilot\`
        }
    }

    class Packtronic extends Car {
        car: any

        constructor(car: any) {
            super()
            this.car = car
        }

        getPrice() {
            return this.car.getPrice() + 3000
        }

        getDescription() {
            return \`{this.car.getDescription()} with packtronic\`
        }
    }

    let tesla = new Tesla();
    tesla = new Autopilot(tesla)
    tesla = new Packtronic(tesla)

    console.log(tesla.getPrice(), tesla.getDescription())

    // let tesla = new Tesla()
                    `}
            </pre>
        </div>
    );
};

export default Decorator;