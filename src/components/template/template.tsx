import React from 'react';
import img from "../memento/img.png";
import img_1 from "../memento/img_1.png";
import img_2 from "../memento/img_2.png";
import img_3 from "../memento/img_3.png";

const Template = () => {


    class Builder {
        // addEngine:any
        // installChassis:any
        // addElectronic:any
        // collectAccessories:any

        build() {
            // білд шаблонний метод
            // @ts-ignore
            this.addEngine()
            // @ts-ignore
            this.installChassis()
            // @ts-ignore
            this.addElectronic()
            // @ts-ignore
            this.collectAccessories()

        }
    }

    class TeslaBuilder extends Builder{

        addEngine(){
            console.log('Add Electronic Engine')
        }
        installChassis(){
            console.log('Add special electronic')
        }
        addElectronic(){
            console.log('Add special electronic')
        }
        collectAccessories(){
            console.log('collect accessories')
        }


    }

    class BmwBuilder extends Builder{

        addEngine(){
            console.log('Add Bmw Engine')
        }
        installChassis(){
            console.log('Add Bmw electronic')
        }
        addElectronic(){
            console.log('Add special electronic')
        }

        collectAccessories(){
            console.log('collect Bmw  accessories')
        }
    }

    const teslaBuilder = new TeslaBuilder();
    const bmwBuilder = new BmwBuilder()

    teslaBuilder.build()
    bmwBuilder.build()







    return (
        <div>
            <h1>template шаблон - поведінковий патерн
                що оприділяє базові шаги воконання алгоритму
                і виконання цих агів делигує на відповідні методи або підкласи
            </h1>
            <div>
                teslaBuilder
                bmwBuilder
                наслідуються від одного класу
                і мають одну функцію зборки,
                яку можемо викликати і в того і в того
                але відповідно і прописувати їх потрібно і тут і  тут

            </div>
            <div>
                патерн що оприділяє шаблонну поведінку алгоритмів
                що мають однаковий інтерфейс взаємодії

            </div>
            <h2>
                як цех автомобіля
            </h2>
            <a href="https://www.youtube.com/watch?v=kFDEyshivVc&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=19">link</a>

            <div>
                <div><img src={img} alt=""/></div>
                <div><img src={img_1} alt=""/></div>
                <div><img src={img_2} alt=""/></div>
                <div><img src={img_3} alt=""/></div>
            </div>
            <div><pre>{`
    class Builder {
        // addEngine:any
        // installChassis:any
        // addElectronic:any
        // collectAccessories:any

        build() {
            // білд шаблонний метод
            // @ts-ignore
            this.addEngine()
            // @ts-ignore
            this.installChassis()
            // @ts-ignore
            this.addElectronic()
            // @ts-ignore
            this.collectAccessories()

        }
    }

    class TeslaBuilder extends Builder{

        addEngine(){
            console.log('Add Electronic Engine')
        }
        installChassis(){
            console.log('Add special electronic')
        }
        addElectronic(){
            console.log('Add special electronic')
        }
        collectAccessories(){
            console.log('collect accessories')
        }


    }

    class BmwBuilder extends Builder{

        addEngine(){
            console.log('Add Bmw Engine')
        }
        installChassis(){
            console.log('Add Bmw electronic')
        }
        addElectronic(){
            console.log('Add special electronic')
        }

        collectAccessories(){
            console.log('collect Bmw  accessories')
        }
    }

    const teslaBuilder = new TeslaBuilder();
    const bmwBuilder = new BmwBuilder()

    teslaBuilder.build()
    bmwBuilder.build()
            `}</pre></div>


        </div>
    );
};

export default Template;