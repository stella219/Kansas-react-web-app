export default function AssignmentEditor() {
    return (
        <div id="wd-assignment-editor">
            <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
            <br />
            <br />
            <input id="wd-name" value="A1 - ENV + HTML" />
            <br />
            <br />
            <textarea id="wd-description" cols={45} rows={10}>
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify.
                The landing page should include the following:Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all
                relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
            </table>
            <br />
            <label htmlFor="wd-group">Assignment Group </label>
            <select id="wd-group">
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
            <br />
            <br />
            <label htmlFor="wd-dispplay-grade-as">Display Grade as </label>
            <select id="wd-dispplay-grade-as">
                <option selected value="Percentage">Percentage</option>
                <option value="Points">Points</option>
            </select>
            <br />
            <br />
            <label htmlFor="wd-submission-type">Submission Type </label>
            <select id="wd-submission-type">
                <option selected value="Online">Online</option>
                <option value="GitHub">Github</option>
            </select>
            <br />
            <br />
            <label htmlFor="wd-text-entry">Online Entry Options</label>
            <br />
            <input type="checkbox" name="wd-text-entry" id="wd-text-entry" />
            <label htmlFor="wd-chkbox-text">Text Entry</label> <br />
            <input type="checkbox" name="wd-text-entry" id="wd-website-url" />
            <label htmlFor="wd-chkbox-url">Website URL</label> <br />
            <input type="checkbox" name="wd-text-entry" id="wd-media-recording" />
            <label htmlFor="wd-chkbox-recording">Media Recording</label> <br />
            <input type="checkbox" name="wd-text-entry" id="wd-student-annotation" />
            <label htmlFor="wd-chkbox-annotation">Student Annotation</label> <br />
            <input type="checkbox" name="wd-text-entry" id="wd-file-upload" />
            <label htmlFor="wd-chkbox-uploads">File Uploads</label> <br />
            <br />
            <label htmlFor="wd-assign-to">Assign to </label> <br />
            <input id="wd-assign-to" value="Everyone" />
            <br />
            <br />
            <label htmlFor="wd-due-date">Due</label><br />
            <input type="date" id="wd-due-date" value="2024-05-20" />
            <br />
            <br />
            <label htmlFor="wd-available-from">Available from</label> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="wd-available-until">Until</label><br />
            <input type="date" id="wd-available-from" value="2024-05-06" /> &nbsp;
            <input type="date" id="wd-available-until" value="2024-05-20" />
            <br />
            <br />
            <button>Cancel</button> &nbsp; <button>Save</button>
        </div> 
    )
}