import VariablesandConstants from "./VariablesandConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./Templateliterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Style";
import AddOld from "./AddOld";
import Square from "./Square";
import Highlight from "./Highlight";
import Add from "./Add";
import PathParameters from "./PathParameters";
import { useSelector } from "react-redux";

export default function Lab3() {
    console.log('Hello World!');
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
      <div id="wd-lab3" className="container-fluid">
        <h2>Lab 3</h2>
        <ul className="list-group">
            {todos.map((todo: any) => (
              <li className="list-group-item" key={todo.id}>
                {todo.title}
              </li>
            ))}
        </ul><hr />
        <VariablesandConstants /> <br/>
        <VariableTypes /><br/>
        <BooleanVariables /> <br />
        <IfElse /> <br />
        <TernaryOperator /> <br />
        <ConditionalOutputIfElse /> <br />
        <ConditionalOutputInline /> <br />
        <LegacyFunctions /> <br />
        <ArrowFunctions /> <br />
        <ImpliedReturn /> <br />
        <TemplateLiterals /> <br />
        <SimpleArrays /> 
        <ArrayIndexAndLength /> 
        <AddingAndRemovingToFromArrays /> 
        <ForLoops /> 
        <MapFunction /> 
        <FindFunction /> 
        <FindIndex />
        <FilterFunction />
        <JsonStringify />
        <House />
        <TodoItem />
        <TodoList /><br />
        <Spreading />
        <Destructing />
        <FunctionDestructing />
        <DestructingImports />
        <Classes /><br />
        <Styles /> <br />
        <AddOld a={3} b={4} />
        <h4>Square of 4</h4>
        <Square>4</Square>
        <hr />
        <Highlight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
          vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
        </Highlight> <hr />
        <PathParameters />
  </div>
  ); 
}