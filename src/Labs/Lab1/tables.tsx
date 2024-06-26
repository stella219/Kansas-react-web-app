export default function tables() {
    return(
        <div id="wd-tables">
            <h4>Table Tag</h4>
            <table border={1} width="100%">       
                <thead>
                    <tr>
                        <th>Quiz</th>
                        <th>Topic</th>
                        <th>Date</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Q1</td>
                        <td>HTML</td>
                        <td>2/3/21</td>
                        <td>85</td>
                    </tr>
                    <tr>
                        <td>Q2</td>
                        <td>CSS</td>
                        <td>2/10/21</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>Q3</td>
                        <td>JavaScript</td>
                        <td>2/17/21</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td>Q4</td>
                        <td>React</td>
                        <td>2/24/21</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Q5</td>
                        <td>TypeScript</td>
                        <td>3/5/21</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td>Q6</td>
                        <td>Axios</td>
                        <td>3/12/21</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>Q7</td>
                        <td>Bootstrap</td>
                        <td>3/19/21</td>
                        <td>92</td>
                    </tr>
                    <tr>
                        <td>Q8</td>
                        <td>MangoDB</td>
                        <td>3/26/21</td>
                        <td>98</td>
                    </tr>
                    <tr>
                        <td>Q9</td>
                        <td>Napter</td>
                        <td>4/5/21</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>Q10</td>
                        <td>API</td>
                        <td>4/12/21</td>
                        <td>100</td>
                    </tr>
                </tbody>
                <tfoot>
                    <td colSpan={3}>Average</td>  
                    <td>92</td>
                </tfoot>
            </table>
        </div>  
    )
}