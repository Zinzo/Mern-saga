import React , { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Loadable from "react-loadable";

let router = "";

export const Loading = (props) => {
    if (props.error) {
        return <div className="loading-err">예기치 못한 오류가 발생하였습니다.</div>;
    } else if (props.timedOut) {
        return <div className="loading-time-out">
                데이터를 불러오지 못했습니다. <br/>다시 시도해주세요.</div>;
    } else if (props.pastDelay) {
        return <div className="loading-ing">
                <p>데이터를 불러오는 중입니다.<br/>잠시만 기다려주세요.</p>
            </div>;
    } else {
        return null;
    }
}

{/* 레이아웃 */}
const Header = Loadable({loader: () => import("./views/layouts/Header"),loading: Loading, timeout: 1000});
const Footer = Loadable({loader: () => import("./views/layouts/Footer"),loading: Loading, timeout: 1000});

{/* 페이지 */}
const HomePage = Loadable({loader: () => import("./views/pages/Home"),loading: Loading, timeout: 1000});
const AboutPage = Loadable({loader: () => import("./views/pages/About"),loading: Loading, timeout: 1000});

router = (
    <Fragment>
        <Router>
            <div className="wrapper">
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/about" component={AboutPage}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    </Fragment>
)

export default router;