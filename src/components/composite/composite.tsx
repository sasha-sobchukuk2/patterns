import React from 'react';

import img from './img.png'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'
import img_4 from './img_4.png'

const Composite = () => {
    // машина в машині багато частин які складаються з менших частин
    // задача вирахувати ціну всіх частин разом

    class Equipment {
        price: number | undefined
        name: string | undefined

        getPrice() {
            return this.price || 0
        }

        getName() {
            return this.name;
        }

        setName(name: string) {
            this.name = name
        }

        setPrice(price: number) {
            this.price = price
        }
    }

    class Engine extends Equipment {
        constructor() {
            super();
            this.setName(`Engine`)
            this.setPrice(1)
        }
    }

    class Body extends Equipment {
        constructor() {
            super();
            this.setName(`Body`)
            this.setPrice(2)
        }
    }

    class Tools extends Equipment {
        constructor() {
            super();
            this.setName(`Tools`)
            this.setPrice(3)
        }
    }

    class Composite extends Equipment {
        // клас що вираховуватиме ціну
        equipments: Equipment[]

        constructor() {
            super();
            this.equipments = []
        }

        add(equipment: Equipment) {
            this.equipments.push(equipment)
        }

        getPrice(): number {
            return this.equipments
                .map(equipment => equipment.getPrice())
                .reduce((prev, current) => prev + current);
        }
    }

    class Car extends Composite{
        constructor() {
            super();
            this.setName('audio')
        }
    }

    const myCar = new Car()

    myCar.add(new Engine())
    myCar.add(new Body())
    myCar.add(new Tools())

    console.log(`${myCar.getName()} price is ${myCar.getPrice()}`)

    return (
        <div>
            <h1>composite </h1>
            <h2>
                структурний патерн
            </h2>
            <h3>
                дозволяє згрупувати багато обєктів
                в деревоподібну структуру, і працювати з нею як
                з одним обєктом.

            </h3>
            <h4>
                <li>
                    обєкт зі вложеними обєктами,
                    кореневий обєкт ніц не знає про вложенні обєкти
                    а просто  реалізовує ті ж методи що й вложені,
                    тільки не викликає свої методи, а передає це на низ
                </li>
                <li>єдиний інтерфейс виклику-
                    кореневий компонент нічого не робить
                    а передає виклики своїм потомкам
                </li>
            </h4>
            <div>
                <div><img src={img} alt=""/></div>
                <div><img src={img_1} alt=""/></div>
                <div><img src={img_2} alt=""/></div>
                <div><img src={img_3} alt=""/></div>
                <div><img src={img_4} alt=""/></div>
            </div>
            <a href="https://www.youtube.com/watch?v=H-CwPjUB5Rw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=11">link</a>
            <div><pre>{`
    // машина в машині багато частин які складаються з менших частин
    // задача вирахувати ціну всіх частин разом

    class Equipment {
        price: number | undefined
        name: string | undefined

        getPrice() {
            return this.price || 0
        }

        getName() {
            return this.name;
        }

        setName(name: string) {
            this.name = name
        }

        setPrice(price: number) {
            this.price = price
        }
    }

    class Engine extends Equipment {
        constructor() {
            super();
            this.setName(\`Engine\`)
            this.setPrice(1)
        }
    }

    class Body extends Equipment {
        constructor() {
            super();
            this.setName(\`Body\`)
            this.setPrice(2)
        }
    }

    class Tools extends Equipment {
        constructor() {
            super();
            this.setName(\`Tools\`)
            this.setPrice(3)
        }
    }

    class Composite extends Equipment {
        // клас що вираховуватиме ціну
        equipments: Equipment[]

        constructor() {
            super();
            this.equipments = []
        }

        add(equipment: Equipment) {
            this.equipments.push(equipment)
        }

        getPrice(): number {
            return this.equipments
                .map(equipment => equipment.getPrice())
                .reduce((prev, current) => prev + current);
        }
    }

    class Car extends Composite{
        constructor() {
            super();
            this.setName('audio')
        }
    }

    const myCar = new Car()

    myCar.add(new Engine())
    myCar.add(new Body())
    myCar.add(new Tools())

    console.log(\`{myCar.getName()} price is {myCar.getPrice()}\`)
    
            `}</pre></div>
        </div>
    );
};

export default Composite;