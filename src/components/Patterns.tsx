import Memento from "./memento/memento";
import Memento2 from "./memento/Memento2.";
import Template from "./template/template";
import Visitor from "./Visitor/Visitor";
import Command from "./command/command";
import Observer from "./observer/observer";
import State from "./state/state";
import Iterator from "./iterator/iterator";
import Chain from "./chain/chain";
import Proxy from "./proxy/proxy";
import Decorator from "./decorator/decorator";
import Facade from "./facade/Facade";
import Adapter from "./adapter/adapter";
import Composite from "./composite/composite";
import Bridge from "./bridge/bridge";
import Flyweight from "./flyweight/flyweight";
import Mediator from "./Mediator/mediator";
import Strategy from "./Strategy/Strategy";
import Builder from "./Builder/builder";
import Prototype from "./prototype/prototype";
import AbstractFactory from "./abstract-factory/abstract-factory";
import Factory from "./Factory/Factory";
import Singleton from "./singleton/Singleton";
import {BrowserRouter, Route, NavLink, HashRouter} from "react-router-dom";




const Patterns = () => {
    return (
        <div>
            <li>поведінкові</li>
            <li>струкрурні</li>
            <li>породжуючі</li>

            <HashRouter>
                <div>
                    <div><NavLink to="Singleton">Singleton </NavLink></div>
                    <div><NavLink to="Factory">Factory </NavLink></div>
                    <div><NavLink to="AbstractFactory">AbstractFactory </NavLink></div>
                    <div><NavLink to="Builder">Builder </NavLink></div>
                    <div><NavLink to="Decorator">Decorator </NavLink></div>
                    <div><NavLink to="Facade">Facade </NavLink></div>
                    <div><NavLink to="Proxy">Proxy </NavLink></div>
                    <div><NavLink to="Adapter">Adapter </NavLink></div>
                    <div><NavLink to="Composite">Composite </NavLink></div>
                    <div><NavLink to="Bridge">Bridge </NavLink></div>
                    <div><NavLink to="Flyweight">Flyweight </NavLink></div>
                    <div><NavLink to="Mediator">Mediator </NavLink></div>
                    <div><NavLink to="Chain">Chain </NavLink></div>
                    <div><NavLink to="Strategy">Strategy </NavLink></div>
                    <div><NavLink to="Memento">Memento </NavLink></div>
                    <div><NavLink to="Template">Template </NavLink></div>
                    <div><NavLink to="Visitor">Visitor </NavLink></div>
                    <div><NavLink to="Command">Command </NavLink></div>
                    <div><NavLink to="Observer">Observer </NavLink></div>
                    <div><NavLink to="State">State </NavLink></div>
                    <div><NavLink to="Iterator">Iterator </NavLink></div>
                    <div><NavLink to="Prototype">Prototype </NavLink></div>
                </div>



                <Route path='/' component={()=><div>Main</div>}   />
                <Route path='/Singleton'  component={Singleton} />
                <Route path='/Factory'  component={Factory} />
                <Route path='/AbstractFactory'  component={AbstractFactory} />
                <Route path='/Builder'  component={Builder} />
                <Route path='/Decorator'  component={Decorator} />
                <Route path='/Facade'  component={Facade} />
                <Route path='/Proxy'  component={Proxy} />
                <Route path='/Adapter'  component={Adapter} />
                <Route path='/Composite'  component={Composite} />
                <Route path='/Bridge'  component={Bridge} />
                <Route path='/Flyweight'  component={Flyweight} />
                <Route path='/Mediator'  component={Mediator} />
                <Route path='/Chain'  component={Chain} />
                <Route path='/Strategy'  component={Strategy} />
                <Route path='/Memento'  component={Memento} />
                <Route path='/Template'  component={Template} />
                <Route path='/Visitor'  component={Visitor} />
                <Route path='/Command'  component={Command} />
                <Route path='/Observer'  component={Observer} />
                <Route path='/State'  component={State} />
                <Route path='/Iterator'  component={Iterator} />
                <Route path='/Prototype'  component={Prototype} />
            </HashRouter>

            {/*<Memento2/>*/}
        </div>
    );
}

export default Patterns;