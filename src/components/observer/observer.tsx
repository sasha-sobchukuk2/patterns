import React from 'react';
import img from "../memento/img.png";
import img_1 from "../memento/img_1.png";
import img_2 from "../memento/img_2.png";
import img_3 from "../memento/img_3.png";

const Observer = () => {

    class AutoNews{
        news;
        actions:any[]
        constructor() {
            this.news = '';
            this.actions = [];
        }
        setNews(text:any){
            this.news = text
            this.notifyAll()
        }
        notifyAll(){
            return this.actions.forEach(
                subscriber=>subscriber.inform(this)
            )
        }
        register(observer:  Jack ){
            this.actions.push(observer)
        }
        unregister(observer:any){
            this.actions = this.actions.filter(
                el=>!(el instanceof observer)
            )
        }
    }

    class Jack {
        inform(message: AutoNews){
            console.log(`jack has been informed about: ${message.news}`)
        }


    }
    class Max {
        inform(message: AutoNews){
            console.log(`Max  has been informed about: ${message.news}`)
        }
    }

    const autoNews = new AutoNews();
    autoNews.register(new Jack());
    autoNews.register(new Max());

    autoNews.setNews(`New Tesla price is 40 000`)

    return (
        <div>
            <h1>
                observer спостерігач
            </h1>
            <h2>
                поведінковий паттерн
                створює механізм підписки
                що дозволяє одним обєктам
                слідкувати за змінами інших
            </h2>
            <h3>
                коли поведінка залежить
                від даних в одному обєкті
                цей обєк це стор або зберігач
            </h3>
            <a href="https://www.youtube.com/watch?v=LgfWY2bDAtA&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=22">link</a>

            <div>
                <div><img src={img} alt=""/></div>
                <div><img src={img_1} alt=""/></div>
                <div><img src={img_2} alt=""/></div>
                <div><img src={img_3} alt=""/></div>
            </div>
            <div><pre>{`
    class AutoNews{
        news;
        actions:any[]
        constructor() {
            this.news = '';
            this.actions = [];
        }
        setNews(text:any){
            this.news = text
            this.notifyAll()
        }
        notifyAll(){
            return this.actions.forEach(
                subscriber=>subscriber.inform(this)
            )
        }
        register(observer:  Jack ){
            this.actions.push(observer)
        }
        unregister(observer:any){
            this.actions = this.actions.filter(
                el=>!(el instanceof observer)
            )
        }
    }

    class Jack {
        inform(message: AutoNews){
            console.log(\`jack has been informed about: {message.news}\`)
        }


    }
    class Max {
        inform(message: AutoNews){
            console.log(\`Max  has been informed about: {message.news}\`)
        }
    }

    const autoNews = new AutoNews();
    autoNews.register(new Jack());
    autoNews.register(new Max());

    autoNews.setNews(\`New Tesla price is 40 000\`)
            `}</pre></div>
        </div>
    );
};

export default Observer;