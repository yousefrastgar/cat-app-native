import React from "react";
import Layout from "../layout";
import Cats from "../containers/cats";
import {connect} from "react-redux";

const Home = () => {
    return (
        <Layout>
            <Cats/>
        </Layout>
    );
}

export default connect(null)(Home);
