import Memento from "./webDev/memento/memento";
import Memento2 from "./webDev/memento/Memento2.";
import Template from "./webDev/template/template";
import Visitor from "./webDev/visitor/Visitor";
import Command from "./webDev/command/command";
import Observer from "./webDev/observer/observer";
import State from "./webDev/state/state";
import Iterator from "./webDev/iterator/iterator";
import Chain from "./webDev/chain/chain";
import Proxy from "./webDev/proxy/proxy";
import Decorator from "./webDev/decorator/decorator";
import Facade from "./webDev/facade/Facade";
import Adapter from "./webDev/adapter/adapter";
import Composite from "./webDev/composite/composite";
import Bridge from "./webDev/bridge/bridge";
import Flyweight from "./webDev/flyweight/flyweight";
import Mediator from "./webDev/Mediator/mediator";
import Strategy from "./webDev/strategy/Strategy";
import Builder from "./webDev/builder/builder";
import Prototype from "./webDev/prototype/prototype";
import AbstractFactory from "./webDev/abstract-factory/abstract-factory";
import Factory from "./webDev/factory/Factory";
import Singleton from "./webDev/singleton/Singleton";
import {BrowserRouter, Route, NavLink, HashRouter} from "react-router-dom";
import {useState} from "react";
import Main from "./webDev/main/main";

import Command_v from './vladLen/command/command'




const Patterns = () => {

    const [patterns,setPatterns]=useState(()=>[
        'Main', 'Singleton','Factory','AbstractFactory','Builder','Decorator',
        'Facade','Proxy','Adapter','Composite','Bridge','Flyweight',
        'Mediator','Chain','Strategy','Memento','Template','Visitor',
        'Command','Observer','State','Iterator','Prototype'
    ])

    return (
        <div>

            <HashRouter>
                <div>
                    {patterns.map(pattern=>(<div key={pattern}>
                        <NavLink to={`/webDev/${pattern}`}>{pattern} </NavLink>
                    </div>))}
                </div>


                <Route path='/Main' component={Main}   />
                <Route path='/webDev/Singleton'  component={Singleton} />
                <Route path='/webDev/Factory'  component={Factory} />
                <Route path='/webDev/AbstractFactory'  component={AbstractFactory} />
                <Route path='/webDev/Builder'  component={Builder} />
                <Route path='/webDev/Decorator'  component={Decorator} />
                <Route path='/webDev/Facade'  component={Facade} />
                <Route path='/webDev/Proxy'  component={Proxy} />
                <Route path='/webDev/Adapter'  component={Adapter} />
                <Route path='/webDev/Composite'  component={Composite} />
                <Route path='/webDev/Bridge'  component={Bridge} />
                <Route path='/webDev/Flyweight'  component={Flyweight} />
                <Route path='/webDev/Mediator'  component={Mediator} />
                <Route path='/webDev/Chain'  component={Chain} />
                <Route path='/webDev/Strategy'  component={Strategy} />
                <Route path='/webDev/Memento'  component={Memento} />
                <Route path='/webDev/Template'  component={Template} />
                <Route path='/webDev/Visitor'  component={Visitor} />
                <Route path='/webDev/Command'  component={Command} />
                <Route path='/webDev/Observer'  component={Observer} />
                <Route path='/webDev/State'  component={State} />
                <Route path='/webDev/Iterator'  component={Iterator} />
                <Route path='/webDev/Prototype'  component={Prototype} />

                <Route exact path='/' component={Command_v}   />



            </HashRouter>

            {/*<Memento2/>*/}
        </div>
    );
}

export default Patterns;