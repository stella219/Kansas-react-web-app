import Lists from './lists';
import Tables from './tables';
import Images from './images';
import Heading from './heading';
import Paragraphs from './paragraphs';
import Form from './form';

export default function Lab1() {
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <Heading />
        <Paragraphs />
        <Lists />
        <Tables />
        <Images />
        <Form />
  </div>
  ); }