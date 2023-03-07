import React from 'react';
import {findAllByDisplayValue} from "@testing-library/react";
import img from "../memento/img.png";
import img_1 from "../memento/img_1.png";
import img_2 from "../memento/img_2.png";
import img_3 from "../memento/img_3.png";

const Visitor = () => {

    class Auto {
        accept(visitor:any){
            visitor(this)
        }
    }

    class Tesla extends Auto{
        info(){
            return `it is tesla car`
        }
    }
    class Bmw extends Auto{
        info(){
            return `it is Bmw car`
        }
    }
    class Audio extends Auto {
        info(){
            return `it is Audio car`
        }
    }

    function exportVisitor(auto:any){
        if(auto instanceof Tesla){
            // @ts-ignore
            auto.export = console.log(`exported data:${auto.info()}`)
        }
        if(auto instanceof Bmw){
            // @ts-ignore
            auto.export = console.log(`exported data:${auto.info()}`)
        }
        if(auto instanceof Audio){
            // @ts-ignore
            auto.export = console.log(`exported data:${auto.info()}`)
        }
    }

    const tesla = new Tesla()
    const bmw = new Bmw()

    tesla.accept(exportVisitor)

    bmw.accept(exportVisitor)


    
    return (
        <div>

            <div>
                visitor - суть в том ущо він додає нову
                функціональність вже існуючим класам.
                причому він це робить не змінюючи ісходний
                код класів.
                Розширяє функціонал класів не змінюючи
                його реалізацію
            </div>

            <a href="https://www.youtube.com/watch?v=dyg13zxD9xw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=20">link</a>

            <div>
                <div><img src={img} alt=""/></div>
                <div><img src={img_1} alt=""/></div>
                <div><img src={img_2} alt=""/></div>
                <div><img src={img_3} alt=""/></div>
            </div>
            <div><pre>{`
    class Auto {
        accept(visitor:any){
            visitor(this)
        }
    }

    class Tesla extends Auto{
        info(){
            return \`it is tesla car\`
        }
    }
    class Bmw extends Auto{
        info(){
            return \`it is Bmw car\`
        }
    }
    class Audio extends Auto {
        info(){
            return \`it is Audio car\`
        }
    }

    function exportVisitor(auto:any){
        if(auto instanceof Tesla){
            // @ts-ignore
            auto.export = console.log(\`exported data:{auto.info()}\`)
        }
        if(auto instanceof Bmw){
            // @ts-ignore
            auto.export = console.log(\`exported data:{auto.info()}\`)
        }
        if(auto instanceof Audio){
            // @ts-ignore
            auto.export = console.log(\`exported data:{auto.info()}\`)
        }
    }

    const tesla = new Tesla()
    const bmw = new Bmw()

    tesla.accept(exportVisitor)

    bmw.accept(exportVisitor)
            `}</pre></div>

        </div>



    );
};

export default Visitor;