import "./index.css";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (9)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width:"270px", marginBottom:"35px"}}>
                        <div className="card h-60">
                            <img src="/images/react.jpg"/>
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS1234 React JS
                                </a> 
                                <p className="wd-dashboard-course-title card-text">
                                    Full stack software developer
                                    <p className="text-truncate small" style={{maxWidth: "100%"}}>
                                        20430 Summer 1 2024 Semester Full Term Grad
                                    </p>
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width:"270px", marginBottom:"35px"}}>
                        <div className="card">
                            <img src="/images/fundamental_cs.jpg"/>
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5001 Fundamental of CS
                                </a> 
                                <p className="wd-dashboard-course-title card-text">
                                Full stack software developer
                                    <p className="text-truncate small" style={{maxWidth: "100%"}}>
                                        20430 Summer 1 2024 Semester Full Term Grad
                                    </p>
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width:"270px", marginBottom:"35px"}}>
                        <div className="card">
                            <img src="/images/discrete_math.png"/>
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5002 Discrete Math
                                </a> 
                                <p className="wd-dashboard-course-title card-text">
                                    Full stack software developer
                                    <p className="text-truncate small" style={{maxWidth: "100%"}}>
                                        20430 Summer 1 2024 Semester Full Term Grad
                                    </p>
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width:"270px", marginBottom:"35px"}}>
                        <div className="card">
                            <img src="/images/oop.jpg"/>
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5004 OOP
                                </a> 
                                <p className="wd-dashboard-course-title card-text">
                                Full stack software developer
                                    <p className="text-truncate small" style={{maxWidth: "100%"}}>
                                        20430 Summer 1 2024 Semester Full Term Grad
                                    </p>
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width:"270px", marginBottom:"35px"}}>
                        <div className="card">
                            <img src="/images/data_structure.jpg"/>
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5008 Data Structure
                                </a> 
                                <p className="wd-dashboard-course-title card-text">
                                Full stack software developer
                                    <p className="text-truncate small" style={{maxWidth: "100%"}}>
                                        20430 Summer 1 2024 Semester Full Term Grad
                                    </p>
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width:"270px", marginBottom:"35px"}}>
                        <div className="card">
                            <img src="/images/database_mgt.jpg"/>
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5200 Database 
                                </a> 
                                <p className="wd-dashboard-course-title card-text">
                                Full stack software developer
                                    <p className="text-truncate small" style={{maxWidth: "100%"}}>
                                        20430 Summer 1 2024 Semester Full Term Grad
                                    </p>
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width:"270px", marginBottom:"35px"}}>
                        <div className="card">
                            <img src="/images/web_dev.jpg"/>
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5610 Web Development
                                </a> 
                                <p className="wd-dashboard-course-title card-text">
                                Full stack software developer
                                    <p className="text-truncate small" style={{maxWidth: "100%"}}>
                                        20430 Summer 1 2024 Semester Full Term Grad
                                    </p>
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width:"270px", marginBottom:"35px"}}>
                        <div className="card">
                            <img src="/images/algorithm.png"/>
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5800 Algorithm
                                </a> 
                                <p className="wd-dashboard-course-title card-text">
                                Full stack software developer
                                    <p className="text-truncate small" style={{maxWidth: "100%"}}>
                                        20430 Summer 1 2024 Semester Full Term Grad
                                    </p>
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width:"270px", marginBottom:"35px"}}>
                        <div className="card">
                            <img src="/images/nlp.png"/>
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home"
                                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS6210 NLP
                                </a> 
                                <p className="wd-dashboard-course-title card-text">
                                Full stack software developer
                                    <p className="text-truncate small" style={{maxWidth: "100%"}}>
                                        20430 Summer 1 2024 Semester Full Term Grad
                                    </p>
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}