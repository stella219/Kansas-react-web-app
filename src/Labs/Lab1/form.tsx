export default function form() {
    return (
        <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
            <h5>Text Fields</h5>
            <label htmlFor="wd-text-fields-username">Username:</label>
            <input id="wd-text-fields-username" placeholder="jdoe" />
            <br />
            <label htmlFor="wd-text-fields-password">Password:</label>
            <input type="password" id="wd-text-fields-password" value='123@#$asd' />
            <br />
            <label htmlFor="wd-text-fields-first-name">First name:</label>
            <input type="text" id="wd-text-fields-first-name" title="John" />
            <br />
            <label htmlFor="wd-text-fields-last-name">Last name:</label>
            <input type="text" id="wd-text-fields-last-name" placeholder="Doe" 
            value="Wonderland" title="The last name"/>
            <br />
        </form>
        <h5>Text boxes</h5>
        <label>Biography:</label> <br />
        <textarea id="wd-textarea" cols={30} rows={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esee cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
        </textarea>
        <h5 id="wd-buttons">Buttons</h5>
        <button id="wd-all-good" onClick={() => alert('All good!')} type="button">
            Hellow World!
        </button>

        <h5>File upload</h5>
        <input id="wd-upload" type="file" />  

        <h5 id="wd-radio-buttons">Radio buttons</h5>
        <label>Favorite movie genre:</label> <br />
        <input type="radio" name="radio-genre" id="wd-radio-comedy" />
        <label htmlFor="wd-radio-comedy">Comedy</label> <br />
        <input type="radio" name="radio-genre" id="wd-radio-drama" />
        <label htmlFor="wd-radio-drama">Drama</label> <br />
        <input type="radio" name="radio-genre" id="wd-radio-scifi" checked />
        <label htmlFor="wd-radio-scifi">Science Fiction</label> <br />
        <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
        <label htmlFor="wd-radio-fantasy">Fantasy</label>

        <h5 id="wd-checkboxes">Checkboxes</h5>
        <label>Favorite movie genre:</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" checked/>
        <label htmlFor="wd-chkbox-comedy">Comedy</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
        <label htmlFor="wd-chkbox-drama">Drama</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" checked />
        <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
        <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

        <h4 id="wd-dropdowns">Dropdowns</h4>

        <h5>Select one</h5>
        <label htmlFor="wd-select-one-genre"> Favorite movie genre:</label> <br/>
        <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI"> Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
        </select>

        <h5>Select many</h5>
        <label htmlFor="wd-select-many-genre">Favorite movie genres:</label> <br/>
        <select id="wd-select-many-genre" multiple>
            <option selected value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
        </select>

        <h4>Other HTML field types</h4>
        <label htmlFor="wd-text-fields-email">Email: </label>
        <input type="email" placeholder="jdoe@somewhere.com" id="wd-text-fields-email" /> <br />

        <label htmlFor="wd-text-fields-salary-start">Starting Salary: </label>
        <input type="number" id="wd-text-fields-salary-start" placeholder="1000" value="100000" /><br/>

        <label htmlFor="wd-text-fields-rating">Rating: </label>
        <input type="range" id="wd-text-fields-rating" placeholder="Doe" max="5" value="4" /><br/>

        <label htmlFor="wd-text-fields-dob">Date of birth: </label>
        <input type="date" id="wd-text-fields-dob" value="2000-01-21" /><br/>
        
        <h4>Anchor tag</h4>
        Please <a href="https://www.lipsum.com">click here</a> to get dummy text
        <h4>Github Repository</h4>
        <br />
        Please click <a href="https://github.com/stella219/Kansas-react-web-app.git">GitHub repository</a> for this course
</div> 
    )
}